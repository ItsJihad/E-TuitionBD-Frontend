# 🎓 eTuitionBd - Tuition Management Platform (Client Side)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## 🔗 Live Links
- **Live Site:** [[On Netlify](https://etutorsbd.netlify.app/)]
- **Server Repo:** [[SERVER REPO](https://github.com/ItsJihad/E-TuitionBD-Backend)]

## 📖 Project Overview
**eTuitionBd** is a comprehensive Tuition Management System designed to bridge the gap between students/parents and qualified tutors. It solves the real-world problem of finding verified tuition by providing a platform for tuition posting, tutor applications, financial tracking, and structured communication.

The system features distinct dashboards for **Students**, **Tutors**, and **Admins**, ensuring a seamless workflow from posting a requirement to finalizing a tutor via secure payment.

## ✨ Key Features

### 🚀 General
- **Responsive Design:** Fully responsive layout for Mobile, Tablet, and Desktop using Tailwind CSS & DaisyUI.
- **Authentication:** Secure Email/Password and Google Social Login via Firebase.
- **JWT Security:** Role-based route protection (Student, Tutor, Admin) using JSON Web Tokens.
- **Animations:** Engaging UI transitions using Framer Motion.

### 👨‍🎓 Student Features
- **Post Tuition:** Create detailed tuition requirements (Class, Subject, Budget, etc.).
- **Manage Requests:** View applicants, review tutor profiles, and accept/reject applications.
- **Secure Payment:** Integrated **Stripe** payment gateway to finalize tutor hiring.
- **Dashboard:** Track posted tuitions and payment history.

### 🧑‍🏫 Tutor Features
- **Browse Jobs:** View available tuition posts with advanced filtering.
- **Apply for Tuition:** Submit applications with expected salary and credentials.
- **Dashboard:** Track application status (Pending/Approved/Rejected) and view earnings.

### 🛡️ Admin Features
- **User Management:** Manage users, update roles, and ban users if necessary.
- **Tuition Management:** Review, Approve, or Reject tuition posts to ensure quality.
- **Analytics:** View total platform earnings and transaction history.

### 🧩 Advanced Features (Challenges)
- **Search & Sort:** Search tuitions by subject/location and sort by budget/date.
- **Pagination:** implemented on the Tuition Listing page for better performance.
- **Advanced Filtering:** Filter by Class, Subject, and Location.

## 🛠️ Technologies Used
- **Frontend:** React.js, Tailwind CSS, DaisyUI
- **Animation:** Framer Motion
- **Routing:** React Router DOM
- **State Management/Data Fetching:** TanStack Query (React Query) / Axios
- **Authentication:** Firebase Auth
- **Payment:** Stripe.js / React Stripe
- **Forms:** React Hook Form

## 📦 npm Packages
- `react-router-dom`
- `axios`
- `firebase`
- `framer-motion`
- `swiper` (if used for sliders)
- `sweetalert2` / `react-hot-toast`
- `@stripe/react-stripe-js`
- `@tanstack/react-query`

## ⚙️ Environment Variables
To run this project locally, create a `.env.local` file in the root directory and add the following:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_API_URL=http://localhost:5000 (or your server url)
VITE_PAYMENT_GATEWAY_PK=your_stripe_publishable_key
