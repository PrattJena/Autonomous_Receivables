package com.higradius;

import java.io.IOException;
import java.sql.SQLException;


import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;

//@WebServlet("/addData") 
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final String INSERT_SQL = "INSERT INTO invoice_details(cust_number,name_customer,doc_id,due_in_date,total_open_amount,notes)"+
			"VALUES(?,?,?,?,?,?);";
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			insertinvoice(request,response);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private void insertinvoice(HttpServletRequest request, HttpServletResponse response) 
			throws SQLException, IOException {
		InvoiceDetails details = new InvoiceDetails();
		String input =request.getParameter("data");
		HashMap<String,String> value = new Gson().fromJson(input, new TypeToken<HashMap<String, String>>(){}.getType());
		// Takes parameter and value and converts in to json since post request take an object as the url parameter
		details.setName_customer(value.get("Cust_name"));
		details.setCust_number(value.get("Cust_No"));
		details.setDoc_id(value.get("Bill_Id"));
		details.setTotal_open_amount(value.get("Bill_Currency"));
		details.setDue_in_date(value.get("Due_Date")); 
		// Since we are using our previous pojo class and there we had formatted date of type yyyymmdd so here we are replacing so we can properly parse it 
		details.setNotes(value.get("Note"));
		addData(details);
		response.sendRedirect("list");
	}
	public void addData(InvoiceDetails item) throws SQLException {
		try (Connection connection = SqlConnection.getConnection();
				PreparedStatement statement = connection.prepareStatement(INSERT_SQL)) {
				statement.setString(1, item.getCust_number());
				statement.setString(2, item.getName_customer());
				statement.setLong(3,item.getDoc_id());               
				statement.setDate(4, item.getDue_in_date());
				statement.setDouble(5,item.getTotal_open_amount());
				statement.setString(6,item.getNotes());
				System.out.println(statement);
				statement.executeUpdate();
		} 
		catch (SQLException e) {
		e.printStackTrace();
		}
	}
}
