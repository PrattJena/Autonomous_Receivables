package com.higradius;

import java.io.IOException;
import java.sql.SQLException;


import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import javax.servlet.ServletException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;

//@WebServlet("/addData") 
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final String UPDATE_SQL = "UPDATE invoice_details SET total_open_amount = ?,notes =? WHERE doc_id = ?";
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			editinvoice(request,response);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private void editinvoice(HttpServletRequest request, HttpServletResponse response) 
			throws SQLException, IOException {
		InvoiceDetails details = new InvoiceDetails();
		String input =request.getParameter("data");
		HashMap<String,String> value = new Gson().fromJson(input, new TypeToken<HashMap<String, String>>(){}.getType());
		// Takes parameter and value and converts in to json since post request take an object as the url parameter
		details.setTotal_open_amount(value.get("Bill_Currency"));
		details.setNotes(value.get("Note")); 
		details.setDoc_id(value.get("Bill_Id"));
		// Since we are using our previous pojo class and there we had formatted date of type yyyymmdd so here we are replacing so we can properly parse it 
		addData(details);
		response.sendRedirect("list");
	}
	public void addData(InvoiceDetails item) throws SQLException {
		try (Connection connection = SqlConnection.getConnection();
				PreparedStatement statement = connection.prepareStatement(UPDATE_SQL)) {
				statement.setDouble(1,item.getTotal_open_amount());
				statement.setString(2,item.getNotes());
				statement.setLong(3,item.getDoc_id());               
				System.out.println(statement);
				statement.executeUpdate();
		} 
		catch (SQLException e) {
		e.printStackTrace();
		}
	}
}
