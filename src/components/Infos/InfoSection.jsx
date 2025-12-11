import React from 'react'

function InfoSection() {
  return (
    <div>
      <div className="container mx-auto px-4">
  <div className="text-center mb-16" style={{ opacity: 1, transform: "none" }}>
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
      How <span className="text-gradient-primary">eTuitionBd</span> Works
    </h2>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      Getting started is easy. Follow these simple steps to begin your learning or teaching journey.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 relative" style={{ opacity: 1 }}>
    <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-success/50"></div>

    {/* Step 1 */}
    <div className="relative" style={{ opacity: 1, transform: "none" }}>
      <div className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm shadow-md">
          1
        </div>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
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
            className="lucide lucide-user-plus h-8 w-8"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold mb-3">Create Your Account</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Sign up as a student or tutor in just a few clicks. Complete your profile with your requirements or qualifications.
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="relative" style={{ opacity: 1, transform: "none" }}>
      <div className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm shadow-md">
          2
        </div>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6">
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
            className="lucide lucide-search h-8 w-8"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold mb-3">Find Perfect Match</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Browse tuition posts or apply to suitable opportunities. Our smart matching connects students with ideal tutors.
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="relative" style={{ opacity: 1, transform: "none" }}>
      <div className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm shadow-md">
          3
        </div>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-success/10 text-success mb-6">
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
            className="lucide lucide-circle-check-big h-8 w-8"
          >
            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
            <path d="m9 11 3 3L22 4" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold mb-3">Start Learning</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Once matched, begin your learning journey. Track progress, manage payments, and communicate seamlessly.
        </p>
      </div>
    </div>
  </div>
</div>
        <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 relative">
    <div className="text-center mb-16" style={{ opacity: 1, transform: "none" }}>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        Why Choose <span className="text-gradient-primary">eTuitionBd</span>?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        We're committed to providing the best tuition experience for both students and tutors.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ opacity: 1 }}>
      {/* Card 1 */}
      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300" style={{ opacity: 1, transform: "none" }}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-6 w-6 text-primary">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold mb-2">Verified Tutors</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          All tutors go through strict verification process ensuring quality and reliability.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300" style={{ opacity: 1, transform: "none" }}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-6 w-6 text-primary">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold mb-2">Flexible Scheduling</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Choose time slots that work for you. Learn at your own pace and convenience.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300" style={{ opacity: 1, transform: "none" }}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-6 w-6 text-primary">
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
            <circle cx="12" cy="8" r="6"></circle>
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold mb-2">Quality Assured</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Rating and review system ensures you always get the best learning experience.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300" style={{ opacity: 1, transform: "none" }}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-6 w-6 text-primary">
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <line x1="2" x2="22" y1="10" y2="10"></line>
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold mb-2">Secure Payments</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Safe and transparent payment system with multiple payment options available.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300" style={{ opacity: 1, transform: "none" }}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones h-6 w-6 text-primary">
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold mb-2">24/7 Support</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Our dedicated support team is always ready to help you with any queries.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300" style={{ opacity: 1, transform: "none" }}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-6 w-6 text-primary">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold mb-2">Large Network</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Access to thousands of qualified tutors across all subjects and locations.
        </p>
      </div>
    </div>
  </div>
</section>
    
    <section className="py-5 md:py-24 bg-background">
  <div className="container mx-auto px-4">
    <div
      className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-12 lg:p-16"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="relative text-center max-w-3xl mx-auto">
        <div
          className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-6"
          style={{ opacity: 1, transform: "none" }}
        >
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
            className="lucide lucide-sparkles h-4 w-4 text-primary-foreground"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path>
          </svg>
          <span className="text-sm font-medium text-primary-foreground">
            Start Your Journey Today
          </span>
        </div>

        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
          style={{ opacity: 1, transform: "none" }}
        >
          Ready to Transform Your Learning Experience?
        </h2>

        <p
          className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
          style={{ opacity: 1, transform: "none" }}
        >
          Join thousands of students and tutors who are already part of our community. Create
          your free account and start today.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <a
            href="/register"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:shadow-lg h-14 rounded-xl px-10 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg group"
          >
            Get Started Free
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
              className="lucide lucide-arrow-right h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>

          <a
            href="/tuitions"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:border-primary/30 h-14 rounded-xl px-10 text-lg border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
          >
            Browse Tuitions
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default InfoSection
