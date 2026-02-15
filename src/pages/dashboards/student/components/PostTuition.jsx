import { useForm } from "react-hook-form";
import {
  BookOpen,
  GraduationCap,
  MapPin,
  BadgeDollarSign,
  FileText,
  Send,
} from "lucide-react";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../../hooks/UseAxios";

export default function PostTuition() {
  const axios = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  /* =========================
     SUBMIT FUNCTION
  ========================= */
  const onSubmit = async (data) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to submit this tuition post?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.post("/student/post", data);

      Swal.fire({
        icon: "success",
        title: "Posted!",
        text: "Your tuition has been posted successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      reset(); // clear form
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong while posting.",
      });
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto py-10">
      {/* Background Glow Effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="relative mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Post New Tuition
        </h1>
        <p className="text-slate-500 mt-3 text-lg">
          Publish your tuition request and connect with qualified tutors.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
        </div>
      </header>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white/70 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-10 space-y-8"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <FormInput
            label="Subject"
            icon={<BookOpen size={18} />}
            placeholder="e.g. Mathematics"
            register={register("subject", { required: "Subject is required" })}
            error={errors.subject}
          />

          <FormInput
            label="Class"
            icon={<GraduationCap size={18} />}
            placeholder="e.g. Class 10"
            register={register("classLevel", { required: "Class is required" })}
            error={errors.classLevel}
          />

          <FormInput
            label="Location"
            icon={<MapPin size={18} />}
            placeholder="e.g. Gulshan, Dhaka"
            register={register("location", {
              required: "Location is required",
            })}
            error={errors.location}
          />

          <FormInput
            label="Monthly Budget"
            type="number"
            icon={<BadgeDollarSign size={18} />}
            placeholder="e.g. 8000"
            register={register("budget", {
              required: "Budget is required",
              min: { value: 1000, message: "Minimum budget is 1000" },
            })}
            error={errors.budget}
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Description
          </label>
          <div className="relative mt-3">
            <FileText
              size={18}
              className="absolute left-4 top-4 text-slate-400"
            />
            <textarea
              rows={5}
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Describe your tuition requirements in detail..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50/70 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>
          {errors.description && (
            <p className="text-xs text-rose-500 mt-2">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
        >
          <Send
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
          {isSubmitting ? "Posting..." : "Submit Tuition"}
        </button>
      </form>
    </div>
  );
}

/* Reusable Input Component */
function FormInput({
  label,
  icon,
  placeholder,
  register,
  error,
  type = "text",
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="relative mt-3">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
          {icon}
        </div>
        <input
          type={type}
          {...register}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50/70 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
        />
      </div>
      {error && (
        <p className="text-xs text-rose-500 mt-2">
          {error.message}
        </p>
      )}
    </div>
  );
}
