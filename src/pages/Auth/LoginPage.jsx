import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import UseAuth from "../../hooks/UseAuth";

import { useAxiosOpen } from "../../hooks/useAxiosOpen";

export default function Loginpage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const Axios = useAxiosOpen();
  const [showPwd, setShowPwd] = useState(false);
  const location =useLocation()
  const { signIn, GoogleSign } = UseAuth();
  const navigation=useNavigate()


  const googleSignIn = async () => {
    const result = await GoogleSign();
    const user = result.user;

    const token = await user.getIdToken();

    const UserInfo = {
      role: "student",
      phone: "0100000000",
    };

    try {
      await Axios.post("/user/googleauth", UserInfo, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((data) => {
        console.log(data.data);
       navigation(location?.state || "/");
      });
    } catch (error) {
      console.log(`failed to connect ${error}`);
    }
  };

  const onSubmit = (data) => {
    signIn(data.email, data.password).then(()=>navigation(location?.state || "/"))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 py-16">
      {/* Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl"></div>

      <main className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl p-10">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
            <p className="text-slate-500 mt-2">
              Sign in to continue to eTuitionBd
            </p>
          </header>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                className={`w-full rounded-xl border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                  errors.email ? "border-rose-500" : "border-slate-200"
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-xs text-rose-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                  className={`w-full rounded-xl border px-4 py-3 pr-12 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                    errors.password ? "border-rose-500" : "border-slate-200"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute hover:cursor-pointer right-4 top-1/2 -translate-y-1/2 text-sm text-indigo-600 font-medium hover:text-indigo-800"
                >
                  {showPwd ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-xs text-rose-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl hover:cursor-pointer bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-xs  text-slate-400 uppercase tracking-wide">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <button
            onClick={googleSignIn}
            className="w-full h-12 hover:cursor-pointer rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center gap-3 text-sm font-medium shadow-sm transition-all duration-200"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              viewBox="0 0 512 512"
            >
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              />
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              />
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              />
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              />
            </svg>
            Continue with Google
          </button>

          <div className="mt-8 text-center text-sm text-slate-500">
            <Link to="/forgot" className="text-indigo-600 hover:underline mr-3">
              Forgot password?
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              to="/register"
              className="ml-3 text-indigo-600 hover:underline"
            >
              Create account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
