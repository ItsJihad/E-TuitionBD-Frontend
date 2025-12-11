import React from "react";

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

const Tutors = () => {
  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Expert Tutors
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with verified, experienced tutors who are passionate about helping you succeed in your studies.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
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
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm pl-10"
                placeholder="Search by name or subject..."
              />
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-2 border-border bg-transparent hover:bg-secondary hover:border-primary/30 h-10 px-5 py-2 gap-2">
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
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              Filters
            </button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-xl p-6 hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={tutor.img}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tutor.name}
                    </h3>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-1">
                      {tutor.subject}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
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
                      className="lucide lucide-star h-4 w-4 text-accent fill-accent"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="font-medium text-foreground">{tutor.rating}</span>
                    <span className="text-muted-foreground">({tutor.students} students)</span>
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
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    {tutor.experience} experience
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
                      className="lucide lucide-map-pin h-4 w-4"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {tutor.location}
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow hover:scale-[1.02] font-bold h-10 px-5 py-2 w-full">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tutors;
