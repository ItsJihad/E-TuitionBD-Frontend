import { CheckCircle2, XCircle, User, Briefcase, Clock } from "lucide-react";

export default function ReviewApplications() {
  return (
    <div className="relative space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Review Tutor Applications
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Carefully approve or reject tutor applications.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

      {/* Applications List */}
      <div className="grid gap-8">

        <div className="group relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          {/* Hover Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Left Section */}
            <div className="flex items-center gap-6">

              <div className="p-5 bg-indigo-100 rounded-2xl shadow-inner">
                <User size={24} className="text-indigo-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Asadullah Al Jihad
                </h3>

                <div className="flex flex-wrap gap-6 mt-3 text-sm text-slate-600">

                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-indigo-500" />
                    Applied for: Mathematics - Class 10
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-amber-500" />
                    Status: Pending
                  </div>

                </div>
              </div>

            </div>

            {/* Right Section */}
            <div className="flex gap-4 flex-col sm:flex-row">

              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CheckCircle2 size={18} />
                Approve
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
