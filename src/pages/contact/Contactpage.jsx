import React from 'react'

function Contactpage() {
  return (
    <div>
      <main className="flex-1">
  <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto" style={{ opacity: 1, transform: "none" }}>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Get in Touch
        </h1>
        <p className="text-muted-foreground">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
    </div>
  </section>

  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div style={{ opacity: 1, transform: "none" }}>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 text-primary">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p className="text-muted-foreground">support@etuitionbd.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Phone</h3>
                <p className="text-muted-foreground">+880 1234-567890</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 text-primary">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Address</h3>
                <p className="text-muted-foreground">
                  House 123, Road 45<br />
                  Gulshan, Dhaka 1212<br />
                  Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ opacity: 1, transform: "none" }}>
          <form className="glass-effect rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="name">Your Name</label>
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm" id="name" placeholder="Enter your name" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="email">Email Address</label>
              <input type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm" id="email" placeholder="Enter your email" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="subject">Subject</label>
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm" id="subject" placeholder="What's this about?" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="message">Message</label>
              <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" id="message" placeholder="Your message..." rows="5" required></textarea>
            </div>

            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow hover:scale-[1.02] font-bold h-10 px-5 py-2 w-full gap-2" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-4 h-4">
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

    </div>
  )
}

export default Contactpage
