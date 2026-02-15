import { CheckCircle2, Clock, CreditCard } from "lucide-react";

export default function Payments() {
  return (
    <div className="relative space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Payments
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Track your completed and pending transactions.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

      {/* Table Card */}
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl overflow-hidden">

        {/* Card Header */}
        <div className="flex items-center gap-3 px-8 py-6 border-b border-slate-200/60">
          <CreditCard className="text-indigo-600" size={22} />
          <h2 className="text-lg font-semibold text-slate-800">
            Transaction History
          </h2>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-500 border-b bg-slate-50/50">
              <tr>
                <th className="py-4 px-8 font-medium">Tutor</th>
                <th className="font-medium">Amount</th>
                <th className="font-medium">Status</th>
                <th className="font-medium pr-8">Date</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200/60">

              {/* Paid Row */}
              <tr className="hover:bg-indigo-50/40 transition">
                <td className="py-5 px-8 font-semibold text-slate-800">
                  Asadullah
                </td>
                <td className="text-slate-700 font-medium">
                  ৳10,000
                </td>
                <td>
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 size={14} />
                    Paid
                  </span>
                </td>
                <td className="text-slate-500 pr-8">
                  Jan 12, 2026
                </td>
              </tr>

              {/* Example Pending Row */}
              <tr className="hover:bg-indigo-50/40 transition">
                <td className="py-5 px-8 font-semibold text-slate-800">
                  Meraz
                </td>
                <td className="text-slate-700 font-medium">
                  ৳8,000
                </td>
                <td>
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    <Clock size={14} />
                    Pending
                  </span>
                </td>
                <td className="text-slate-500 pr-8">
                  Jan 15, 2026
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
