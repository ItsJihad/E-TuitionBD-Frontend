export default function Aboutpage() {
  return (
    <div className="bg-base-100 text-base-content">

      {/* ================= HERO ================= */}
      <section className="py-24 md:py-32 border-b border-base-300">
        <div className="container mx-auto px-6 lg:px-10 max-w-4xl text-center">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforming{" "}
            <span className="text-primary block mt-3">
              Education in Bangladesh
            </span>
          </h1>

          <p className="mt-8 text-lg text-base-content/70 leading-relaxed">
            eTuitionBd connects ambitious students with verified tutors —
            redefining how learning happens in the digital age.
          </p>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 border-b border-base-300 bg-base-200">
        <div className="container mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-12 text-center">
          {[
            { value: "10,000+", label: "Students Empowered" },
            { value: "5,000+", label: "Verified Tutors" },
            { value: "50,000+", label: "Lessons Completed" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {item.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-wide text-base-content/60">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-24 border-b border-base-300">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-base-content/70 leading-relaxed mb-6">
              We believe every student deserves access to world-class education.
              Our platform bridges the gap between talent and opportunity —
              enabling meaningful academic growth.
            </p>

            <p className="text-base-content/60 leading-relaxed">
              Through strict tutor verification and intelligent matching, we
              create an ecosystem built on trust, excellence, and impact.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {[
              "Strict Tutor Verification Process",
              "Smart Matching Technology",
              "Flexible Scheduling",
              "Secure & Transparent Payments",
              "Dedicated Support System",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-6 rounded-xl bg-base-200 border border-base-300 hover:shadow-md transition"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-primary"></div>
                <p className="text-base-content/70">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CLOSING STATEMENT ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-10 text-center max-w-3xl">

          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Built on Trust. Driven by Results.
          </h2>

          <p className="text-base-content/70 leading-relaxed">
            We are more than a tuition platform — we are a movement dedicated to
            empowering students and elevating education across Bangladesh.
          </p>

        </div>
      </section>

    </div>
  );
}