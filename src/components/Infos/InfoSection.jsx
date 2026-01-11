import React from "react";

function InfoSection() {
  return (
    <div className="bg-background">
      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-gradient-primary">eTuitionBd</span> Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Start your journey in just a few simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Create Your Account",
                desc: "Sign up as a student or tutor and complete your profile in minutes.",
                color: "primary",
              },
              {
                title: "Find the Perfect Match",
                desc: "Browse tuition posts or get matched with the right tutor instantly.",
                color: "accent",
              },
              {
                title: "Start Learning",
                desc: "Begin lessons, track progress, and manage everything in one place.",
                color: "success",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30"
              >
                <div
                  className={`mx-auto mb-8 w-16 h-16 rounded-2xl bg-${item.color}/10 text-${item.color} flex items-center justify-center text-xl font-bold`}
                >
                  ✓
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-gradient-primary">eTuitionBd</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
                className="group bg-card/70 backdrop-blur-xl border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 mb-5 flex items-center justify-center text-primary font-bold">
                  ✓
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  High-quality experience tailored to your learning needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-12 md:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Start Your Journey?
              </h2>

              <p className="text-lg text-primary-foreground/80 mb-10">
                Join thousands of learners and tutors already growing with
                eTuitionBd.
              </p>

              <div className="flex justify-center">
                <a
                  href="/register"
                  className="h-14 px-14 rounded-xl bg-white text-primary font-semibold text-lg hover:bg-white/90 transition-all shadow-xl"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoSection;
