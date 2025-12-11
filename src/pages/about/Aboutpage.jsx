import { motion } from "framer-motion";
import { Users, BookOpen, Award, Heart } from "lucide-react";


export default function Aboutpage() {
  return (
    <div className="  flex    mx-auto items-center justify-center bg-base-100">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">eTuitionBd</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are Bangladesh's leading platform connecting students with
                qualified tutors. Our mission is to make quality education
                accessible to everyone, empowering students to achieve their
                academic goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Item 1 */}
              <div
                className="text-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-8 h-8 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  10,000+
                </div>
                <div className="text-muted-foreground">Students</div>
              </div>

              {/* Item 2 */}
              <div
                className="text-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-open w-8 h-8 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  5,000+
                </div>
                <div className="text-muted-foreground">Tutors</div>
              </div>

              {/* Item 3 */}
              <div
                className="text-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-award w-8 h-8 text-primary"
                    aria-hidden="true"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  50,000+
                </div>
                <div className="text-muted-foreground">Classes Completed</div>
              </div>

              {/* Item 4 */}
              <div
                className="text-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart w-8 h-8 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  </svg>
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  98%
                </div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        <section className=" flex items-center justify-center   px-30  ">
          <div className="grid lg:grid-cols-2 gap-3 lg:gap-80 items-center justify-center">
            <div style={{ opacity: 1, transform: "none" }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                At eTuitionBd, we believe that every student deserves access to
                quality education. Our platform bridges the gap between eager
                learners and skilled tutors, creating meaningful educational
                connections.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We carefully verify all tutors on our platform to ensure they
                meet our high standards of expertise and professionalism. This
                gives students and parents peace of mind when choosing a tutor.
              </p>
            </div>

            <div
              className="glass-effect rounded-2xl p-8"
              style={{ opacity: 1, transform: "none" }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Why Choose Us?
              </h3>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Verified & experienced tutors
                </li>

                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Flexible scheduling options
                </li>

                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Secure payment processing
                </li>

                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  24/7 customer support
                </li>

                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Satisfaction guarantee
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
