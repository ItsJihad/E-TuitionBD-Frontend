import React from "react";

const tuitions = [
  {
    subject: "Mathematics",
    level: "Class 10",
    status: "Open",
    location: "Dhaka, Gulshan",
    salary: "8,000 BDT/month",
    schedule: "3 days/week",
  },
  {
    subject: "Physics",
    level: "HSC",
    status: "Open",
    location: "Dhaka, Dhanmondi",
    salary: "10,000 BDT/month",
    schedule: "4 days/week",
  },
  {
    subject: "English",
    level: "Class 8",
    status: "Open",
    location: "Dhaka, Uttara",
    salary: "6,000 BDT/month",
    schedule: "2 days/week",
  },
];

export default function Tuitions() {
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

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuitions.map((tuition, index) => (
              <article
                key={index}
                className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">
                      {tuition.subject}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {tuition.level}
                    </p>
                  </div>

                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-slate-50 border border-slate-100 text-slate-700">
                    {tuition.status}
                  </span>
                </div>

                <dl className="grid grid-cols-1 gap-y-3 text-sm text-slate-600 mb-5">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{tuition.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span>{tuition.salary}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M12 7v14" />
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4" />
                    </svg>
                    <span>{tuition.schedule}</span>
                  </div>
                </dl>

                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center rounded-md bg-slate-900 text-white py-2 text-sm font-medium hover:brightness-95 transition"
                >
                  View Details
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
