package com.higradius;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class InvoiceDetails {
	private String business_code;
	private String cust_number;
	private String name_customer;
	private java.sql.Timestamp clear_date;
	private Integer business_year;
	private Long doc_id;
	private java.sql.Date posting_date;
	private java.sql.Date document_create_date;
	private java.sql.Date due_in_date;
	private String invoice_currency;
	private String document_type;
	private Integer postingid; /// Doubtful
	private String area_business;
	private Double total_open_amount;
	private java.sql.Date baseline_create_date;
	private String cust_payment_terms;
	private Long invoice_id;
	private Short isOpen;
	private String notes;/// Doubtful 
	
	// Business Code
	public String getBusiness_code() {
		return business_code;
	}
	public void setBusiness_code(String business_code) {
		try {
			if (business_code.isEmpty()) {
				this.business_code = null;
			}
			else {
				this.business_code = business_code;
			}
		} catch (NullPointerException ne) {
			this.business_code = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	// Customer no.
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
	
	// Clear date
	public java.sql.Timestamp getClear_date() {
		return clear_date;
	}
	public void setClear_date(String clear_date) {
		try {
			if (clear_date.isEmpty()) {
				this.clear_date = null;
			}
			else {
		        Timestamp ts = Timestamp.valueOf(clear_date);
				this.clear_date = ts;
			}
		} catch (NullPointerException ne) {
			this.cust_number = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	// Business Year
	public Integer getBusiness_year() {
		return business_year;
	}
	public void setBusiness_year(String business_year) {
		try {
			if(business_year.isEmpty()) {
				this.business_year = null;
			}
			else {
//		        Year y = Year.of(Integer.valueOf(business_year).intValue());
		        Integer y = Integer.parseInt(business_year);
				this.business_year = y; 				
			}
		} catch (NullPointerException ne) {
			this.business_year= null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	// Document Id
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
	
	// Posting Date
	public java.sql.Date getPosting_date() {
		return posting_date;
	}
	public void setPosting_date(String posting_date) {
		try {
			if (posting_date.isEmpty()) {
				this.posting_date = null;
			}
			else {
				java.sql.Date dt = java.sql.Date.valueOf(posting_date);
				this.posting_date = dt;
			}
		} catch (NullPointerException ne) {
			this.posting_date = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}

	// Doc Create Date
	public java.sql.Date getDocument_create_date() {
		return document_create_date;
	}
	public void setDocument_create_date(String document_create_date) {
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	    java.util.Date parsed = null;
	    java.sql.Date sql_create_date = null;
		try {
			if (document_create_date.isEmpty()) {
				this.document_create_date = null;
			}
			else {
				parsed = sdf.parse(document_create_date);
				sql_create_date = new java.sql.Date(parsed.getTime());
				this.document_create_date = sql_create_date;
			}
		} catch (ParseException pe) {
			pe.printStackTrace();
		} catch (NullPointerException ne) {
			this.document_create_date = null;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// Due Date
	public java.sql.Date getDue_in_date() {
		return due_in_date;
	}
	public void setDue_in_date(String due_in_date) {
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	    java.util.Date parsed1 = null;
	    java.sql.Date sql_due_date = null;
		try {
			if (due_in_date.isEmpty()) {
				this.due_in_date= null;
			}
			else {
				parsed1 = sdf.parse(due_in_date);
				sql_due_date = new java.sql.Date(parsed1.getTime());
				this.due_in_date = sql_due_date;
			}
		} catch (ParseException pe) {
			// TODO Auto-generated catch block
			pe.printStackTrace();
		} catch (NullPointerException ne) {
			this.due_in_date= null;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
		
	// Invoice currency
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
	
	// Document Type
	public String getDocument_type() {
		return document_type;
	}
	public void setDocument_type(String document_type) {
		try {
			if (document_type.isEmpty()) {
				this.document_type = null;
			}
			else {
				this.document_type = document_type;
			}
		} catch (NullPointerException ne) {
			this.document_type = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	// Posting Id
	public Integer getPostingid() {
		return postingid;
	}
	public void setPostingid(String postingid) {
		try {
			if (postingid.isEmpty()) {
				this.postingid = null;
			}
			else {
				Integer parsed_postingid = Integer.parseInt(postingid);
				this.postingid = parsed_postingid; 
			}
		} catch (NullPointerException ne) {
			this.postingid = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	// Area of business
	public String getArea_business() {
		return area_business;
	}
	public void setArea_business(String area_business) {
		try {
			if (area_business.isEmpty()) {
				this.area_business= null;
			}
			else {
				this.area_business = area_business;
			}
		} catch (NullPointerException ne) {
			this.area_business = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	// Total Open Amount
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
	
	// Baseline Create Date
	public java.sql.Date getBaseline_create_date() {
		return baseline_create_date;
	}
	public void setBaseline_create_date(String baseline_create_date) {
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	    java.util.Date parsed2 = null;
	    java.sql.Date sql_baseline_date = null;
		try {
			if (baseline_create_date.isEmpty()) {
				this.baseline_create_date = null;
			}
			else {
				parsed2 = sdf.parse(baseline_create_date);
				sql_baseline_date = new java.sql.Date(parsed2.getTime());
				this.baseline_create_date = sql_baseline_date;
			}
		} catch (ParseException pe) {
			// TODO Auto-generated catch block
			pe.printStackTrace();
		} catch (NullPointerException ne) {
			this.baseline_create_date= null;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// Customer payment Terms
	public String getCust_payment_terms() {
		return cust_payment_terms;
	}
	public void setCust_payment_terms(String cust_payment_terms) {
		try {
			if (cust_payment_terms.isEmpty()) {
				this.cust_payment_terms= null;
			}
			else {
				this.cust_payment_terms = cust_payment_terms;
			}
		} catch (NullPointerException ne) {
			this.cust_payment_terms = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}
	
	// Invoice ID
	public Long getInvoice_id() {
		return invoice_id;
	}
	public void setInvoice_id(String invoice_id) {
		try {
			if (invoice_id.isEmpty()) {
				this.invoice_id = null;
			}
			else {
				Long parsed_invoice_id = Long.parseLong(invoice_id);
				this.invoice_id = parsed_invoice_id; 
			}
		} catch (NullPointerException ne) {
			this.invoice_id = null;
		} catch (Exception e) {
			e.printStackTrace();		
		}		
	}
	
	// IsOpen
	public Short getIsOpen() {
		return isOpen;
	}
	public void setIsOpen(String isOpen) {
		try {
			if(isOpen.isEmpty()) {
				this.isOpen = null;
			}
			else {
				Short parsed_isOpen = Short.parseShort(isOpen);
				this.isOpen = parsed_isOpen; 
			}
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

