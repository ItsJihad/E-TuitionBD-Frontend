import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import { useAxiosSecure } from "../../hooks/UseAxios";
import { useAxiosOpen } from "../../hooks/useAxiosOpen";

export default function Registerpage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPwd, setShowPwd] = useState(false);
  const { SignUp, GoogleSign, ProfileUpdate, currentUser } = UseAuth();
  const AxiosSecure = useAxiosSecure();
  const AxiosOpen = useAxiosOpen();

  const onSubmit = async (data) => {
    const userCredential = await SignUp(data.email, data.password);
    console.log(userCredential);

    const firebaseUser = userCredential.user;

    await ProfileUpdate({
      displayName: data.name,
    });

    const freshToken = await firebaseUser.getIdToken(true);

    const UserInfo = {
      role: data.role,
      phone: data.phone,
    };

    try {
      await AxiosOpen.post("/user/auth", UserInfo, {
        headers: {
          authorization: `Bearer ${freshToken}`,
        },
      }).then((data) => {
        console.log(data.data);
      });
    } catch (error) {
      console.log(`failed to connect ${error}`);
    }
  };

  const googleSignIn =async () => {
   const result = await GoogleSign(); 
    const user = result.user;
    const token = await user.getIdToken();
    

    const UserInfo = {
      role: "student",
      phone: "0100000000",
    };

    try {
      await AxiosOpen.post("/user/googleauth", UserInfo, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((data) => {
        console.log(data.data);
      });
    } catch (error) {
      console.log(`failed to connect ${error}`);
    }





  };

  return (
    <div className="p-10 flex items-center justify-center bg-white px-4">
      <main className="w-full max-w-md">
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm">
          <div className="p-6">
            <header className="mb-6 text-center">
              <h1 className="text-2xl font-semibold text-slate-900">
                Create account
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Join e-TuitionBd and get started
              </p>
            </header>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-700 mb-1"
                >
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className={`w-full rounded-md border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                    errors.name ? "border-rose-500" : "border-slate-200"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-700 mb-1"
                >
                  Email
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
                  className={`w-full rounded-md border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                    errors.email ? "border-rose-500" : "border-slate-200"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-slate-700 mb-1"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^01\d{9}$/,
                      message: "Enter a valid BD phone number",
                    },
                  })}
                  className={`w-full rounded-md border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                    errors.phone ? "border-rose-500" : "border-slate-200"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-slate-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPwd ? "text" : "password"}
                    autoComplete="new-password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    className={`w-full rounded-md border px-3 py-2 pr-10 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                      errors.password ? "border-rose-500" : "border-slate-200"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm hover:cursor-pointer"
                  >
                    {showPwd ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-rose-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex gap-6">
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="radio"
                    value="student"
                    defaultChecked
                    {...register("role", { required: true })}
                    className="h-4 w-4 border-slate-300"
                  />
                  Student
                </label>

                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="radio"
                    value="teacher"
                    {...register("role", { required: true })}
                    className="h-4 w-4 border-slate-300"
                  />
                  Tutor
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex mx-auto p-5 my-2 rounded-md bg-slate-900 text-white py-2 text-sm font-medium hover:brightness-95 disabled:opacity-60 transition"
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </form>

            <button
              onClick={googleSignIn}
              className="btn flex mx-auto bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <div className="mt-4 text-center text-sm text-slate-600">
              Already have an account?
              <Link
                to="/signin"
                className="ml-1 text-slate-700 hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
