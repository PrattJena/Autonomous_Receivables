
# Autonomous Receivables

This project is a **full-stack web application** designed to automate and optimize **Accounts Receivable (AR) processes** using **data analytics, invoice tracking, and financial forecasting**. The system integrates a **Java-based backend** hosted on **Apache Tomcat** with a **React.js frontend**, using **MySQL** for data storage and analysis.

## Project Overview

This system helps **finance teams** manage receivables efficiently by:
- Automating **invoice tracking and processing**.
- Providing **real-time insights into customer payments**.
- Implementing **data-driven financial forecasting**.
- Allowing users to perform **CRUD operations** on invoices via a web-based UI.

The project includes:
- **Backend:** Java-based servlets running on **Apache Tomcat**, connected to a **MySQL database**.
- **Frontend:** A **React.js** interface for managing invoices and customer data.
- **Data Analysis:** Analyzed **1805793.csv** using **Jupyter Notebook** (`Main_notebook.ipynb`) to derive insights into customer payment behaviors.

## Features

### **🔹 Backend (Java, Apache Tomcat)**
- **REST API with Java Servlets** for CRUD operations.
- **Database connectivity using MySQL Connector**.
- **Endpoints for retrieving, adding, updating, and deleting invoices.**
- **Authentication and request handling using Java Servlets.**

### **🔹 Frontend (React.js)**
- **User-friendly invoice dashboard.**
- **Table view for managing invoices.**
- **Modals for adding, editing, and deleting invoices.**
- **API integration with Java backend using fetch API.**

### **🔹 Data Analysis**
- **Exploratory Data Analysis (EDA)** on invoice data (`Main_notebook.ipynb`).
- **Insights into late payments, customer trends, and payment forecasting.**
- **Visualization of financial patterns using Pandas, NumPy, and Matplotlib.**

## Technologies Used

### **Backend**
- **Java Servlets** (for REST API).
- **Apache Tomcat** (server hosting).
- **MySQL** (database for invoice storage).
- **MySQL Connector** (database communication).
- **Gson (Google JSON Library)** (for JSON parsing).

### **Frontend**
- **React.js** (for dynamic UI components).
- **Redux** (for state management).
- **Material-UI** (for UI styling).
- **Fetch API** (to connect with backend services).

### **Data Analysis**
- **Python (Pandas, NumPy, Matplotlib)** (for data processing).
- **Jupyter Notebook** (for visual analytics on invoice data).

## Folder Structure


/Autonomous-Receivables
│── backend/  # Java Servlets, MySQL Connector, Apache Tomcat setup
│── frontend/ # React.js UI
│── data/     # 1805793.csv (invoice data)
│── analysis/ # Main_notebook.ipynb (data analysis)
│── .gitignore
│── README.md
│── requirements.txt / package.json / pom.xml (dependencies)


## API Endpoints (Backend)
| Method | Endpoint                  | Description                        |
|--------|---------------------------|------------------------------------|
| GET    | `/api/invoices`           | Retrieve all invoices             |
| POST   | `/api/invoices/add`       | Add a new invoice                 |
| PUT    | `/api/invoices/edit/:id`  | Edit an existing invoice          |
| DELETE | `/api/invoices/delete/:id`| Delete an invoice                 |

## Results and Insights
- **Improved invoice tracking and management** through a centralized dashboard.
- **Automated financial forecasting** using data analysis techniques.
- **Optimized receivables processing**, reducing manual workload and improving cash flow prediction.

This system provides **finance professionals** with a **comprehensive solution** for handling invoices, predicting receivables, and improving collection strategies.
