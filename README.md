📌 Overview

This project is a backend system for a finance dashboard that manages users, financial records, and provides summary analytics with Role-Based Access Control (RBAC).

The system is designed using clean architecture principles with proper separation of concerns.

🚀 Features
	•	User Management with roles (Viewer, Analyst, Admin)
	•	Financial Records CRUD (Create, Read, Delete)
	•	Dashboard Summary (Income, Expense, Balance)
	•	Role-Based Access Control (RBAC)
	•	Clean layered architecture

🧠 Architecture Flow
Client → Routes → Auth Middleware → RBAC → Controller → Service → Store → Response

🛠️ Tech Stack
	•	Node.js
	•	Express.js
	•	UUID
	•	In-memory storage

📁 Project Structure
finance-dashboard-backend/
│
├── src/
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── recordRoutes.js
│   │   └── dashboardRoutes.js
│   │
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── recordController.js
│   │   └── dashboardController.js
│   │
│   ├── services/
│   │   ├── userService.js
│   │   ├── recordService.js
│   │   └── dashboardService.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── rbacMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── store/
│   │   └── store.js
│   │
│   ├── utils/
│   │   └── validator.js
│   │
│   └── app.js
│
├── package.json
└── README.md

⚙️ Setup Instructions

1. Clone the repository
git clone https://github.com/Rahul9672/finance-dashboard-backend.git
cd finance-dashboard-backend

2. Install dependencies
npm install

3. Run the server
npm run dev

Server runs at:
http://localhost:3000

🧪 API Testing (Postman)

⸻

👤 1. Create User

OST /users

Request:
{
  "name": "Rahul",
  "role": "admin"
}

Response:
{
  "id": "f0eab447-xxxx",
  "name": "Rahul",
  "role": "admin",
  "active": true
}

🔐 Header (IMPORTANT)
Use this in all protected routes:
user-id: <copied-user-id>


💰 2. Create Record

POST /records

Headers:
user-id: <user_id>

Request:
{
  "amount": 5000,
  "type": "income",
  "category": "salary"
}

Response:
{
  "id": "uuid",
  "userId": "user_id",
  "amount": 5000,
  "type": "income",
  "category": "salary"
}

🔐 Role-Based Access Control
Role             Access
Viewer           Read only
Analyst          Read + Dashboard
Admin            Full access


⚠️ Error Handling
Code            Meaning
400             Bad Request
401             Unauthorized
403             Forbidden
500             Server 


💾 Data Storage
	•	Uses in-memory store
	•	Data resets on server restart

⚖️ Tradeoffs
	•	Simple but not persistent
	•	Mock authentication

⸻

🚀 Future Improvements
	•	JWT Authentication
	•	MongoDB Integration
	•	Pagination & Filters
	•	Swagger Documentation

⸻

✅ Conclusion

This project demonstrates backend architecture, API design, RBAC implementation, and financial data processing in a clean and scalable manner.
:::
