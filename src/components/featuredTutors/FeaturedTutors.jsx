import { ArrowRight, BadgeCheck  } from "lucide-react";
import { useLoaderData ,Link} from "react-router";

function FeaturedTutors() {
  const { Teachers } = useLoaderData();
  const tutors = Teachers?.data || [];

  return (
    <section className="mb-15">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="relative text-center mb-20">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-3xl"></div>

          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-slate-100 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Our Tutors
          </div>

          <h2 className="relative text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Teachers
            </span>
          </h2>

          <p className="relative text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Verified tutors ready to connect and help students succeed.
          </p>

          <div className="relative mt-10 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              {/* Avatar (Generated from name) */}
              <div className="relative flex justify-center mb-6">
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                  {tutor.name?.charAt(0).toUpperCase()}
                </div>
              </div>

              {/* Name */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  {tutor.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tutor ID: {tutor._id.slice(-6)}
                </p>
              </div>

              {/* Email Section */}
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-indigo-500" />
                  <span className="truncate max-w-[180px]">
                    <h1>Verified with Legal Docs</h1>
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-center">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-indigo-600 transition-all duration-300">
                  View Profile
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to={"/tutors"}
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-slate-200 font-semibold transition-all hover:bg-indigo-50 hover:border-indigo-300"
          >
            View All Tutors →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FeaturedTutors;
