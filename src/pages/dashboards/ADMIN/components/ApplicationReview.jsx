import {
  BookOpen,
  MapPin,
  BadgeDollarSign,
  FileText,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../hooks/UseAxios";
import LoadingPage from "../../../../components/Loader/LoadingPage";
import Swal from "sweetalert2";

export default function ManagePrivatePosts() {
  const axios = useAxiosSecure();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/admin/allposts");
      setPosts(res.data);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch posts", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const updateStatus = async (id, status) => {
    const confirm = await Swal.fire({
      title: `Are you sure?`,
      text: `You are about to ${status} this post.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: status === "approved" ? "#16a34a" : "#dc2626",
      confirmButtonText: `Yes, ${status}`,
    });

    if (!confirm.isConfirmed) return;

    try {
      await axios.patch(`/student/post/update/${id}`, {
        status: status,
      });

      await fetchPosts();

      Swal.fire({
        icon: "success",
        title: `Post ${status}`,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire("Error", "Action failed", "error");
    }
  };

  if (loading) return <LoadingPage />;

  return (
    <div className="relative space-y-10">
      <header>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Manage Private Tuition Posts
        </h1>
        <p className="text-slate-500 mt-2">
          Approve or reject student tuition requests.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg">
              <BookOpen size={20} />
              {post.subject}
            </div>

            <p className="text-sm text-slate-500 mt-1">
              Class {post.classLevel}
            </p>

            <div className="flex items-start gap-2 mt-4 text-slate-600 text-sm">
              <FileText size={16} className="mt-1 text-slate-400" />
              <span>{post.description}</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={16} className="text-rose-500" />
                {post.location}
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <BadgeDollarSign size={16} className="text-emerald-600" />৳{" "}
                {post.budget}
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  post.status === "approved"
                    ? "bg-emerald-100 text-emerald-600"
                    : post.status === "rejected"
                      ? "bg-rose-100 text-rose-600"
                      : "bg-amber-100 text-amber-600"
                }`}
              >
                {post.status || "pending"}
              </span>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => updateStatus(post._id, "approved")}
                disabled={post.status === "approved"}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition disabled:opacity-50"
              >
                <CheckCircle2 size={16} />
                Approve
              </button>

              <button
                onClick={() => updateStatus(post._id, "rejected")}
                disabled={post.status === "rejected"}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition disabled:opacity-50"
              >
                <XCircle size={16} />
                Reject
              </button>
            </div>
          </div>
        ))}

        {posts.length === 0 && (
          <p className="text-center text-slate-500 col-span-2">
            No private posts found.
          </p>
        )}
      </div>
    </div>
  );
}
