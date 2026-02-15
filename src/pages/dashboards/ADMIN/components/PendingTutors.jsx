import {
  User,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  RefreshCw,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../hooks/UseAxios";
import LoadingPage from "../../../../components/Loader/LoadingPage";
import Swal from "sweetalert2";

export default function ManageTeachers() {
  const axios = useAxiosSecure();

  const [teachers, setTeachers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [changingId, setChangingId] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoader(true);
        const res = await axios.get("/admin/allteachers");
        setTeachers(res.data);
      } catch (error) {
        Swal.fire("Error", "Failed to load teachers", "error");
      } finally {
        setLoader(false);
      }
    };

    fetchTeachers();
  }, [axios]);

  const handleChangeRole = async (teacher) => {
    const { value: newRole } = await Swal.fire({
      title: "Change Role",
      input: "select",
      inputOptions: {
        admin: "Admin",
        teacher: "Teacher",
        student: "Student",
      },
      inputValue: teacher.role,
      showCancelButton: true,
      confirmButtonText: "Update Role",
      confirmButtonColor: "#6366f1",
    });

    if (!newRole || newRole === teacher.role) return;

    try {
      setChangingId(teacher._id);

      await axios.patch(`/admin/updateuser/${teacher._id}`, {
        role: newRole,
      });

      setTeachers((prev) =>
        prev.map((t) => (t._id === teacher._id ? { ...t, role: newRole } : t)),
      );

      Swal.fire({
        icon: "success",
        title: "Role Updated!",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire(
        "Update Failed",
        error.response?.data?.message || "Server error",
        "error",
      );
    } finally {
      setChangingId(null);
    }
  };

  const getRoleBadge = (role) => {
    const styles = {
      admin: "bg-red-100 text-red-600",
      teacher: "bg-indigo-100 text-indigo-600",
      student: "bg-emerald-100 text-emerald-600",
    };
    return styles[role] || "bg-gray-100 text-gray-600";
  };

  const getRoleIcon = (role) => {
    if (role === "admin")
      return <ShieldCheck size={14} className="text-red-500" />;
    if (role === "teacher")
      return <Briefcase size={14} className="text-indigo-500" />;
    if (role === "student")
      return <GraduationCap size={14} className="text-emerald-500" />;
  };

  if (loader) return <LoadingPage />;

  return (
    <div className="relative space-y-12">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <header>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Manage Teachers
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Change teacher roles dynamically.
        </p>
      </header>

      <div className="grid gap-8">
        {teachers.map((teacher) => (
          <div
            key={teacher._id}
            className="group bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="p-5 bg-indigo-100 rounded-2xl shadow-inner">
                  <User size={24} className="text-indigo-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {teacher.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">{teacher.email}</p>

                  <div
                    className={`mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadge(
                      teacher.role,
                    )}`}
                  >
                    {getRoleIcon(teacher.role)}
                    {teacher.role}
                  </div>
                </div>
              </div>

              <button
                disabled={changingId === teacher._id}
                onClick={() => handleChangeRole(teacher)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <RefreshCw size={18} />
                Change Role
              </button>
            </div>
          </div>
        ))}

        {teachers.length === 0 && (
          <p className="text-center text-slate-500">No teachers found.</p>
        )}
      </div>
    </div>
  );
}
