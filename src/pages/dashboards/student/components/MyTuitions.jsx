import { useState } from "react";
import {
  MapPin,
  BookOpen,
  BadgeDollarSign,
  FileText,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

export default function MyTuitions() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Dummy example (replace with your real data)
  const posts = [
    {
      _id: "1",
      subject: "Mathematics",
      class: "Class 10",
      budget: "8000",
      description: "Need a tutor for Algebra & Geometry.",
      location: "Gulshan, Dhaka",
    },
  ];

  const handleEdit = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  return (
    <div className="space-y-10">

      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          My Tuition Posts
        </h1>
        <p className="text-slate-500 mt-2">
          Manage and update your tuition requests.
        </p>
      </header>

      {/* Tuition Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

            {/* Subject */}
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg">
              <BookOpen size={20} />
              {post.subject}
            </div>

            {/* Class */}
            <p className="text-sm text-slate-500 mt-1">
              {post.class}
            </p>

            {/* Description */}
            <div className="flex items-start gap-2 mt-4 text-slate-600 text-sm">
              <FileText size={16} className="mt-1 text-slate-400" />
              <span>{post.description}</span>
            </div>

            {/* Location & Budget */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={16} className="text-rose-500" />
                {post.location}
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <BadgeDollarSign size={16} className="text-emerald-600" />
                ৳{post.budget}/month
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => handleEdit(post)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                <Pencil size={16} />
                Edit
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300">
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {isOpen && selectedPost && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl">

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-6">
              Update Tuition Post
            </h2>

            <form className="space-y-4">

              <div>
                <label className="text-sm text-slate-600">Subject</label>
                <input
                  type="text"
                  defaultValue={selectedPost.subject}
                  className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Class</label>
                <input
                  type="text"
                  defaultValue={selectedPost.class}
                  className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Budget</label>
                <input
                  type="number"
                  defaultValue={selectedPost.budget}
                  className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Location</label>
                <input
                  type="text"
                  defaultValue={selectedPost.location}
                  className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Description</label>
                <textarea
                  defaultValue={selectedPost.description}
                  rows={3}
                  className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

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
