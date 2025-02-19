//package com.higradius;
//
////import java.io.IOException;
////import java.io.PrintWriter;
////import java.util.ArrayList;
////import java.util.List;
////
////import javax.servlet.ServletException;
////import javax.servlet.annotation.WebServlet;
////import javax.servlet.http.HttpServlet;
////import javax.servlet.http.HttpServletRequest;
////import javax.servlet.http.HttpServletResponse;
////
////import com.google.gson.Gson;
////
/////**
//// * Servlet implementation class dummyServlet
//// */
////@WebServlet(urlPatterns = {"/invoiceDetails"}, name ="DummyServlet", description = "DummyServlet returns json")
////public class DummyServlet extends HttpServlet {
////	private static final long serialVersionUID = 1L;
////    private InvoiceDetailsCRUD details = new InvoiceDetailsCRUD();
////    /**
////     * @see HttpServlet#HttpServlet()
////     */
////    public DummyServlet() {
////        super();
////        // TODO Auto-generated constructor stub
////    }
////
////	/**
////	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
////	 */
////	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
////		// TODO Auto-generated method stub
////		
////		List<InvoiceDetails> invoiceList = new ArrayList<>();
////		invoiceList = details.displayTable(); // Getting the arrayList we returned in InvoiceDetailsCRUD displayTable method
////		
////		Gson gson = new Gson();
////		String invoiceJSON = gson.toJson(invoiceList);
////		
//////		response.getWriter().append("Served at: ").append(request.getContextPath());
//////		String name = request.getParameter("name");
//////		Response resp = new Response();
//////		resp.setName(name);
//////		Gson gson = new Gson();
//////		 String data = gson.toJson(resp);
////		 PrintWriter out = response.getWriter();
////		 response.setContentType("application/json");
////		 response.setCharacterEncoding("UTF-8");
////		 out.print(invoiceJSON);
////		 out.close();
////		
////	}
////
////	/**
////	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
////	 */
////	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
////		// TODO Auto-generated method stub
////		doGet(request, response);
////	}
////
////}
////import java.io.FileWriter;
//import java.io.IOException;
//import java.io.PrintWriter;
////import java.sql.Date;
//import java.sql.SQLException;
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import com.google.gson.Gson;
////import com.google.gson.GsonBuilder;
//
///**
// * Servlet implementation class InvoiceServelet
// */
//@WebServlet("/")
//public class DummyServlet extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//	private InvoiceDetailsCRUD details;
//    public void init() {
//    	this.details=new InvoiceDetailsCRUD();
//    }
//protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
//	}
//protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		String action = request.getServletPath();
//		try {
//			switch (action) {
//			case "/getdata":
//				getdata(request,response);
//				break;
//			case "/insert":
//				insertinvoice(request,response);
//				break;
//			case "/delete":
//				deleteinvoice(request,response);
//				break;
//			case "/update":
//				updateinvoice(request,response);
//				break;
//			}
//			
//		} catch (SQLException ex) {
//			throw new ServletException(ex);
//		}
//	}
//	private void getdata(HttpServletRequest request, HttpServletResponse response)
//			throws SQLException, IOException, ServletException {
//		String spageid = request.getParameter("page");
//		int pageid = Integer.parseInt(spageid);
//		int total=50;
//		if (pageid==1) {}
//		else {
//			pageid = pageid-1;
//			pageid = pageid*total+1;
//		}
//		PrintWriter out = response.getWriter();
//		response.setContentType("application/json");
//		response.setCharacterEncoding("UTF-8");
//		try {
////		List<InvoiceDetails> listUser = details.displayTable();
//		List<InvoiceDetails> listUser = new ArrayList<>();
//		listUser = details.displayTable(pageid,total);
//		Gson gson = new Gson();
//        String data = gson.toJson(listUser);
//        out.print(data);
////        response.setStatus(200);
//		} 
//		catch (Exception e) {
//		e.printStackTrace();
//		response.setStatus(400);
//		
//	} finally {
//        out.close();
//	}
//	}
//	private void insertinvoice(HttpServletRequest request, HttpServletResponse response) 
//			throws SQLException, IOException {
//		InvoiceDetails tmp = new InvoiceDetails();
//		tmp.setName_customer(request.getParameter("Customer Name"));
//		tmp.setCust_number(request.getParameter("Customer No"));
//		tmp.setDoc_id(request.getParameter("Bill_id"));
//		tmp.setTotal_open_amount(request.getParameter("Bill_Currency"));
//		tmp.setDue_in_date(request.getParameter("Due_Date"));
//		tmp.setNotes(request.getParameter("Notes"));
//		details.insertInvoice(tmp);
//		response.sendRedirect("list");
//	}
//	private void deleteinvoice(HttpServletRequest request, HttpServletResponse response) 
//			throws SQLException, IOException {
//		long doc_id = Long.parseLong(request.getParameter("doc_id"));
//		details.deleteInvoice(doc_id);
//		response.sendRedirect("list");
//	}
//	private void updateinvoice(HttpServletRequest request, HttpServletResponse response) 
//			throws SQLException, IOException {
//		InvoiceDetails tmp = new InvoiceDetails();
//		tmp.setDoc_id(request.getParameter("Bill_id"));
//		tmp.setTotal_open_amount(request.getParameter("Bill_Currency"));
//		tmp.setNotes(request.getParameter("Notes"));
//		details.updateTablePOJO(tmp);
////	}
//}
//
//
