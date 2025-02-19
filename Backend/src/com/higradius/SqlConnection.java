package com.higradius;
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.sql.SQLException; 

//This class can be used to initialize the database connection 
public class SqlConnection { 

 	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
 	static final String DB_URL = "jdbc:mysql://localhost/h2h_internship";
 
 	static final String USER = "root";
 	static final String PASS = "password";
 	protected static Connection getConnection() {
 		Connection connection = null;
 		try {
 			Class.forName(JDBC_DRIVER);
 			connection = DriverManager.getConnection(DB_URL,USER,PASS);
 		}
 		catch (SQLException e) {
 			e.printStackTrace();
 		}
 		catch (ClassNotFoundException e) {
 			e.printStackTrace();
 		}
 		return connection;
 	}
} 
