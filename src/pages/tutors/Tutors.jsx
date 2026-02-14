import { Mail, User, ArrowRight, BadgeCheck } from "lucide-react";
import { Link, useLoaderData } from "react-router";
export default function Tutors() {
  const alltutors =useLoaderData()
  const tutors=alltutors.data
  
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16">
      <main className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl font-bold text-slate-900">Meet Our Tutors</h1>
          <p className="mt-3 text-slate-600">
            Verified tutors ready to help you achieve your academic goals.
          </p>
        </header>

        {/* Tutors Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor) => {
              const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                tutor.name,
              )}&background=0f172a&color=ffffff&size=200`;

              return (
                <article
                  key={tutor._id}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={avatar}
                      alt={tutor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 truncate">
                        {tutor.name}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 text-xs text-emerald-600 font-medium">
                        <BadgeCheck className="w-4 h-4" />
                        Verified Tutor
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="truncate">{tutor.email}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-grow"></div>

                  {/* Action */}
                  <Link
                    to={`/tutors/${tutor._id}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white py-2.5 text-sm font-medium hover:bg-indigo-600 transition"
                  >
                    View Profile
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
