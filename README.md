# 🎓 ScholarStream - Scholarship Management Platform

## 📖 Project Overview
**ScholarStream** is a robust MERN (MongoDB, Express.js, React, Node.js) application designed to centralize and simplify the educational financial aid process. It serves as a bridge between students seeking scholarships and universities offering them. The platform ensures a secure environment for managing applications, payments, and reviews through distinct role-based permissions for Students, Moderators, and Admins.

## 🖼 Screenshot
![ScholarStream Homepage](https://i.ibb.co.com/c7cB4RX/Screenshot-2026-01-05-042513.png)

---

## ⚙️ Main Technologies
* **Frontend:** React (Vite), Tailwind CSS, DaisyUI.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB.
* **Authentication:** Firebase Auth & JSON Web Token (JWT).
* **Payment Gateway:** Stripe.
* **Animations:** Framer Motion.

---

## 🌟 Core Features
* **🔐 Secure Multi-Role System:** Role-based access control (RBAC) with dedicated dashboards for Admin (User/Scholarship management), Moderator (Application review), and Student (Applying/Tracking).
* **💳 Integrated Payment System:** Secure application fee processing via Stripe, with logic to handle payment success and failure scenarios.
* **🔎 Advanced Search & Filtering:** Server-side implementation for searching by scholarship name, university, or degree, and filtering by category or country.
* **📊 Admin Analytics:** Interactive data visualization using charts to track total users, fees collected, and scholarship distribution.
* **📝 Comprehensive Application Tracking:** Students can track their application status (Pending -> Processing -> Completed) and receive feedback from moderators.
* **⭐ Interactive Review System:** Students can rate and review scholarships, which are then displayed on the details page for others to see.

---

## 📦 Key Dependencies
### Frontend:
* `react-router-dom`: For client-side routing and private routes.
* `@tanstack/react-query`: For efficient data fetching and caching.
* `framer-motion`: For modern UI animations.
* `stripe/react-stripe-js`: For payment integration.
* `recharts`: For generating analytics charts.
* `axios`: For API communication.

### Backend:
* `jsonwebtoken`: For secure token-based authentication (JWT).
* `dotenv`: For managing environment variables (Firebase/MongoDB keys).
* `cors`: To handle cross-origin requests.
* `stripe`: For server-side payment verification.

---

## 💻 How to Run Locally

Follow these steps to set up the project locally:

**1. Clone the repository:**
> git clone (https://github.com/ALA22min22/clint-ScholarStream-.git)

**2. Navigate to the project directory:**
> cd ScholarStream

**3. Install dependencies (Both Client & Server):**
> cd client && npm install
> cd ../server && npm install

**4. Set up Environment Variables:**
Create a `.env` file in the **server** folder and a `.env.local` in the **client** folder.
* **Server:** `MONGODB_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`.
* **Client:** Firebase Config Keys, Stripe Public Key.

**5. Run the Application:**
* Start Server: `npm start` (in server folder).
* Start Client: `npm run dev` (in client folder).

---

## 🔗 Resources & Links
* **Live Site:** [scholarstream-2217c.web.app/home](https://scholarstream-2217c.web.app/home)
* **UI Inspiration:** UIverse, DaisyUI Docs.
* **Documentation:** [React Docs](https://react.dev), [Stripe Docs](https://stripe.com/docs).

---

<h3 align="center">📫 Developed by (MD. Alamin)</h3>
