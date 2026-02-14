import { Mail, User, BadgeCheck, X, Send } from "lucide-react";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../hooks/UseAxios";
import LoadingPage from "../../components/Loader/LoadingPage";
import UseAuth from "../../hooks/UseAuth";

export default function TutorProfile() {
  const { id } = useParams();
  const axios = useAxiosSecure();
  const { currentUser } = UseAuth();

  const [loader, setLoader] = useState(true);
  const [tutor, setTutor] = useState(null);
 


  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoader(true);
        const res = await axios.get(`/teacher/teacherdetails/${id}`);
        setTutor(res.data);
      } catch (error) {
        console.error("Error fetching tutor:", error);
      } finally {
        setLoader(false);
      }
    };

    if (currentUser && id) {
      FetchData();
    }
  }, [id, currentUser, axios]);



  if (loader) return <LoadingPage />;


  const dummyImage =
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop";

  return (
    <>
      <section className=" bg-[#fafafa] py-25 px-4 relative overflow-hidden font-sans">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-slate-900 p-12 flex flex-col items-center justify-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
                <img
                  src={tutor?.image || dummyImage}
                  alt="Tutor profile"
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                />
              </div>

              <div className="mt-6">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] uppercase tracking-wider font-bold border border-emerald-500/20">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Verified Tutor
                </span>
              </div>
            </div>

            <div className="md:w-3/5 p-12 flex flex-col justify-center bg-white">
              <div className="space-y-2">
                <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">
                  Teacher Profile
                </p>
                <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {tutor.name}
                </h1>
                <div className="flex items-center gap-2 text-slate-500 pt-2">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <Mail className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-lg">{tutor.email}</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-50 flex flex-wrap gap-4">
                <Link
                  to={`mailto:${tutor.email}?subject=Inquiry for Tutoring`}
                  className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold transition-all hover:bg-indigo-700 hover:-translate-y-1 active:scale-95 shadow-xl shadow-indigo-100"
                >
                  <Send className="w-5 h-5" />
                  <span>Contact with Email</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
