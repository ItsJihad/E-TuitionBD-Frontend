import {
  BookOpen,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function TeacherOverview() {
  return (
    <div className="relative space-y-14">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Teacher Dashboard
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Monitor your applications, approvals and earnings at a glance.
        </p>
        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

      {/* Stats Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <StatCard
          title="Total Applications"
          value="18"
          sub="3 new this week"
          icon={<BookOpen size={22} className="text-indigo-600" />}
        />

        <StatCard
          title="Approved Tuitions"
          value="6"
          sub="Currently active"
          icon={<CheckCircle size={22} className="text-emerald-600" />}
        />

        <StatCard
          title="Total Revenue"
          value="৳60,000"
          sub="↑ 12% this month"
          icon={<DollarSign size={22} className="text-blue-600" />}
        />

      </div>

      {/* Activity + Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Recent Activity */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-5 text-sm">

            <ActivityItem
              icon={<Clock size={16} className="text-indigo-500" />}
              text="Applied to Mathematics - Class 10"
              time="2 hours ago"
            />

            <ActivityItem
              icon={<CheckCircle size={16} className="text-emerald-500" />}
              text="Approved for Physics - Class 12"
              time="Yesterday"
            />

            <ActivityItem
              icon={<TrendingUp size={16} className="text-blue-500" />}
              text="Received ৳12,000 payment"
              time="3 days ago"
            />

          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <QuickAction
              title="View My Applications"
              desc="Track pending and approved tuition requests."
            />

            <QuickAction
              title="Check Approved Tuitions"
              desc="See your active tuition responsibilities."
            />

            <QuickAction
              title="Review Revenue History"
              desc="Monitor your monthly earnings and payments."
            />

          </div>
        </div>

      </div>

    </div>
  );
}

/* Components */

function StatCard({ title, value, sub, icon }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {value}
          </h2>
          <p className="text-xs text-slate-400 mt-2">{sub}</p>
        </div>

        <div className="p-3 bg-indigo-100 rounded-2xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ icon, text, time }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-slate-100 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-slate-800">{text}</p>
        <p className="text-xs text-slate-400 mt-1">{time}</p>
      </div>
    </div>
  );
}

function QuickAction({ title, desc }) {
  return (
    <div className="group border border-slate-200 rounded-2xl p-5 hover:bg-indigo-50 transition cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">{desc}</p>
        </div>

        <ArrowRight
          size={18}
          className="text-indigo-500 group-hover:translate-x-1 transition"
        />
      </div>
    </div>
  );
}
