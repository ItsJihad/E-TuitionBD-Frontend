import { Mail, MapPin, Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";

export default function Contactpage() {
  return (
    <div className="bg-base-100 text-base-content">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Get in <span className="text-primary">Touch</span>
            </h1>

            <p className="text-base-content/70 text-lg">
              Have questions? We'd love to hear from you. Send us a message and
              we’ll respond as soon as possible.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-base-200 border border-base-300 rounded-xl p-8 space-y-6">

                <h2 className="text-xl font-semibold">Contact Information</h2>

                <div className="space-y-5 text-base-content/70">

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center">
                      <Mail />
                    </div>
                    <div>
                      <p className="font-medium text-base-content">Email</p>
                      <p>support@etuitionbd.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center">
                      <Phone />
                    </div>
                    <div>
                      <p className="font-medium text-base-content">Phone</p>
                      <p>+880 1234-567890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center">
                      <MapPin />
                    </div>
                    <div>
                      <p className="font-medium text-base-content">Address</p>
                      <p>
                        House 123, Road 45 <br />
                        Gulshan, Dhaka 1212 <br />
                        Bangladesh
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <p className="text-sm text-base-content/60">
                Office hours: <span className="font-semibold text-base-content">
                  Mon–Fri, 9:00 AM – 6:00 PM
                </span>
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <form
                className="bg-base-200 border border-base-300 rounded-xl p-8 space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >

                <div>
                  <label htmlFor="name" className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="textarea textarea-bordered w-full"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>

              </form>

              <p className="mt-6 text-sm text-base-content/60">
                We usually reply within{" "}
                <span className="font-semibold text-base-content">
                  1 business day
                </span>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}