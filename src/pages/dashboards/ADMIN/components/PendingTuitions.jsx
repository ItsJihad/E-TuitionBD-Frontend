import {
  BookOpen,
  CheckCircle,
  XCircle,
  MapPin,
  BadgeDollarSign,
  Clock,
} from "lucide-react";

export default function PendingTuition() {
  return (
    <div className="relative space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Pending Tuition Posts
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Review and approve newly submitted tuition requests.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

      {/* Tuition Cards */}
      <div className="grid gap-8">

        <div className="group relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          {/* Hover Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Left Side */}
            <div>
              <div className="flex items-center gap-3">
                <BookOpen size={20} className="text-indigo-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Physics - Class 12
                </h3>
              </div>

              <div className="flex flex-wrap gap-6 mt-4 text-sm text-slate-600">

                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-rose-500" />
                  Banani, Dhaka
                </div>

                <div className="flex items-center gap-2">
                  <BadgeDollarSign size={16} className="text-emerald-600" />
                  ৳12,000 / month
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-amber-500" />
                  Status: Pending
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CheckCircle size={18} />
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
