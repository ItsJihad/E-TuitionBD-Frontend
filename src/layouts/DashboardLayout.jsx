import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  PlusCircle,
  BookOpen,
  Users,
  CreditCard,
  Settings,
  Menu,
  X,
  LogOut,
  Magnet,
  Users2,
  ChartNoAxesGantt,
  BanknoteArrowUp,
} from "lucide-react";
import { Link, Outlet } from "react-router";
import UseAuth from "../hooks/UseAuth";
import { useAxiosSecure } from "../hooks/UseAxios";
import LoadingPage from "../components/Loader/LoadingPage";
import Footerbar from "../components/footer/Footerbar";
import DashboardFooter from "./footerForDash";

export const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser } = UseAuth();
  const axios = useAxiosSecure();
  const menuItems = [
    {
      name: "Overview",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard/student/",
    },
    {
      name: "My Tuitions",
      icon: <BookOpen size={20} />,
      path: "/dashboard/student/my-tuitions",
    },
    {
      name: "Post New Tuition",
      icon: <PlusCircle size={20} />,
      path: "/dashboard/student/post-tuition",
    },
    {
      name: "Applied Tutors",
      icon: <Users size={20} />,
      path: "/dashboard/student/applications",
    },
    {
      name: "Payments",
      icon: <CreditCard size={20} />,
      path: "/dashboard/student/payments",
    },
    {
      name: "Profile Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/student/settings",
    },
  ];
  const TeacherMenuItems = [
    {
      name: "Overview",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard/teacher/",
    },
    {
      name: "My Applications",
      icon: <BookOpen size={20} />,
      path: "/dashboard/teacher/my-applications",
    },
    {
      name: "Approved Tuitions",
      icon: <PlusCircle size={20} />,
      path: "/dashboard/teacher/approved-tuition",
    },
    {
      name: "Revenue History",
      icon: <Users size={20} />,
      path: "/dashboard/teacher/Revenue-history",
    },
    {
      name: "Profile Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/teacher/settings",
    },
  ];
  const AdminMenuItems = [
    {
      name: "Overview",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard/admin/",
    },
    {
      name: "Review Posts",
      icon: <BookOpen size={20} />,
      path: "/dashboard/admin/review-applications",
    },

    {
      name: "Manage Role",
      icon: <PlusCircle size={20} />,
      path: "/dashboard/admin/manage-role",
    },
    {
      name: "Total Users",
      icon: <Users2 size={20} />,
      path: "/dashboard/admin/allusers",
    },
    {
      name: "Profile Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/admin/settings",
    },
  ];

  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    const fetchData = async () => {
      try {
        setLoader(true);

        const res = await axios.get("/private/userrole");
        setUser(res.data.role);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [currentUser]);

  if (loader) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between border-b border-slate-800">
          <Link to={"/"} className="flex items-center gap-3">
            <div className="bg-indigo-500 p-2 rounded-lg">
              <BookOpen size={22} />
            </div>
            <span className="text-lg font-bold tracking-tight">eTuitionBd</span>
          </Link>

          {/* Close Button (Mobile Only) */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-2">
          {user === "student"
            ? menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-indigo-400 transition-all group"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </a>
              ))
            : user === "teacher"
              ? TeacherMenuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-indigo-400 transition-all group"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))
              : AdminMenuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-indigo-400 transition-all group"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Top Bar (Only for Menu Toggle) */}
        <div className="lg:hidden h-16 flex items-center px-4 bg-white border-b border-slate-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-slate-600"
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 font-bold text-slate-800">Dashboard</h1>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
          <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
        <DashboardFooter></DashboardFooter>
      </main>
    </div>
  );
};
