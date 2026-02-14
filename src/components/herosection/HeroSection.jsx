import { Link } from "react-router";

function HeroSection() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 md:py-28">
        {/* Background Glow Layers */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-semibold text-indigo-600 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600"></span>
                </span>
                #1 Tuition Platform in Bangladesh
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                Find the Perfect{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Tutor
                </span>{" "}
                for Your{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Success
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Connect with qualified tutors, post tuition requirements, and
                manage your learning journey seamlessly. Join thousands of
                successful students today.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to={"/tuitions"}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold h-14 px-10 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                >
                  Find Tuitions
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to={"/register"}
                  className="inline-flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 font-semibold h-14 px-10 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  Become a Tutor
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                {[
                  { number: "10,000+", label: "Students" },
                  { number: "5,000+", label: "Tutors" },
                  { number: "50,000+", label: "Tuitions" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition"
                  >
                    <p className="text-2xl font-bold text-indigo-600">
                      {stat.number}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6 hover:scale-[1.02] transition-all duration-500">
                <img
                  src="./assets/girl.png"
                  alt="Student"
                  className="rounded-2xl object-cover w-full"
                />

                <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-5 py-3 border border-slate-200">
                  <p className="text-sm font-semibold text-slate-800">
                    Trusted by 10k+ Students
                  </p>
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
