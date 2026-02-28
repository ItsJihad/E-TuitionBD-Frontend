import { Link } from "react-router";

function InfoSection() {
  return (
    <div className="bg-base-100">

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 md:py-24 border-t border-base-300">
        <div className="container mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-base-content">
              How <span className="text-primary">eTuitionBd</span> Works
            </h2>
            <p className="text-base-content/70 text-lg">
              Start your journey in just three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Create Your Account",
                desc: "Sign up as a student or tutor and complete your profile in minutes.",
              },
              {
                title: "Find the Perfect Match",
                desc: "Browse tuition posts or get matched with the right tutor instantly.",
              },
              {
                title: "Start Learning",
                desc: "Begin lessons, track progress, and manage everything in one place.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-base-200 border border-base-300 rounded-xl p-8 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-content font-bold flex items-center justify-center mb-6">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-base-content mb-3">
                  {item.title}
                </h3>

                <p className="text-base-content/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 md:py-24 border-t border-base-300 bg-base-100">
        <div className="container mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-base-content">
              Why Choose <span className="text-primary">eTuitionBd</span>?
            </h2>
            <p className="text-base-content/70 text-lg">
              Designed to deliver the best experience for students and tutors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Verified Tutors",
              "Flexible Scheduling",
              "Quality Assured",
              "Secure Payments",
              "24/7 Support",
              "Large Tutor Network",
            ].map((title) => (
              <div
                key={title}
                className="bg-base-200 border border-base-300 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent text-accent-content flex items-center justify-center font-bold mb-5">
                  ✓
                </div>

                <h3 className="text-lg font-semibold text-base-content mb-2">
                  {title}
                </h3>

                <p className="text-base-content/70">
                  High-quality experience tailored to your learning needs.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 md:py-24 border-t border-base-300">
        <div className="container mx-auto px-6 lg:px-10">

          <div className="bg-primary text-primary-content rounded-2xl p-12 text-center shadow-lg">

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>

            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Join thousands of learners and tutors already growing with eTuitionBd.
            </p>

            <Link
              to="/register"
              className="btn bg-base-100 text-primary hover:bg-base-200 px-10"
            >
              Get Started Free →
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default InfoSection;