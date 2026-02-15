import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Camera,
  Save,
  User,
} from "lucide-react";

import Swal from "sweetalert2";
import useAuth from "../../../../hooks/UseAuth"
export default function ProfileSettings() {
  const { currentUser,ProfileUpdate, updateEmail } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.displayName || "");
      setEmail(currentUser.email || "");
      setPhotoURL(currentUser.photoURL || "");
    }
  }, [currentUser]);

  
  const handleUpdate = async () => {
    if (!currentUser) return;

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update your profile?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update!",
    });

    if (!result.isConfirmed) return;

    try {
      
      await ProfileUpdate(currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

   
      if (email !== currentUser.email) {
        await updateEmail(currentUser, email);
      }

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Your profile has been updated successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message,
      });
    }
  };

  return (
    <div className="relative max-w-3xl space-y-12">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

    
      <header className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Profile Settings
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Update your personal information and keep your profile up to date.
        </p>

        <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>
      </header>

    
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-10 space-y-10">

   
        <div className="flex flex-col items-center space-y-4">
          <div className="relative group">
            <img
              src={photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=Student"}
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              alt="Profile"
            />
            
          </div>

         
        </div>

 
        <div className="space-y-6">

      
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                placeholder="01XXXXXXXXX"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border text-neutral-900 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
          </div>

        </div>

        {/* Save Button */}
        <button
          onClick={handleUpdate}
          className="w-full hover:cursor-pointer flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <Save size={18} />
          Save Changes
        </button>

      </div>
    </div>
  );
}
