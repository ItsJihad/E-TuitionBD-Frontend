import React from 'react'

function Registerpage() {
  return (
    <div>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
  <div className="w-full max-w-md" style={{ opacity: 1, transform: "none" }}>
    <div className="glass-effect rounded-2xl p-8 shadow-elegant">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Create Account</h1>
        <p className="text-muted-foreground">Join eTuitionBd and start learning today</p>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="name">Full Name</label>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm pl-10" id="name" placeholder="Enter your full name" required />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <input type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm pl-10" id="email" placeholder="Enter your email" required />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="phone">Phone Number</label>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <input type="tel" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm pl-10" id="phone" placeholder="Enter your phone number" required />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input type="password" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm pl-10 pr-10" id="password" placeholder="Create a password" required />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye h-4 w-4">
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>

        {/* Role Selection */}
        <div className="space-y-3">
          <label className="text-sm font-medium leading-none">I want to register as</label>
          <div role="radiogroup" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <button type="button" role="radio" aria-checked="true" value="student" className="aspect-square h-4 w-4 rounded-full border border-primary text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </span>
              </button>
              <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="student">Student</label>
            </div>
            <div className="flex items-center space-x-2">
              <button type="button" role="radio" aria-checked="false" value="tutor" className="aspect-square h-4 w-4 rounded-full border border-primary text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"></button>
              <label className="text-sm font-medium leading-none cursor-pointer" htmlFor="tutor">Tutor</label>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow hover:scale-[1.02] font-bold h-10 px-5 py-2 w-full" type="submit">
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-card px-4 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      {/* Google Sign-In */}
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold border-2 border-border bg-transparent hover:bg-secondary hover:border-primary/30 h-10 px-5 py-2 w-full" type="button">
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
        </svg>
        Continue with Google
      </button>

      {/* Sign-in Link */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account? <a className="font-medium text-primary hover:underline" href="/login">Sign in</a>
      </p>
    </div>
  </div>
</main>

    </div>
  )
}

export default Registerpage
