import { useForm } from "react-hook-form";
import { Link } from "react-router";

function LoginPage() {
  const {} = useForm();
  return (
    <div>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div
          className="w-full max-w-md"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="glass-effect rounded-2xl p-8 shadow-elegant">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Sign in to continue to e-TuitionBd
              </p>
            </div>

            {/* Sign-In Form */}
            <form className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
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
                    className="lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm pl-10"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
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
                    className="lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    type="password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm pl-10 pr-10"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
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
                      className="lucide lucide-eye h-4 w-4"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow hover:scale-[1.02] font-bold h-10 px-5 py-2 w-full"
                type="submit"
              >
                Sign In
              </button>
            </form>

         
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="  px-4 ">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign-In */}
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold border-2 border-border bg-transparent hover:bg-secondary hover:border-primary/30 h-10 px-5 py-2 w-full"
              type="button"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                ></path>
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                ></path>
              </svg>
              Continue with Google
            </button>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                className="font-medium text-primary hover:underline"
                href="/register"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
