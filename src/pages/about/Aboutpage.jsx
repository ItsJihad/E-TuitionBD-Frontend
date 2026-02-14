export default function Aboutpage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <section className="relative py-36 text-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/15 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Transforming
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mt-4">
              Education in Bangladesh
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            eTuitionBd connects ambitious students with elite tutors —
            redefining how learning happens in the digital age.
          </p>
        </div>
      </section>

      <section className="py-28 border-t border-slate-100 border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-center">
          {[
            { value: "10,000+", label: "Students Empowered" },
            { value: "5,000+", label: "Verified Tutors" },
            { value: "50,000+", label: "Lessons Completed" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="mt-3 text-slate-500 text-sm tracking-wide uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              We believe every student deserves access to world-class education.
              Our platform bridges the gap between talent and opportunity —
              enabling meaningful academic growth.
            </p>

            <p className="text-slate-500 leading-relaxed">
              Through strict tutor verification and intelligent matching, we
              create an ecosystem built on trust, excellence, and impact.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Strict Tutor Verification Process",
              "Smart Matching Technology",
              "Flexible Scheduling",
              "Secure & Transparent Payments",
              "Dedicated Support System",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-indigo-600"></div>
                <p className="text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-indigo-50 to-blue-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Built on Trust. Driven by Results.
          </h2>

          <p className="text-slate-600 leading-relaxed">
            We are more than a tuition platform — we are a movement dedicated to
            empowering students and elevating education across Bangladesh.
          </p>
        </div>
      </section>
    </div>
  );
}
