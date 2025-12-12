 
const tutors = [
  {
    name: "Dr. Aminul Islam",
    subject: "Mathematics",
    rating: 4.9,
    students: 150,
    experience: "10+ years",
    location: "Dhaka",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Fatima Rahman",
    subject: "Physics",
    rating: 4.8,
    students: 120,
    experience: "8 years",
    location: "Dhaka",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rashida Begum",
    subject: "Bangla",
    rating: 4.8,
    students: 110,
    experience: "9 years",
    location: "Dhaka",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
];

export default function Tutors() {
  return (
    <div className="p-5 bg-white px-4 py-12">
      <main className="max-w-6xl mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl font-semibold text-slate-900">
            Our Expert Tutors
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Connect with verified, experienced tutors who are passionate about
            helping you succeed.
          </p>
        </header>

        <section className="max-w-4xl mx-auto mb-8">
          <div className="flex gap-3">
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
                className="w-full h-10 rounded-md border border-slate-200 px-10 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
                placeholder="Search by name or subject..."
                aria-label="Search tutors"
              />
            </div>

            <button
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm bg-white hover:bg-slate-50"
              aria-label="Filters"
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
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor, index) => (
              <article
                key={index}
                className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={tutor.img}
                    alt={tutor.name}
                    className="w-14 h-14 rounded-full object-cover ring-1 ring-slate-100"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-slate-900 truncate">
                      {tutor.name}
                    </h3>
                    <div className="mt-1 text-xs text-slate-600 inline-flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-slate-700">
                        {tutor.subject}
                      </span>
                    </div>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-600 mb-5">
                  <div>
                    <div className="text-xs text-slate-500">Rating</div>
                    <div className="text-slate-900 font-medium">
                      {tutor.rating} ★
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Students</div>
                    <div className="text-slate-900 font-medium">
                      {tutor.students}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Experience</div>
                    <div className="text-slate-900 font-medium">
                      {tutor.experience}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Location</div>
                    <div className="text-slate-900 font-medium">
                      {tutor.location}
                    </div>
                  </div>
                </dl>

                <button
                  className="w-full inline-flex items-center justify-center rounded-md bg-slate-900 text-white py-2 text-sm font-medium hover:brightness-95 transition"
                  aria-label={`View profile of ${tutor.name}`}
                >
                  View Profile
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
