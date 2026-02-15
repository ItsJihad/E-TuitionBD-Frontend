import { DollarSign } from "lucide-react";

export default function TotalEarning() {
  return (
    <div className="space-y-10">

      <header>
        <h1 className="text-3xl font-bold text-slate-900">
          Total Platform Earnings
        </h1>
        <p className="text-slate-500 mt-2">
          Overview of total revenue generated.
        </p>
      </header>

      <div className="bg-white/70 backdrop-blur-xl border rounded-3xl p-10 shadow-lg">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-slate-500">
              Total Revenue
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              ৳3,40,000
            </h2>
          </div>

          <div className="p-5 bg-emerald-100 rounded-3xl">
            <DollarSign size={28} className="text-emerald-600" />
          </div>

        </div>

      </div>

    </div>
  );
}
