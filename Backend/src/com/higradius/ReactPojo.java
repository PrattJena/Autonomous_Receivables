package com.higradius;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class ReactPojo {
	private String cust_number;
	private String name_customer;
	private Long doc_id;
	private java.sql.Date document_create_date;
	private String invoice_currency;
	private java.sql.Date due_in_date;
	private Double total_open_amount;
	private String notes;
	private java.sql.Date clear_date;
	
	
	public String getCust_number() {
		return cust_number;
	}
	public void setCust_number(String cust_number) {
		try {
			if (cust_number.isEmpty()) {
				this.cust_number = null;
			}
			else {
				this.cust_number = cust_number;
			}
		} catch (NullPointerException ne) {
			this.cust_number = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	
	
	// Customer Name
	public String getName_customer() {
		return name_customer;
	}
	public void setName_customer(String name_customer) {
		try {
			if (name_customer.isEmpty()) {
				this.name_customer = null;
			}
			else {
				this.name_customer = name_customer;
			}
		} catch (NullPointerException ne) {
			this.name_customer = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	// Due Date
	public java.sql.Date getClear_date() {
		return clear_date;
	}
	public void setClear_date(java.util.Date clear_date) {
	    java.sql.Date sql_clear_date = null;
		try {
			if (clear_date == null) {
				this.clear_date= null;
			}
			else {
				sql_clear_date = new java.sql.Date(clear_date.getTime());
				this.clear_date = sql_clear_date;
			}
		} catch (NullPointerException ne) {
			this.clear_date= null;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	public Long getDoc_id() {
		return doc_id;
	}
	public void setDoc_id(String doc_id) {
		try {
			if (doc_id.isEmpty()) {
				this.doc_id = null;
			}
			else {
				Long parsed_doc_id = Long.parseLong(doc_id);
		        this.doc_id = parsed_doc_id; 
			}

		} catch (NullPointerException ne) {
			this.doc_id= null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	
	
	public java.sql.Date getDocument_create_date() {
		return document_create_date;
	}
	public void setDocument_create_date( java.util.Date document_create_date) {
	    java.sql.Date sql_create_date = null;
		try {
			if (document_create_date==null) {
				this.document_create_date = null;
			}
			else {
				sql_create_date = new java.sql.Date(document_create_date.getTime());
				this.document_create_date = sql_create_date;
			}
		} catch (NullPointerException ne) {
			this.document_create_date = null;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public String getInvoice_currency() {
		return invoice_currency;
	}
	public void setInvoice_currency(String invoice_currency) {
		try {
			if (invoice_currency.isEmpty()) {
				this.invoice_currency = null;
			}
			else {
				this.invoice_currency = invoice_currency;
			}
		} catch (NullPointerException ne) {
			this.invoice_currency = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	
	
	// Due Date
	public java.sql.Date getDue_in_date() {
		return due_in_date;
	}
	public void setDue_in_date(java.util.Date due_in_date) {
	    java.sql.Date sql_due_date = null;
		try {
			if (due_in_date == null) {
				this.due_in_date= null;
			}
			else {
//				parsed1 = sdf.parse(due_in_date);
				sql_due_date = new java.sql.Date(due_in_date.getTime());
				this.due_in_date = sql_due_date;
			}
		} catch (NullPointerException ne) {
			this.due_in_date= null;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public Double getTotal_open_amount() {
		return total_open_amount;
	}
	public void setTotal_open_amount(String total_open_amount) {
		try {
			if (total_open_amount.isEmpty()) {
				this.total_open_amount = null;
			}
			else {
				Double parsed_total_open_amount = Double.parseDouble(total_open_amount);
				this.total_open_amount = parsed_total_open_amount; 
			}
		} catch (NullPointerException ne) {
			this.total_open_amount = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}	
	}
	
	
	
	// Notes
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
}
