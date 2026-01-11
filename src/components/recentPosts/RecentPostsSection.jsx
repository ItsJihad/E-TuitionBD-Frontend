import React from "react";

const posts = [
  {
    subject: "Mathematics",
    classLevel: "Class 10",
    location: "Dhanmondi, Dhaka",
    salary: "5,000 – 8,000 BDT",
    schedule: "3 days/week",
    timeAgo: "2 hours ago",
    status: "Open",
  },
  {
    subject: "Physics",
    classLevel: "HSC 1st Year",
    location: "Uttara, Dhaka",
    salary: "6,000 – 9,000 BDT",
    schedule: "4 days/week",
    timeAgo: "5 hours ago",
    status: "Open",
  },
  {
    subject: "English",
    classLevel: "O Level",
    location: "Banani, Dhaka",
    salary: "7,000 – 10,000 BDT",
    schedule: "3 days/week",
    timeAgo: "1 day ago",
    status: "Open",
  },
  {
    subject: "Chemistry",
    classLevel: "Class 9",
    location: "Mirpur, Dhaka",
    salary: "4,500 – 7,000 BDT",
    schedule: "5 days/week",
    timeAgo: "2 days ago",
    status: "Open",
  },
];

function RecentPostsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold mb-4">
            Latest Opportunities
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Recent Tuition{" "}
            <span className="text-gradient-primary">Posts</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse the latest tuition requirements posted by students and
            parents.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-5 transition-all hover:shadow-xl hover:border-primary/30 cursor-pointer"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>

                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border">
                  {post.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary">
                {post.subject}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {post.classLevel}
              </p>

              {/* Details */}
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p>{post.location}</p>
                <p>{post.salary}</p>
                <p>{post.schedule}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  {post.timeAgo}
                </span>

                <button className="text-sm font-semibold text-primary hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/tuitions"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-border font-semibold transition-all hover:bg-secondary hover:border-primary/30"
          >
            View All Tuitions →
          </a>
        </div>
      </div>
    </section>
  );
}

export default RecentPostsSection;
