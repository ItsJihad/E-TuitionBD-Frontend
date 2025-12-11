import React from 'react'

function FeaturedTutors() {
  return (
    <section className="py-16 md:py-24  ">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12" style={{ opacity: 1, transform: "none" }}>
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
        Top Rated
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        Featured <span className="text-gradient-primary">Tutors</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Meet our highly qualified and experienced tutors ready to help you achieve your academic goals.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10" style={{ opacity: 1 }}>
      {/* Tutor Card 1 */}
      <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-card-hover hover:border-primary/30 transition-all duration-300" style={{ opacity: 1, transform: "none" }}>
        <div className="relative p-6 pb-4 text-center">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="Dr. Aminul Islam"
              className="h-20 w-20 rounded-full object-cover border-4 border-card shadow-md mx-auto"
            />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-card rounded-full px-2 py-0.5 shadow-md border border-border">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-3 w-3 fill-accent text-accent">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <span className="text-xs font-semibold">4.9</span>
            </div>
          </div>
          <h3 className="font-display text-lg font-semibold mt-4 group-hover:text-primary transition-colors">
            Dr. Aminul Islam
          </h3>
          <p className="text-xs text-muted-foreground">128 reviews</p>
        </div>
        <div className="px-5 pb-5 space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-4 w-4 text-primary/70">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
            <span className="truncate">PhD in Mathematics</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 text-primary/70">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Dhanmondi, Dhaka</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
              Mathematics
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
              Physics
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">Hourly Rate</p>
              <p className="font-semibold text-primary">1,000 BDT</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow hover:scale-[1.02] font-bold h-9 rounded-md px-4">
              View Profile
            </button>
          </div>
        </div>
      </div>

      {/* Repeat similar blocks for other tutors (Fatima Rahman, Kamal Hossain, Nasreen Akter) */}
    </div>

    <div className="text-center" style={{ opacity: 1, transform: "none" }}>
      <a
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-border bg-transparent hover:bg-secondary hover:border-primary/30 h-12 rounded-xl px-8 text-base group"
        href="/tutors"
      >
        View All Tutors
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 ml-2 transition-transform group-hover:translate-x-1">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

  )
}

export default FeaturedTutors
