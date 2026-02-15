import { CheckCircle2, XCircle, Star, Briefcase, BookOpen } from "lucide-react";

export default function TeachingApplications() {
  return (
    <div className="relative space-y-12">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Tutor Applications
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Review and approve the best tutor for your tuition.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

      {/* Applications Grid */}
      <div className="grid gap-8">
        <div className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-6">
          {/* Glow Hover */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

          {/* 🔹 Applied For Section */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-4 flex items-center gap-3">
            <BookOpen size={18} className="text-indigo-600" />
            <div>
              <p className="text-xs text-slate-500">Applied For</p>
              <h4 className="font-semibold text-slate-900">
                Mathematics - Class 10 (Gulshan, Dhaka)
              </h4>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left Side */}
            <div className="flex items-center gap-6">
              <img
                src="https://ui-avatars.com/api/?name=Tutor"
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                alt="Tutor"
              />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Asadullah Al Jihad
                </h3>

                <div className="flex items-center gap-3 mt-2 text-slate-600 text-sm">
                  <Briefcase size={16} className="text-indigo-500" />
                  <span>MSc Math | 3 Years Experience</span>
                </div>

                <div className="flex items-center gap-2 mt-3 text-indigo-600 font-semibold">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  Expected Salary: ৳10,000
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CheckCircle2 size={18} />
                Accept
              </button>

              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <XCircle size={18} />
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
