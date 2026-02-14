import { Link, useLoaderData } from "react-router";
import {
  MapPin,
  Wallet,
  BookOpen,
  ArrowRight,
  GraduationCap,
  FileText
} from "lucide-react";

export default function Tuitions() {

  const tuitions = useLoaderData();

  

  return (
    <div className="p-5 bg-white px-4 py-12">
      <main className="max-w-6xl mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl font-semibold text-slate-900">
            Available Tuitions
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Browse current tuition opportunities and find the right match for
            your teaching skills.
          </p>
        </header>

        <section className="max-w-4xl mx-auto mb-8 flex gap-3">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              aria-label="Search tuitions"
              placeholder="Search by subject or location..."
              className="w-full h-10 rounded-md border border-slate-200 px-10 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm bg-white hover:bg-slate-50"
          >
            <svg
              className="w-4 h-4 text-slate-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filters
          </button>
        </section>

        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(tuitions.data).map((tuition, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                      <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                        {tuition.subject.toUpperCase()}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <GraduationCap className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{tuition.classLevel}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {tuition.status.toUpperCase()}
                  </span>
                </div>

                {/* Info Section */}
                <div className="space-y-4 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">
                      {tuition.location.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Wallet className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">{tuition.budget}</span>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
  <div className="flex items-start gap-2">
    <FileText className="w-4 h-4 text-slate-400 mt-0.5" />
    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
      {tuition.description}
    </p>
  </div>
</div>
                </div>

                {/* Button */}
                <Link
                  to={`/tuitions/${tuition._id}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white py-2.5 text-sm font-medium hover:bg-indigo-600 transition-colors duration-300"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
