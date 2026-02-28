import { Link } from "react-router";

function HeroSection() {
  return (
    <section className="bg-base-100 min-h-[65vh] mt-5 flex items-center border-b border-base-300">
      <div className="container mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 text-primary text-sm font-semibold border border-base-300">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              #1 Tuition Platform in Bangladesh
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-base-content">
              Find the Perfect{" "}
              <span className="text-primary">Tutor</span>{" "}
              for Your Academic{" "}
              <span className="text-primary">Success</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-base-content/70 leading-relaxed">
              Connect with verified tutors, post tuition requirements, and manage
              your learning journey securely — all in one trusted platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                to="/tuitions"
                className="btn btn-primary h-14 px-8 text-base"
              >
                Find Tuitions →
              </Link>

              <Link
                to="/register"
                className="btn btn-outline hover:bg-green-400 h-14 px-8 text-base"
              >
                Become a Tutor
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              {[
                { number: "10,000+", label: "Students" },
                { number: "5,000+", label: "Tutors" },
                { number: "50,000+", label: "Tuitions" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-base-200 rounded-xl p-5 border border-base-300"
                >
                  <p className="text-2xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-sm text-base-content/60 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:block">
            <div className="bg-base-200 rounded-2xl border border-base-300 shadow-lg p-6">
              <img
                src="./assets/girl.png"
                alt="Student using eTuitionBd"
                className="rounded-xl w-full object-cover"
              />

              <div className="mt-4 bg-base-100 border border-base-300 rounded-lg p-4">
                <p className="text-sm font-semibold text-base-content">
                  Trusted by 10,000+ Students Nationwide
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;