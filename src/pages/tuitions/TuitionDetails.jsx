import {
  BookOpen,
  GraduationCap,
  MapPin,
  Wallet,
  FileText,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../hooks/UseAxios";
import LoadingPage from "../../components/Loader/LoadingPage";
import UseAuth from "../../hooks/UseAuth";

export default function TuitionDetails() {

  const { id } = useParams();
  const axios = useAxiosSecure();
  const { currentUser } = UseAuth();

  const [loader, setLoader] = useState(true);
  const [tuition, setTuition] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoader(true);
        const res = await axios.get(`/tuition/posts/${id}`);
        setTuition(res.data);

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


  return (
    <section className="py-25 bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/tuitions"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tuitions
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                <h1 className="text-2xl font-bold text-slate-900">
                  {(tuition.data.subject).toUpperCase()}
                </h1>
              </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-600">
                <GraduationCap className="w-4 h-4 text-slate-400" />
                <span>{tuition.data.classLevel}</span>
              </div>
            </div>

              
            </div>

            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 h-fit">
              {(tuition.data.status).toUpperCase()}
            </span>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <MapPin className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="font-medium text-slate-900">
                  {(tuition.data.location).toUpperCase()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Wallet className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Budget</p>
                <p className="font-medium text-slate-900">
                  {tuition.data.budget}
                </p>
              </div>
            </div>

            
          </div>

          {/* Description */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-slate-500" />
              <h2 className="text-lg font-semibold text-slate-900">
                Description
              </h2>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 leading-relaxed">
              {tuition.data.description}
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            className="w-full md:w-auto px-8 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-colors duration-300"
          >
            Apply for Tuition
          </button>
        </div>
      </div>
    </section>
  );
}
