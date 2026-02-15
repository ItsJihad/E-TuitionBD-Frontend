import {
  User,
  Mail,
  Phone,
  Camera,
  Save,
} from "lucide-react";

export default function ProfileSettings() {
  return (
    <div className="relative max-w-3xl space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Profile Settings
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Update your personal information and keep your profile up to date.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

      {/* Profile Card */}
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-10 space-y-10">

        {/* Avatar Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative group">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              alt="Profile"
            />
            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer">
              <Camera size={22} className="text-white" />
            </div>
          </div>

          <p className="text-sm text-slate-500">
            Click image to change profile picture
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-slate-600">
              Full Name
            </label>
            <div className="relative mt-2">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500"
              />
              <input
                placeholder="Enter your full name"
                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-600">
              Email Address
            </label>
            <div className="relative mt-2">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-slate-600">
              Phone Number
            </label>
            <div className="relative mt-2">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600"
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
          </div>

        </div>

        {/* Save Button */}
        <button
          className="w-full hover:cursor-pointer flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <Save size={18} />
          Save Changes
        </button>

      </div>
    </div>
  );
}
