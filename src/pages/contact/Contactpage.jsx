export default function Contactpage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <main className="w-full max-w-5xl">
        <section className="mb-10 text-center">
          <h1 className="text-4xl font-semibold text-slate-900">
            Get in Touch
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-medium text-slate-900 mb-4">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 border border-slate-100">
                      <svg
                        className="w-5 h-5 text-slate-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="14" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900">
                        Email
                      </h3>
                      <p className="text-sm text-slate-600">
                        support@etuitionbd.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 border border-slate-100">
                      <svg
                        className="w-5 h-5 text-slate-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900">
                        Phone
                      </h3>
                      <p className="text-sm text-slate-600">+880 1234-567890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 border border-slate-100">
                      <svg
                        className="w-5 h-5 text-slate-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900">
                        Address
                      </h3>
                      <p className="text-sm text-slate-600">
                        House 123, Road 45
                        <br />
                        Gulshan, Dhaka 1212
                        <br />
                        Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <p>
                  Office hours:{" "}
                  <span className="text-slate-800 font-medium">
                    Mon–Fri, 9:00 AM – 6:00 PM
                  </span>
                </p>
              </div>
            </div>

            <div>
              <form
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full hover:cursor-pointer rounded-md bg-slate-900 text-white py-2 text-sm font-medium hover:brightness-95 transition"
                >
                  Send Message
                </button>
              </form>

              <p className="mt-4 text-xs text-slate-600">
                We usually reply within{" "}
                <span className="font-medium text-slate-800">
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
