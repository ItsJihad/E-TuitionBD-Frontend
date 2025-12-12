import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Registerpage({ onSubmit: onSubmitProp } = {}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: { role: "student" },
  });

  const [showPwd, setShowPwd] = useState(false);
  const password = watch("password", "");

  const onSubmit = async (data) => {
    if (typeof onSubmitProp === "function") return onSubmitProp(data);
    // Default placeholder behavior - replace with real API call
    console.log("Register:", data);
    return new Promise((res) => setTimeout(res, 800));
  };

  return (
    <div className="p-10 flex items-center justify-center bg-white px-4">
      <main className="w-full max-w-md">
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm">
          <div className="p-6">
            <header className="mb-6 text-center">
              <h1 className="text-2xl font-semibold text-slate-900">Create account</h1>
              <p className="text-sm text-slate-500 mt-1">Join e-TuitionBd and start Learning / Earning today</p>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              {/* Full name */}
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Full name is required" })}
                  className={`w-full rounded-md border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                    errors.name ? "border-rose-500" : "border-slate-200"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name.message}</p>}
              </div>

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

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: { value: /^[0-9+\-\s]{7,20}$/, message: "Enter a valid phone" },
                  })}
                  className={`w-full rounded-md border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                    errors.phone ? "border-rose-500" : "border-slate-200"
                  }`}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>}
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
                    autoComplete="new-password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                    })}
                    className={`w-full rounded-md border px-3 py-2 pr-16 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                      errors.password ? "border-rose-500" : "border-slate-200"
                    }`}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="absolute hover:cursor-pointer right-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm focus:outline-none"
                    aria-label={showPwd ? "Hide password" : "Show password"}
                  >
                    {showPwd ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-xs text-rose-600">{errors.password.message}</p>}
              </div>

              {/* Role (student / tutor) */}
              <fieldset>
                <legend className="text-xs font-medium text-slate-700 mb-2">Register as</legend>
                <div className="flex gap-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      value="student"
                      {...register("role")}
                      defaultChecked
                      className="h-4 w-4 rounded border-slate-300 text-slate-900"
                    />
                    <span className="text-sm text-slate-700">Student</span>
                  </label>

                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      value="tutor"
                      {...register("role")}
                      className="h-4 w-4 rounded border-slate-300 text-slate-900"
                    />
                    <span className="text-sm text-slate-700">Tutor</span>
                  </label>
                </div>
              </fieldset>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-slate-900 text-white py-2 text-sm font-medium hover:brightness-95 disabled:opacity-60 transition"
              >
                {isSubmitting ? "Creating..." : "Create account"}
              </button>
            </form>

            {/* footer */}
            <div className="mt-4 text-center text-sm text-slate-600">
              <Link to="/login" className="text-slate-700 hover:underline">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
