# 🎓 ScholarStream - Scholarship Management System

![ScholarStream Banner](https://i.ibb.co.com/c7cB4RX/Screenshot-2026-01-05-042513.png)

**ScholarStream** is a comprehensive full-stack web platform designed to bridge the gap between students seeking financial aid and scholarship providers. It simplifies the process of finding, applying for, and managing scholarships through a user-friendly interface and robust role-based dashboards for Students, Moderators, and Admins.

### 🔗 Live Links
<a href="https://scholarstream-2217c.web.app/home" target="_blank"><img src="https://img.shields.io/badge/Live_Site-Visit_Now-FF5722?style=for-the-badge&logo=vercel&logoColor=white" /></a>
<a href="https://github.com/ALA22min22/clint-ScholarStream-.git" target="_blank"><img src="https://img.shields.io/badge/Client_Repo-GitHub-black?style=for-the-badge&logo=github&logoColor=white" /></a>

---

## ✨ Core Features

* **🔐 User Authentication:** Secure login/registration and Social Login (Google) via **Firebase**.
* **👥 Role-Based Access Control (RBAC):** Distinct dashboards and permissions for **Students**, **Moderators**, and **Admins**.
* **🔎 Smart Search & Filter:** Students can search scholarships by university name, degree category, or location.
* **💳 Secure Payment Integration:** Hassle-free application fee processing using **Stripe**.
* **🆔 Unique Application Tracking:** Every application generates a **Random Tracking ID** for secure and easy reference.
* **📝 Dynamic Management:** Students can update applications; Moderators can approve/reject; Admins oversee the entire system.
* **📊 Analytics & Insights:** Admins can view fund statistics and application trends using interactive charts.
* **📱 Responsive Design:** Fully optimized for all devices using Tailwind CSS and DaisyUI.

---

## 🛠️ Technologies Used

<div align="center">
<table border="1" cellspacing="0" cellpadding="10">
  <thead>
    <tr align="center">
      <th>Category</th>
      <th colspan="4">Technologies / Tools</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><b>Frontend</b></td>
      <td><img src="https://skillicons.dev/icons?i=react" width="40"><br>React.js</td>
      <td><img src="https://skillicons.dev/icons?i=vite" width="40"><br>Vite</td>
      <td><img src="https://skillicons.dev/icons?i=tailwind" width="40"><br>Tailwind</td>
      <td><img src="https://skillicons.dev/icons?i=js" width="40"><br>JavaScript</td>
    </tr>
    <tr align="center">
      <td><b>Backend</b></td>
      <td><img src="https://skillicons.dev/icons?i=nodejs" width="40"><br>Node.js</td>
      <td><img src="https://skillicons.dev/icons?i=express" width="40"><br>Express.js</td>
      <td><img src="https://skillicons.dev/icons?i=firebase" width="40"><br>Firebase</td>
      <td>-</td>
    </tr>
    <tr align="center">
      <td><b>Database</b></td>
      <td><img src="https://skillicons.dev/icons?i=mongodb" width="40"><br>MongoDB</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr align="center">
      <td><b>Payment & ID</b></td>
      <td><b>Stripe API</b><br>Payment Gateway</td>
      <td><b>Random ID</b><br>Tracking System</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr align="center">
      <td><b>Tools</b></td>
      <td><img src="https://skillicons.dev/icons?i=github" width="40"><br>GitHub</td>
      <td><img src="https://skillicons.dev/icons?i=vscode" width="40"><br>VS Code</td>
      <td><img src="https://skillicons.dev/icons?i=figma" width="40"><br>Figma</td>
      <td><img src="https://skillicons.dev/icons?i=npm" width="40"><br>NPM</td>
    </tr>
  </tbody>
</table>
</div>

---

## 📦 Key Dependencies

This project relies on the following major libraries:

* **@tanstack/react-query**: For high-performance data fetching and synchronization.
* **axios**: For making secure API requests to the Node/Express backend.
* **stripe/react-stripe-js**: For handling secure credit card payments.
* **recharts**: For visualizing application and scholarship data charts.
* **react-hook-form**: For managing complex scholarship application forms.
* **react-router-dom**: For handling multi-role dashboard navigation.
* **sweetalert2 / react-toastify**: For real-time user feedback and alerts.

---

## 💻 How to Run Locally

Follow these steps to set up the project on your local machine:

**1. Clone the repository:**
> git clone https://github.com/ALA22min22/clint-ScholarStream-.git

**2. Navigate to the project directory:**
> cd clint-ScholarStream-

**3. Install dependencies:**
> npm install

**4. Set up Environment Variables:**
Create a `.env.local` file in the root folder and add your credentials:
> VITE_apiKey=your_firebase_api_key <br>
> VITE_authDomain=your_firebase_auth_domain <br>
> VITE_projectId=your_firebase_project_id <br>
> VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key <br>

**5. Run the development server:**
> npm run dev

---

<h3 align="center">📫 Connect with Me</h3>
<div align="center">
  <a href="https://www.linkedin.com/in/md-alamin-dev" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://github.com/ALA22min22" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</div>
