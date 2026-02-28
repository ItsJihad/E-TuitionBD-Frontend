import { Link } from "react-router";
import {
  MapPin,
  Wallet,
  BookOpen,
  ArrowRight,
  GraduationCap,
  FileText,
} from "lucide-react";

import { useAxiosSecure } from "../../hooks/UseAxios.jsx";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import LoadingPage from "../../components/Loader/LoadingPage.jsx";

export default function Tuitions() {
  const axios = useAxiosSecure();
  const [tuitions, setTuition] = useState([]);
  const { currentUser } = UseAuth();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let mount = true;

    const FetchData = async () => {
      try {
        if (mount) {
          setLoader(true);
          await axios.get("/private/allprivateposts").then((res) => {
            setTuition(res.data);
            setLoader(false);
          });
        }
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    };

    if (currentUser) {
      FetchData();
    }

    return () => {
      mount = false;
      setLoader(false);
    };
  }, [currentUser]);

  if (loader) return <LoadingPage />;

  return (
    <div className="bg-base-100 text-base-content py-20">
      <main className="container mx-auto px-6 lg:px-10">

        {/* ================= HEADER ================= */}
        <header className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold">
            Available <span className="text-primary">Tuitions</span>
          </h1>

          <p className="text-base-content/70">
            Browse current tuition opportunities and find the right match for your teaching skills.
          </p>
        </header>

        {/* ================= SEARCH ================= */}
        <section className="max-w-3xl mx-auto mb-12 flex gap-3">
          <div className="relative flex-1">
            <input
              aria-label="Search tuitions"
              placeholder="Search by subject or location..."
              className="input input-bordered w-full pl-10"
            />

            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          <button className="btn btn-outline">
            Filters
          </button>
        </section>

        {/* ================= CARDS ================= */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuitions.map((tuition, index) => (
              <article
                key={index}
                className="flex flex-col justify-between bg-base-200 border border-base-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <h3 className="text-lg font-semibold">
                          {tuition.subject.toUpperCase()}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-base-content/70">
                        <GraduationCap className="w-4 h-4" />
                        {tuition.classLevel}
                      </div>
                    </div>

                    <span className="badge badge-accent badge-sm">
                      {tuition.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-3 text-sm text-base-content/70 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {tuition.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4" />
                      {tuition.budget}
                    </div>

                    <div className="flex items-start gap-2 bg-base-100 border border-base-300 rounded-lg p-3">
                      <FileText className="w-4 h-4 mt-1" />
                      <p className="line-clamp-3">
                        {tuition.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <Link
                  to={`/tuitions/${tuition._id}`}
                  className="btn btn-primary btn-sm w-full"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}