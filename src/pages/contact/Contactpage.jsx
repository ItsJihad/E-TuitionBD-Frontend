export default function Contactpage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <main className="relative w-full max-w-6xl">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get in{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us a message and
            we’ll respond as soon as possible.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-xl">
                <h2 className="text-xl font-semibold text-slate-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:scale-105 transition">
                      <span className="text-indigo-600 text-xl">✉</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Email
                      </h3>
                      <p className="text-slate-600">support@etuitionbd.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:scale-105 transition">
                      <span className="text-indigo-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Phone
                      </h3>
                      <p className="text-slate-600">+880 1234-567890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:scale-105 transition">
                      <span className="text-indigo-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Address
                      </h3>
                      <p className="text-slate-600">
                        House 123, Road 45 <br />
                        Gulshan, Dhaka 1212 <br />
                        Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600">
                Office hours:{" "}
                <span className="font-semibold text-slate-800">
                  Mon–Fri, 9:00 AM – 6:00 PM
                </span>
              </p>
            </div>

            <div>
              <form
                className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-xl space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    placeholder="What's this about?"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-600">
                We usually reply within{" "}
                <span className="font-semibold text-slate-800">
                  1 business day
                </span>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
