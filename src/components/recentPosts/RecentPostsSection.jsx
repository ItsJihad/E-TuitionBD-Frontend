import React from 'react'

function RecentPostsSection() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-background">
  <div className="container mx-auto px-4">
    <div
      className="text-center mb-12"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
        Latest Opportunities
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        Recent Tuition <span className="text-gradient-primary">Posts</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Browse the latest tuition requirements posted by students and parents
        looking for qualified tutors like you.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10" style={{ opacity: 1 }}>
      {/* Tuition Card Example */}
      <div className="group bg-card rounded-xl border border-border p-5 hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 cursor-pointer" style={{ opacity: 1, transform: "none" }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
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
              className="lucide lucide-book-open h-5 w-5 text-primary"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
          </div>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs">
            Open
          </div>
        </div>
        <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
          Mathematics
        </h3>
        <p className="text-sm text-muted-foreground mb-4">className 10</p>
        <div className="space-y-2 mb-4">
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
              className="lucide lucide-map-pin h-4 w-4 text-primary/70"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Dhanmondi, Dhaka</span>
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
              className="lucide lucide-dollar-sign h-4 w-4 text-primary/70"
            >
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span>5,000 - 8,000 BDT</span>
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
              className="lucide lucide-clock h-4 w-4 text-primary/70"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>3 days/week</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">2 hours ago</span>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary h-9 rounded-md px-4 text-primary hover:text-primary">
            View Details
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
              className="lucide lucide-arrow-right h-3 w-3 ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Repeat Tuition Cards as needed */}
    </div>

    <div className="text-center" style={{ opacity: 1, transform: "none" }}>
      <a
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-border bg-transparent hover:bg-secondary hover:border-primary/30 h-12 rounded-xl px-8 text-base group"
        href="/tuitions"
      >
        View All Tuitions
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
          className="lucide lucide-arrow-right h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

    </div>
  )
}

export default RecentPostsSection
