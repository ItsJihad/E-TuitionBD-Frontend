import React from "react";

const tutors = [
  {
    name: "Dr. Aminul Islam",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: "4.9",
    reviews: "128 reviews",
    degree: "PhD in Mathematics",
    location: "Dhanmondi, Dhaka",
    subjects: ["Mathematics", "Physics"],
    rate: "1,000 BDT",
  },
  {
    name: "Fatima Rahman",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: "4.8",
    reviews: "96 reviews",
    degree: "MSc in Chemistry",
    location: "Mirpur, Dhaka",
    subjects: ["Chemistry", "Biology"],
    rate: "900 BDT",
  },
  {
    name: "Kamal Hossain",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    rating: "5.0",
    reviews: "142 reviews",
    degree: "BSc in Physics",
    location: "Uttara, Dhaka",
    subjects: ["Physics", "ICT"],
    rate: "1,200 BDT",
  },
  {
    name: "Nasreen Akter",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face",
    rating: "4.9",
    reviews: "110 reviews",
    degree: "MA in English",
    location: "Banani, Dhaka",
    subjects: ["English", "IELTS"],
    rate: "1,100 BDT",
  },
];

function FeaturedTutors() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold mb-4">
            Top Rated
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Tutors</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our highest-rated tutors trusted by thousands of students.
          </p>
        </div>

        {/* Tutor Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {tutors.map((tutor) => (
            <div
              key={tutor.name}
              className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:shadow-xl hover:border-primary/30 transition-all"
            >
              {/* Avatar */}
              <div className="text-center">
                <div className="relative pb-10 inline-block mb-4">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="h-24 w-24 rounded-full object-cover border-4 border-background shadow-md"
                  />

                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-background border border-border rounded-full px-2 py-0.5 shadow-sm">
                    <span className="text-xs font-semibold">
                      ⭐ {tutor.rating}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold">
                  {tutor.name}
                </h3>
                <p className="text-xs text-muted-foreground">{tutor.reviews}</p>
              </div>

              {/* Info */}
              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <p>{tutor.degree}</p>
                <p>{tutor.location}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {tutor.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-semibold"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Hourly Rate</p>
                  <p className="font-bold text-primary">{tutor.rate}</p>
                </div>

                <button className="px-4 py-2 rounded-lg bg-base-300 text-primary-foreground text-sm font-semibold hover:opacity-90 transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/tutors"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-border font-semibold transition-all hover:bg-secondary hover:border-primary/30"
          >
            View All Tutors →
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTutors;
