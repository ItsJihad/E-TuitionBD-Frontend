import {
  UserCheck,
  XCircle,
  GraduationCap,
  Briefcase,
  Clock,
  DatabaseBackup,
} from "lucide-react";
import { useState } from "react";

export default function PendingTutors() {
  const [isOpen, setIsOpen] = useState(false);
  const [tutorData, setTutorData] = useState({
    name: "Md. Rahim Uddin",
    qualification: "MSc Mathematics",
    experience: "5 Years Experience",
  });

  const handleSave = () => {
    console.log("Updated Tutor:", tutorData);
    setIsOpen(false);
  };

  return (
    <div className="relative space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Pending Tutor Verification
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Review newly registered tutors and verify their accounts.
        </p>
        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

      {/* Tutor Card */}
      <div className="grid gap-8">

        <div className="group relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Info */}
            <div className="flex items-center gap-6">

              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center shadow">
                <span className="text-xl font-bold text-indigo-600">MR</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {tutorData.name}
                </h3>

                <div className="flex flex-wrap gap-6 mt-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-indigo-500" />
                    {tutorData.qualification}
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-blue-500" />
                    {tutorData.experience}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-amber-500" />
                    Status: Pending
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <UserCheck size={18} />
                Verify
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <DatabaseBackup size={18} />
                Update
              </button>

              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <XCircle size={18} />
                Reject
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white/90 backdrop-blur-xl w-full max-w-lg rounded-3xl shadow-2xl p-8 relative animate-fadeIn">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Update Tutor Information
            </h2>

            <div className="space-y-5">

              <div>
                <label className="text-sm text-slate-600">Full Name</label>
                <input
                  type="text"
                  value={tutorData.name}
                  onChange={(e) =>
                    setTutorData({ ...tutorData, name: e.target.value })
                  }
                  className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Qualification</label>
                <input
                  type="text"
                  value={tutorData.qualification}
                  onChange={(e) =>
                    setTutorData({ ...tutorData, qualification: e.target.value })
                  }
                  className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Experience</label>
                <input
                  type="text"
                  value={tutorData.experience}
                  onChange={(e) =>
                    setTutorData({ ...tutorData, experience: e.target.value })
                  }
                  className="w-full mt-2 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <button
                onClick={handleSave}
                className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Save Changes
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
