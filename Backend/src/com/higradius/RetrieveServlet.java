package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Servlet implementation class Retrieve
 */
//@WebServlet("/getData")
public class RetrieveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			getdata(request, response);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static List<ReactPojo> displayTable(int start, int noOfRecords) {
		List<ReactPojo> InvoiceList = new ArrayList<>();
		String SELECT = "SELECT * FROM invoice_details ORDER BY doc_id ASC LIMIT "+(start-1)+","+noOfRecords;
		// Step 1: Establishing a Connection
		try (Connection connection = SqlConnection.getConnection();
			// Step 2:Create a statement using connection object
			PreparedStatement preparedStatement = connection.prepareStatement(SELECT);) {
			System.out.println(preparedStatement);
			// Step 3: Execute the query or update query
			ResultSet rs = preparedStatement.executeQuery();
			// Step 4: Process the ResultSet object.
			while (rs.next()) {
				ReactPojo react = new ReactPojo();
	            react.setCust_number(rs.getString(2));
	            react.setName_customer(rs.getString(3));
	            react.setClear_date(rs.getDate(4));
	            react.setDoc_id(rs.getString(6));
	            react.setDocument_create_date(rs.getDate(8));
	            react.setDue_in_date(rs.getDate(9));
	            react.setInvoice_currency(rs.getString(10));
	            react.setTotal_open_amount(rs.getString(14));
	            react.setNotes(rs.getString(19)==null ? "" : rs.getString(19));
				InvoiceList.add(react);
			}
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		return InvoiceList;
	}
	private void getdata(HttpServletRequest request, HttpServletResponse response)
			throws SQLException, IOException, ServletException {
		String spageid = request.getParameter("page");
		int pageid = Integer.parseInt(spageid);
		int total=50;
		if (pageid==1) {}
		else {
			pageid = pageid-1;
			pageid = pageid*total+1;
		}
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		try {
			List<ReactPojo> listUser = new ArrayList<>();
			listUser = displayTable(pageid,total);
			Gson gson = new Gson();
			String data = gson.toJson(listUser);
			out.print(data);
		} 
		catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		finally {
			out.close();
		}
	}
}