import { createBrowserRouter } from "react-router";
import Homepage from "../pages/home/Homepage";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Aboutpage from "../pages/about/Aboutpage";
import Contactpage from "../pages/contact/Contactpage";
import LoginPage from "../pages/Auth/LoginPage";
import Registerpage from "../pages/Auth/Registerpage";
import Tutors from "../pages/tutors/Tutors";
import Tuitions from "../pages/tuitions/Tuitions";
import DashboardLayout from "../layouts/DashboardLayout";
import StudentDashboard from "../pages/dashboards/student/StudentDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Homepage,
      },
      {
        path: "/about",
        Component: Aboutpage,
      },
      {
        path: "/contact",
        Component: Contactpage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/signup",
        Component: Registerpage,
      },
      {
        path: "/tutors",
        Component: Tutors,
      },
      {
        path: "/tuitions",
        Component: Tuitions,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/students",
        Component: StudentDashboard,
      },
    ],
  }
]);
