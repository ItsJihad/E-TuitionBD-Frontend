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

const Tuitions = () => {
  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8" style={{ opacity: 1, transform: "none" }}>
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Available Tuitions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our list of available tuition opportunities and find the perfect match
              for your teaching skills.
            </p>
          </div>

          <div
            className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                placeholder="Search by subject or location..."
              />
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 border-2 border-border bg-transparent hover:bg-secondary hover:border-primary/30 h-10 px-5 py-2 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-filter h-4 w-4"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Filters
            </button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuitions.map((tuition, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-xl p-6 hover:shadow-elegant transition-all duration-300 group"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tuition.subject}
                    </h3>
                    <p className="text-muted-foreground text-sm">{tuition.level}</p>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-accent/10 text-accent">
                    {tuition.status}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin h-4 w-4"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {tuition.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dollar-sign h-4 w-4"
                    >
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    {tuition.salary}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-open h-4 w-4"
                    >
                      <path d="M12 7v14" />
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                    </svg>
                    {tuition.schedule}
                  </div>
                </div>

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow hover:scale-[1.02] font-bold h-10 px-5 py-2 w-full">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tuitions;
