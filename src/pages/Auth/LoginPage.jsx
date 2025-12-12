import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Loginpage({ onSubmit: onSubmitProp } = {}) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [showPwd, setShowPwd] = useState(false);

  const onSubmit = (data) => {
    // user-supplied handler takes precedence
    if (typeof onSubmitProp === "function") return onSubmitProp(data);
    // default behavior (replace with real auth)
    console.log("Sign in:", data);
    return new Promise((res) => setTimeout(res, 600)); // simulate slight delay
  };

  return (
    <div className=" p-10 flex items-center justify-center bg-white px-4">
      <main className="w-full max-w-md">
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm">
          <div className="p-6">
            <header className="mb-6 text-center">
              <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
              <p className="text-sm text-slate-500 mt-1">Sign in to continue to e-TuitionBd</p>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                  })}
                  className={`w-full rounded-md border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                    errors.email ? "border-rose-500" : "border-slate-200"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-xs font-medium text-slate-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPwd ? "text" : "password"}
                    autoComplete="current-password"
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
                    className={`w-full rounded-md border px-3 py-2 pr-10 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                      errors.password ? "border-rose-500" : "border-slate-200"
                    }`}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <button
                    type="button"
                    aria-label={showPwd ? "Hide password" : "Show password"}
                    onClick={() => setShowPwd((s) => !s)}
                    className="absolute hover:cursor-pointer right-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm focus:outline-none"
                  >
                    {showPwd ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-xs text-rose-600">{errors.password.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-slate-900 text-white py-2 text-sm font-medium hover:brightness-95 disabled:opacity-60 transition"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-4 text-center text-sm text-slate-600">
              <Link to="/forgot" className="text-slate-700 hover:underline mr-4">Forgot?</Link>
              <span>•</span>
              <Link to="/signup" className="ml-4 text-slate-700 hover:underline">Create account</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
