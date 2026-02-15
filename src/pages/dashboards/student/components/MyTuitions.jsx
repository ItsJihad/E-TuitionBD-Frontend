import { useEffect, useState } from "react";
import {
  MapPin,
  BookOpen,
  BadgeDollarSign,
  FileText,
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import { useAxiosSecure } from "../../../../hooks/UseAxios";
import UseAuth from "../../../../hooks/UseAuth";
import LoadingPage from "../../../../components/Loader/LoadingPage";
import Swal from "sweetalert2";

export default function MyTuitions() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  const axios = useAxiosSecure();
  const { currentUser } = UseAuth();

  useEffect(() => {
    if (!currentUser) return;

    const FetchData = async () => {
      setLoader(true);
      const res = await axios.get("/student/alluserposts");
      setPosts(res.data.data);
      setLoader(false);
    };

    FetchData();
  }, [currentUser]);

  if (loader) return <LoadingPage />;

  const handleEdit = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPost(null);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    setSelectedPost({
      ...selectedPost,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update this post?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    });

    if (!result.isConfirmed) return;

    try {
      const updatedData = {
        subject: selectedPost.subject,
        classLevel: selectedPost.classLevel,
        budget: selectedPost.budget,
        location: selectedPost.location,
        description: selectedPost.description,
      };

      await axios.patch(
        `/student/post/update/${selectedPost._id}`,
        updatedData,
      );

      const updatedPosts = posts.map((post) =>
        post._id === selectedPost._id ? selectedPost : post,
      );

      setPosts(updatedPosts);

      closeModal();

      Swal.fire("Updated!", "Your post has been updated.", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };


  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This post will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`/student/post/delete/${id}`);

      const updatedPosts = posts.filter((post) => post._id !== id);
      setPosts(updatedPosts);

      Swal.fire("Deleted!", "Your post has been deleted.", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          My Tuition Posts
        </h1>
        <p className="text-slate-500 mt-2">
          Manage and update your tuition requests.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg">
              <BookOpen size={20} />
              {post.subject}
            </div>

            <p className="text-sm text-slate-500 mt-1">{post.classLevel}</p>

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
                <BadgeDollarSign size={16} className="text-emerald-600" />৳
                {post.budget}/month
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => handleEdit(post)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => handleDelete(post._id)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

     
      {isOpen && selectedPost && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-6">Update Tuition Post</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="subject"
                value={selectedPost.subject}
                onChange={handleChange}
                className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                name="classLevel"
                value={selectedPost.classLevel}
                onChange={handleChange}
                className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                name="budget"
                type="number"
                value={selectedPost.budget}
                onChange={handleChange}
                className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                name="location"
                value={selectedPost.location}
                onChange={handleChange}
                className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <textarea
                name="description"
                value={selectedPost.description}
                onChange={handleChange}
                rows={3}
                className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                type="submit"
                className="w-full mt-4 bg-indigo-600 text-white py-2.5 rounded-xl hover:bg-indigo-700 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
