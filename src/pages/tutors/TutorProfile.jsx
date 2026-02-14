import {
  Mail,
  User,
  BadgeCheck,
  Sparkles,
  X
} from "lucide-react";
import { useLoaderData } from "react-router";
import { useState } from "react";

export default function TutorProfile() {
  const tutors = useLoaderData();
  const tutor=tutors.data
  console.log(tutor.length);
  

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(tutor.name);
  const [email, setEmail] = useState(tutor.email);

  const dummyImage =
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop";

  const handleSave = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_ServerLink}/teachers/${teacher._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        }
      );

      if (!res.ok) throw new Error("Failed to update");

      alert("Profile updated successfully");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">

          {
            tutor.map((tutor,id)=> (<div key={id} className="relative bg-white/80 backdrop-blur-lg rounded-3xl border border-white/40 shadow-xl p-10 text-center overflow-hidden">

            <img
              src={dummyImage}
              alt="Tutor profile"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-white shadow-xl"
            />

            <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-xs font-semibold border border-emerald-100">
              <BadgeCheck className="w-4 h-4" />
              Verified Tutor
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-center gap-2">
                <User className="w-5 h-5 text-indigo-600" />
                <h1 className="text-3xl font-bold text-slate-900">
                  {tutor.name}
                </h1>
              </div>

              <div className="flex items-center justify-center gap-2 mt-3 text-slate-600 text-sm">
                <Mail className="w-4 h-4 text-slate-400" />
                {tutor.email}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-10 px-8 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Edit Profile
            </button>
          </div>) )
          }
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-xl">

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold mb-6 text-slate-900">
              Edit Profile
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-slate-600">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm mb-1 text-slate-600">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="w-full bg-slate-900 text-white py-2.5 rounded-lg hover:bg-indigo-600 transition"
            >
              Save Changes
            </button>

          </div>
        </div>
      )}
    </>
  );
}
