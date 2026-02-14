import React from "react";
import { Link } from "react-router";

function InfoSection() {
  return (
    <div className="bg-white">

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-indigo-50/40">

        {/* Glow Background */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">

          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              How{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                eTuitionBd
              </span>{" "}
              Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Start your journey in just three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">

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
                className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 text-center shadow-sm hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                eTuitionBd
              </span>
              ?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Designed to deliver the best experience for students and tutors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                className="group relative bg-gradient-to-br from-white to-indigo-50/40 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mb-6">
                  ✓
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  High-quality experience tailored to your learning needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28">
        <div className="container mx-auto px-4">

          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-indigo-600 to-blue-500 p-16 text-center shadow-2xl">

            {/* Glow layers */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-3xl mx-auto">

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>

              <p className="text-lg text-white/80 mb-12">
                Join thousands of learners and tutors already growing with eTuitionBd.
              </p>

              <Link
                to={"/register"}
                className="inline-flex items-center justify-center h-14 px-14 rounded-xl bg-white text-indigo-600 font-semibold text-lg hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-xl"
              >
                Get Started Free →
              </Link>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default InfoSection;
