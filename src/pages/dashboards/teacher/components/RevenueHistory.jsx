import {
  Calendar,
  DollarSign,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function RevenueHistory() {
  return (
    <div className="relative space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Revenue History
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Track your completed payments and total earnings.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500"></div>
      </header>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-6">

        <SummaryCard
          title="Total Earnings"
          value="৳20,000"
          icon={<DollarSign className="text-emerald-600" size={20} />}
        />

        <SummaryCard
          title="This Month"
          value="৳12,000"
          icon={<TrendingUp className="text-blue-600" size={20} />}
        />

        <SummaryCard
          title="Total Transactions"
          value="2"
          icon={<BookOpen className="text-indigo-600" size={20} />}
        />

      </div>

      {/* Revenue Table */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg">

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">

            <thead className="text-slate-500 border-b">
              <tr>
                <th className="py-4">Tuition</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              <tr className="hover:bg-slate-50 transition">
                <td className="py-4">
                  <p className="font-semibold text-slate-900">
                    Mathematics - Class 10
                  </p>
                  <p className="text-xs text-slate-400">
                    Tuition ID: #203948
                  </p>
                </td>

                <td className="text-emerald-600 font-bold">
                  ৳8,000
                </td>

                <td className="text-slate-500 flex items-center gap-2">
                  <Calendar size={14} />
                  Jan 12, 2026
                </td>

                <td>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs font-semibold">
                    Paid
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-4">
                  <p className="font-semibold text-slate-900">
                    Physics - Class 12
                  </p>
                  <p className="text-xs text-slate-400">
                    Tuition ID: #203949
                  </p>
                </td>

                <td className="text-emerald-600 font-bold">
                  ৳12,000
                </td>

                <td className="text-slate-500 flex items-center gap-2">
                  <Calendar size={14} />
                  Feb 03, 2026
                </td>

                <td>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs font-semibold">
                    Paid
                  </span>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}

/* Reusable Summary Card */

function SummaryCard({ title, value, icon }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            {value}
          </h2>
        </div>

        <div className="p-3 bg-emerald-100 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}
