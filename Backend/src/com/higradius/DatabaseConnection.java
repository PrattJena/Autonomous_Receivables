package com.higradius;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;


public class DatabaseConnection {
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/h2h_internship";
	
	// Database Credentials
	static final String USER = "root";
	static final String PASS = "password";
	
	// Reading CSV
	private static ArrayList<InvoiceDetails> invoice;
	public static ArrayList<InvoiceDetails> readCsv(String filepath) {
		BufferedReader reader = null;
		try {
			reader = new BufferedReader(new FileReader(filepath));
			invoice = new ArrayList<InvoiceDetails>();
			String line = null;
			reader.readLine(); // Skips first line
			
			// Reading line by line 
			while((line = reader.readLine()) != null) {
				   String[] data = line.split(",");
				   
				   // Reads one row splits the different values on basis of , and then stores in data string array
				   if(data.length > 0) {
					   InvoiceDetails tp = new InvoiceDetails();
					   // Since first index of array is business code we take data[0] and so on
					   tp.setBusiness_code(data[0]);
					   tp.setCust_number(data[1]);
					   tp.setName_customer(data[2]);
					   tp.setClear_date(data[3]);
					   tp.setBusiness_year(data[4]);
					   tp.setDoc_id(data[5]);
					   tp.setPosting_date(data[6]);
					   tp.setDocument_create_date(data[7]);
					   tp.setDue_in_date(data[8]);
					   tp.setInvoice_currency(data[9]);
					   tp.setDocument_type(data[10]);
					   tp.setPostingid(data[11]);
					   tp.setArea_business(data[12]);
					   tp.setTotal_open_amount(data[13]);
					   tp.setBaseline_create_date(data[14]);
					   tp.setCust_payment_terms(data[15]);
					   tp.setInvoice_id(data[16]);
					   tp.setIsOpen(data[17]);
					   
					   invoice.add(tp);
					   }
				   }
		
		} catch (FileNotFoundException fe) {
			fe.printStackTrace();
		} catch (IOException ie) {
			ie.printStackTrace();
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			try {
				reader.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return invoice;
	}
	
	public static void main(String[] args) {
		Connection conn = null;
		PreparedStatement stmt = null;
		Statement stmt1 = null;
		int batchSize = 100;
		String filepath = "/home/pratt/Documents/HRC/1805793.csv";
		try {
			// Register JDBC driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			// Open a connection
		    System.out.println("Connecting to a selected database...");
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			System.out.println("Connected database successfully...");
			
			// This line doesn't send each line every time and helps us in batching statements so the process is much much faster 
			conn.setAutoCommit(false);
			
			// Execute Query
			System.out.println("Inserting records into the table...");
			String sql = "INSERT INTO invoice_details (business_code, cust_number, name_customer, clear_date, business_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, area_business, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id, isOpen) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
			stmt = conn.prepareStatement(sql);
			
			long startTime = System.currentTimeMillis();
			
			// Deleting the previous values in tables to avoid any discrepancy
			String sql1 = "DELETE FROM invoice_details";
			stmt1 = conn.createStatement();
			stmt1.executeUpdate(sql1);
			
			int count = 0;
			
			ArrayList<InvoiceDetails> list = readCsv(filepath) ;
			for (InvoiceDetails obj: list) {
				String business_code = obj.getBusiness_code();
				String cust_number = obj.getCust_number();
				String name_customer = obj.getName_customer();
				java.sql.Timestamp clear_date = obj.getClear_date();
				Integer business_year = obj.getBusiness_year();
				Long doc_id = obj.getDoc_id();
				java.sql.Date posting_date = obj.getPosting_date();
				java.sql.Date document_create_date = obj.getDocument_create_date();
				java.sql.Date due_in_date = obj.getDue_in_date();
				String invoice_currency = obj.getInvoice_currency();
				String document_type = obj.getDocument_type();
				Integer postingid = obj.getPostingid(); 
				String area_business = obj.getArea_business();
				Double total_open_amount = obj.getTotal_open_amount();
				java.sql.Date baseline_create_date = obj.getBaseline_create_date();
				String cust_payment_terms = obj.getCust_payment_terms();
				Long invoice_id = obj.getInvoice_id();
				Short isOpen = obj.getIsOpen();
				
				stmt.setString(1, business_code);
				stmt.setString(2, cust_number);
				stmt.setString(3, name_customer);
				stmt.setTimestamp(4, clear_date);
				stmt.setInt(5, business_year);
				stmt.setLong(6, doc_id);
				stmt.setDate(7, posting_date);
				stmt.setDate(8, document_create_date);
				stmt.setDate(9, due_in_date);
				stmt.setString(10, invoice_currency);
				stmt.setString(11, document_type);
				stmt.setInt(12, postingid);
				stmt.setString(13, area_business);
				stmt.setDouble(14, total_open_amount);
				stmt.setDate(15, baseline_create_date);
				stmt.setString(16, cust_payment_terms);
				if (invoice_id == null) {
					stmt.setLong(17, doc_id);
				}
				else {
					stmt.setLong(17, invoice_id);
				}
				stmt.setShort(18, isOpen);
				
				// Adds statement to batch
				stmt.addBatch();
				count ++;
				if (count%batchSize == 0) { // When the count reaches a multiple of batch size it executes the current batch
					stmt.executeBatch();
				}
			}
			stmt.executeBatch();
			conn.commit();
			long endTime = System.currentTimeMillis(); // Time taken to delete and upload 
			long timeElapsed = (endTime - startTime);
			System.out.println(count+" Records affected");
			System.out.println("Time Elapsed is: "+timeElapsed+" milliseconds");
			stmt.close();
			conn.close();
		}
		catch (SQLException se) {
			se.printStackTrace();
		} 
		catch (Exception e) {
			e.printStackTrace();
		} 
		finally {
			try { // If no statement present then close the statement
				if (stmt!=null)
					stmt.close();
			}
			catch(SQLException se2) {
			}//nothing to do
			
			try{ // if no connection then close the connection
				if (conn!=null)
					conn.close();
			}
			catch (SQLException se) {
				se.printStackTrace();
			}
			}
		System.out.println("Goodbye");
	}
}
