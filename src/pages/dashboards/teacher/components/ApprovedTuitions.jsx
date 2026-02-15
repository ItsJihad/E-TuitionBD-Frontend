import {
  CheckCircle,
  MapPin,
  BadgeDollarSign,
  CalendarDays,
  Clock,
  BookOpen,
} from "lucide-react";

export default function ApprovedTuition() {
  return (
    <div className="relative space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Approved Tuitions
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          These are the tuition posts you’ve been hired for.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500"></div>
      </header>

      {/* Tuition List */}
      <div className="grid gap-8">

        <ApprovedCard
          subject="Physics"
          className="Class 12"
          location="Banani, Dhaka"
          salary="৳12,000"
          startDate="Jan 20, 2026"
        />

      </div>

    </div>
  );
}

/* Reusable Approved Tuition Card */

function ApprovedCard({
  subject,
  className,
  location,
  salary,
  startDate,
}) {
  return (
    <div className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Hover Glow */}
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition"></div>

      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-start gap-4">

        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen size={18} className="text-emerald-600" />
            {subject} - {className}
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            Tuition ID: #203948
          </p>
        </div>

        {/* Approved Badge */}
        <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
          <CheckCircle size={14} />
          Approved
        </span>

      </div>

      {/* Details */}
      <div className="flex flex-wrap gap-8 mt-6 text-sm text-slate-600">

        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-rose-500" />
          {location}
        </div>

        <div className="flex items-center gap-2">
          <BadgeDollarSign size={16} className="text-emerald-600" />
          {salary} / month
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-blue-500" />
          Started: {startDate}
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">

        <div className="text-sm text-slate-500 flex items-center gap-2">
          <Clock size={14} />
          Ongoing Tuition
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-500">Monthly Revenue</p>
          <p className="text-lg font-bold text-emerald-600">
            {salary}
          </p>
        </div>

      </div>

    </div>
  );
}
