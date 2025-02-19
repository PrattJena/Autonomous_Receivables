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

//@WebServlet("/deleteData") 
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final String DELETE_SQL = "DELETE FROM invoice_details WHERE doc_id IN ";

	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			deleteinvoice(request,response);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private void deleteinvoice(HttpServletRequest request, HttpServletResponse response) 
			throws SQLException, IOException {
		
		String input =request.getParameter("data");
		HashMap<String,String> value = new Gson().fromJson(input, new TypeToken<HashMap<String, String>>(){}.getType());
		String bill_id_array = value.get("Bill_Id_array");
		System.out.println(bill_id_array);
		deleteData(bill_id_array);
		response.sendRedirect("list");
	}
	public void deleteData(String id_array) throws SQLException {
		try (Connection connection = SqlConnection.getConnection()) 
		{
			String DELETE = DELETE_SQL+id_array;
			System.out.println(DELETE);
			PreparedStatement statement = connection.prepareStatement(DELETE);           
			System.out.println(statement);
			statement.executeUpdate();
		} 
		catch (SQLException e) {
		e.printStackTrace();
		}
	}
}