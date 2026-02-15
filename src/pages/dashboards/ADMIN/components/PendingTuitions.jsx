import {
  User,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Phone,
  Pencil,
  Trash2,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../hooks/UseAxios";
import LoadingPage from "../../../../components/Loader/LoadingPage";
import Swal from "sweetalert2";

export default function AllUsers() {
  const axios = useAxiosSecure();
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoader(true);
        const res = await axios.get("/admin/allusers");
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    fetchUsers();
  }, [axios]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete User?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Yes, Delete",
    });

    if (!result.isConfirmed) return;

    try {
      setActionLoading(id);
      await axios.delete(`/admin/deleteuser/${id}`);
      setUsers((prev) => prev.filter((user) => user._id !== id));

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire("Error", "Failed to delete user.", "error");
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = async (user) => {
    const { value: formValues } = await Swal.fire({
      title: "Update User Info",
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Name" value="${user.name}">
        <input id="swal-email" class="swal2-input" placeholder="Email" value="${user.email}">
        <input id="swal-phone" class="swal2-input" placeholder="Phone" value="${user.phone}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: () => {
        const name = document.getElementById("swal-name").value;
        const email = document.getElementById("swal-email").value;
        const phone = document.getElementById("swal-phone").value;

        if (!name || !email || !phone) {
          Swal.showValidationMessage("All fields are required");
          return false;
        }

        return { name, email, phone };
      },
    });

    if (!formValues) return;

    try {
      setActionLoading(user._id);

      await axios.patch(`/admin/updateuser/${user._id}`, formValues);

      setUsers((prev) =>
        prev.map((u) => (u._id === user._id ? { ...u, ...formValues } : u)),
      );

      Swal.fire({
        icon: "success",
        title: "Updated Successfully!",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire("Error", "Failed to update user.", "error");
    } finally {
      setActionLoading(null);
    }
  };

  const getRoleIcon = (role) => {
    if (role === "admin")
      return <ShieldCheck size={14} className="text-red-500" />;
    if (role === "teacher")
      return <Briefcase size={14} className="text-blue-500" />;
    if (role === "student")
      return <GraduationCap size={14} className="text-indigo-500" />;
  };

  if (loader) return <LoadingPage />;

  return (
    <div className="relative space-y-10 p-4">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

      <header>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Users Management
        </h1>
        <p className="text-slate-500 mt-2">
          Update user information or remove accounts.
        </p>
      </header>

      <div className="grid gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center shadow">
                  <User className="text-indigo-600" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {user.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Mail size={14} />
                    {user.email}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                    <Phone size={14} />
                    {user.phone}
                  </div>

                  <div className="flex items-center gap-2 text-xs mt-2">
                    {getRoleIcon(user.role)}
                    <span className="capitalize">{user.role}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  disabled={actionLoading === user._id}
                  onClick={() => handleEdit(user)}
                  className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:scale-110 transition"
                >
                  <Pencil size={18} />
                </button>

                <button
                  disabled={actionLoading === user._id}
                  onClick={() => handleDelete(user._id)}
                  className="p-3 bg-red-100 text-red-600 rounded-xl hover:scale-110 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
