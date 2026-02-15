import React, { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import StudentDashboard from "./student/StudentDashboard";
import TeacherDashboard from "./teacher/TeacherDashboard";
import AdminDashboard from "./ADMIN/AdminDashboard";
import { useAxiosSecure } from "../../hooks/UseAxios";
import LoadingPage from "../../components/Loader/LoadingPage";
import { useNavigate } from "react-router";

function DashboardHome() {
  const axios = useAxiosSecure();
  const { currentUser } = UseAuth();
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);
const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) return;

    const FetchData = async () => {
      try {
        setLoader(true);
        const res = await axios.get("/private/userrole");

        const role = res.data.role;

        if (role === "student") {
          navigate("/dashboard/student");
        } else if (role === "teacher") {
          navigate("/dashboard/teacher");
        } else if (role === "admin") {
          navigate("/dashboard/admin");
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };

    FetchData();
  }, [currentUser, axios, navigate]);

  if (loader) return <LoadingPage />;

  return null;
}
export default DashboardHome;
