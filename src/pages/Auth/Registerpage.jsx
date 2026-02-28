import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import { useAxiosOpen } from "../../hooks/useAxiosOpen";

export default function Registerpage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { SignUp, GoogleSign, ProfileUpdate } = UseAuth();
  const AxiosOpen = useAxiosOpen();

  const navigation = useNavigate();
  const location = useLocation();

  const [showPwd, setShowPwd] = useState(false);
  const [authError, setAuthError] = useState("");

  /* ================= REGISTER ================= */
  const onSubmit = async (data) => {
    try {
      setAuthError("");

      const userCredential = await SignUp(data.email, data.password);
      const firebaseUser = userCredential.user;

      await ProfileUpdate({
        displayName: data.name,
      });

      const freshToken = await firebaseUser.getIdToken(true);

      await AxiosOpen.post(
        "/user/auth",
        {
          role: data.role,
          phone: data.phone,
        },
        {
          headers: {
            authorization: `Bearer ${freshToken}`,
          },
        }
      );

      navigation(location?.state || "/");
    } catch (error) {
      setAuthError(error.message);
    }
  };

  /* ================= GOOGLE ================= */
  const googleSignIn = async () => {
    try {
      setAuthError("");

      const result = await GoogleSign();
      const user = result.user;
      const token = await user.getIdToken();

      await AxiosOpen.post(
        "/user/googleauth",
        { role: "student", phone: "0100000000" },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      navigation(location?.state || "/");
    } catch (error) {
      setAuthError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex items-center mt-5 justify-center px-4 py-16">

      <main className="w-full max-w-lg">

        <div className="bg-base-200 border border-base-300 rounded-xl shadow-lg p-8">

          {/* HEADER */}
          <header className="text-center mb-8">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-sm text-base-content/70">
              Join eTuitionBd and start your journey
            </p>
          </header>

          {/* ERROR MESSAGE */}
          {authError && (
            <div className="alert alert-error mb-6 text-sm">
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>

              <input
                {...register("name", { required: "Name is required" })}
                className="input input-bordered w-full"
              />

              {errors.name && (
                <span className="text-error text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* EMAIL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>

              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter valid email",
                  },
                })}
                className="input input-bordered w-full"
              />

              {errors.email && (
                <span className="text-error text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* PHONE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>

              <input
                placeholder="01XXXXXXXXX"
                {...register("phone", {
                  required: "Phone required",
                  pattern: {
                    value: /^01\d{9}$/,
                    message: "Invalid BD phone number",
                  },
                })}
                className="input input-bordered w-full"
              />

              {errors.phone && (
                <span className="text-error text-xs">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* PASSWORD */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  {...register("password", {
                    required: "Password required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  className="input input-bordered w-full pr-16"
                />

                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-sm"
                >
                  {showPwd ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <span className="text-error text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* ROLE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Account Type</span>
              </label>

              <div className="flex gap-4">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="radio"
                    value="student"
                    defaultChecked
                    className="radio radio-primary"
                    {...register("role")}
                  />
                  Student
                </label>

                <label className="label cursor-pointer gap-2">
                  <input
                    type="radio"
                    value="teacher"
                    className="radio radio-primary"
                    {...register("role")}
                  />
                  Tutor
                </label>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="divider text-xs my-8">
            Or continue with
          </div>

          <button
            onClick={googleSignIn}
            className="btn btn-outline w-full"
          >
            Continue with Google
          </button>

          <div className="mt-8 text-center text-sm text-base-content/70">
            Already have an account?
            <Link to="/signin" className="text-primary ml-2">
              Sign in
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}