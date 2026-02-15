import {
  LayoutDashboard,
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Receipt,
  Activity,
} from "lucide-react";

export default function AdminOverview() {
  return (
    <div className="relative space-y-16">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Monitor platform performance, financial activity and system health.
        </p>
      </header>

      {/* Core Stats */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="2,540"
          icon={<Users className="text-indigo-600" size={22} />}
        />
        <StatCard
          title="Total Tuitions"
          value="185"
          icon={<BookOpen className="text-blue-600" size={22} />}
        />
        <StatCard
          title="Pending Reviews"
          value="12"
          icon={<LayoutDashboard className="text-amber-600" size={22} />}
        />
        <StatCard
          title="Total Revenue"
          value="৳3,40,000"
          icon={<DollarSign className="text-emerald-600" size={22} />}
        />
      </section>

      {/* Reports & Analytics Section */}
      <section className="space-y-10">

        <header>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="text-indigo-600" size={22} />
            Reports & Analytics
          </h2>
          <p className="text-slate-500 mt-2">
            Financial overview and transaction insights.
          </p>
        </header>

        {/* Financial Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <AnalyticsCard
            title="Platform Earnings (This Month)"
            value="৳48,000"
            icon={<DollarSign className="text-emerald-600" size={22} />}
          />

          <AnalyticsCard
            title="Successful Transactions"
            value="126"
            icon={<Receipt className="text-indigo-600" size={22} />}
          />

          <AnalyticsCard
            title="Active Revenue Streams"
            value="Tuition Fees"
            icon={<Activity className="text-blue-600" size={22} />}
          />

        </div>

        {/* Transaction History */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-8">

          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            Successful Transaction History
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">

              <thead className="text-slate-500 border-b">
                <tr>
                  <th className="py-3">User</th>
                  <th>Tuition</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody className="divide-y text-slate-700">

                <tr>
                  <td className="py-4">Asadullah</td>
                  <td>Math - Class 10</td>
                  <td className="text-emerald-600 font-semibold">
                    ৳8,000
                  </td>
                  <td>Jan 12, 2026</td>
                  <td className="text-emerald-600 font-medium">
                    Successful
                  </td>
                </tr>

                <tr>
                  <td className="py-4">Rahim Uddin</td>
                  <td>Physics - Class 12</td>
                  <td className="text-emerald-600 font-semibold">
                    ৳12,000
                  </td>
                  <td>Feb 03, 2026</td>
                  <td className="text-emerald-600 font-medium">
                    Successful
                  </td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>

      </section>

    </div>
  );
}

/* Reusable Cards */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {value}
          </h2>
        </div>
        <div className="p-3 bg-indigo-100 rounded-2xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard({ title, value, icon }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            {value}
          </h3>
        </div>
        <div className="p-3 bg-slate-100 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}
