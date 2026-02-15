import {
  BookOpen,
  MapPin,
  BadgeDollarSign,
  Clock,
  CheckCircle2,
  XCircle,
  CalendarDays,
} from "lucide-react";

export default function TeacherApplications() {
  return (
    <div className="relative space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          My Applications
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Track the status of all tuition posts you’ve applied to.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

      {/* Applications Grid */}
      <div className="grid gap-8">

        <ApplicationCard
          subject="Mathematics"
          className="Class 10"
          location="Gulshan, Dhaka"
          budget="৳8,000"
          status="Pending"
          date="Jan 15, 2026"
        />

      </div>

    </div>
  );
}

/* Reusable Card */

function ApplicationCard({
  subject,
  className,
  location,
  budget,
  status,
  date,
}) {
  const statusConfig = {
    Pending: {
      style: "bg-yellow-50 text-yellow-700",
      icon: <Clock size={14} />,
    },
    Approved: {
      style: "bg-emerald-50 text-emerald-600",
      icon: <CheckCircle2 size={14} />,
    },
    Rejected: {
      style: "bg-rose-50 text-rose-600",
      icon: <XCircle size={14} />,
    },
  };

  return (
    <div className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Glow Hover */}
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition"></div>

      {/* Title */}
      <div className="flex items-start justify-between flex-wrap gap-4">

        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen size={18} className="text-indigo-600" />
            {subject} - {className}
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            Tuition ID: #102938
          </p>
        </div>

        {/* Status Badge */}
        <span
          className={`flex items-center gap-1 px-4 py-1.5 text-xs font-semibold rounded-full ${statusConfig[status].style}`}
        >
          {statusConfig[status].icon}
          {status}
        </span>

      </div>

      {/* Info Section */}
      <div className="flex flex-wrap gap-8 mt-6 text-sm text-slate-600">

        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-rose-500" />
          {location}
        </div>

        <div className="flex items-center gap-2">
          <BadgeDollarSign size={16} className="text-emerald-600" />
          Budget: {budget}
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-blue-500" />
          Applied: {date}
        </div>

      </div>

     

    </div>
  );
}
