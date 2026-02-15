import {
  LayoutDashboard,
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Receipt,
  Activity,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../hooks/UseAxios";
import LoadingPage from "../../../../components/Loader/LoadingPage";

export default function AdminOverview() {
  const axios = useAxiosSecure();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTuitions: 0,
    pendingReviews: 0,
  });

  const [loader, setLoader] = useState(false);

  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoader(true);

        const [usersRes, tuitionsRes, postsRes] = await Promise.all([
          axios.get("/admin/allusers"),
          axios.get("/private/allprivateposts"),
          axios.get("/admin/allposts"),
        ]);

        const users = usersRes.data || [];
        const tuitions = tuitionsRes.data || [];
        const posts = postsRes.data || [];

     
        const pending = posts.filter((post) => post.status === "pending");

        setStats({
          totalUsers: users.length,
          totalTuitions: tuitions.length,
          pendingReviews: pending.length,
        });
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchDashboardData();
  }, [axios]);

  if (loader) return <LoadingPage />;

  return (
    <div className="relative space-y-16">
     
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <header>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Monitor platform performance, financial activity and system health.
        </p>
      </header>


      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users className="text-indigo-600" size={22} />}
        />
        <StatCard
          title="Total Tuitions"
          value={stats.totalTuitions}
          icon={<BookOpen className="text-blue-600" size={22} />}
        />
        <StatCard
          title="Pending Reviews"
          value={stats.pendingReviews}
          icon={<LayoutDashboard className="text-amber-600" size={22} />}
        />
        <StatCard
          title="Total Revenue"
          value="৳3,40,000"
          icon={<DollarSign className="text-emerald-600" size={22} />}
        />
      </section>

    
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
      </section>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">{value}</h2>
        </div>
        <div className="p-3 bg-indigo-100 rounded-2xl">{icon}</div>
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
          <h3 className="text-xl font-bold text-slate-900 mt-1">{value}</h3>
        </div>
        <div className="p-3 bg-slate-100 rounded-xl">{icon}</div>
      </div>
    </div>
  );
}
