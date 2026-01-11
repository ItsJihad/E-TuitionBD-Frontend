function HeroSection() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
        {/* Background shapes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div
              className="space-y-8"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="space-y-4">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  #1 Tuition Platform in Bangladesh
                </div>

                {/* Heading */}
                <h1
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Find the Perfect{" "}
                  <span className="text-gradient-primary">Tutor</span> for Your{" "}
                  <span className="text-gradient-primary">Success</span>
                </h1>

                {/* Description */}
                <p
                  className="text-lg text-muted-foreground max-w-lg"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Connect with qualified tutors, post tuition requirements, and
                  manage your learning journey all in one place. Join thousands
                  of successful students today.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{ opacity: 1, transform: "none" }}
              >
                <a
                  href="/tuitions"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow hover:scale-[1.02] font-bold h-14 rounded-xl px-10 text-lg group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  Find Tuitions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>

                <a
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-14 rounded-xl px-10 text-lg"
                >
                  Become a Tutor
                </a>
              </div>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-8 pt-4"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users h-6 w-6 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      10,000+
                    </p>
                    <p className="text-sm text-muted-foreground">Students</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-open h-6 w-6 text-primary"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      5,000+
                    </p>
                    <p className="text-sm text-muted-foreground">Tutors</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-award h-6 w-6 text-primary"
                    >
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      50,000+
                    </p>
                    <p className="text-sm text-muted-foreground">Tuitions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: mockup */}
            <div
              className="relative hidden lg:block "
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="relative">
                <div
                  className="relative z-10 rounded-2xl bg-card p-6 shadow-card-hover"
                  style={{ transform: "translateY(-6.23px)" }}
                >
                  <div className="hover-3d">
                    {/* content */}
                    <figure className="max-w-200 rounded-2xl">
                      <img src="./assets/girl.png" alt="3D card" />
                    </figure>
                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
