import { Mail, BadgeCheck, Send, Star } from "lucide-react";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../hooks/UseAxios";
import LoadingPage from "../../components/Loader/LoadingPage";

export default function TutorProfile() {
  const { id } = useParams();
  const axios = useAxiosSecure();

  const [loader, setLoader] = useState(true);
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const res = await axios.get(`/teacher/teacherdetails/${id}`);
        setTutor(res.data);
      } catch (error) {
        console.error("Error fetching tutor");
      } finally {
        setLoader(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loader) return <LoadingPage />;

  if (!tutor) {
    return (
      <div className="py-20 text-center text-base-content">
        Tutor not found.
      </div>
    );
  }

  const dummyImage =
    tutor.image ||
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400";

  return (
    <div className="bg-base-100 text-base-content py-20">
      <div className="container mx-auto px-6 lg:px-10 max-w-5xl">

        {/* ================= PROFILE CARD ================= */}
        <div className="bg-base-200 border border-base-300 rounded-2xl p-8 md:p-12 mb-16">

          <div className="grid md:grid-cols-3 gap-10 items-center">

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={dummyImage}
                alt={tutor.name}
                className="w-40 h-40 rounded-full object-cover border border-base-300"
              />
            </div>

            {/* Main Info */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {tutor.name}
                </h1>

                <div className="flex items-center gap-2 mt-2 text-accent text-sm">
                  <BadgeCheck className="w-4 h-4" />
                  Verified Tutor
                </div>
              </div>

              <div className="text-base-content/70">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {tutor.email}
                </p>
              </div>

              <Link
                to={`mailto:${tutor.email}?subject=Tutoring Inquiry`}
                className="btn btn-primary btn-sm mt-4"
              >
                <Send className="w-4 h-4 mr-1" />
                Contact via Email
              </Link>
            </div>

          </div>
        </div>

        {/* ================= ABOUT SECTION ================= */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-base-content/70 leading-relaxed">
            {tutor.bio ||
              "Experienced tutor with a strong academic background and a passion for helping students succeed. Skilled in personalized lesson planning and exam preparation."}
          </p>
        </div>

        {/* ================= KEY SPECIFICATIONS ================= */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Key Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-base-200 border border-base-300 rounded-xl p-6">
              <p className="text-sm text-base-content/60">Experience</p>
              <p className="font-semibold mt-1">
                {tutor.experience || "5+ Years"}
              </p>
            </div>

            <div className="bg-base-200 border border-base-300 rounded-xl p-6">
              <p className="text-sm text-base-content/60">Specialization</p>
              <p className="font-semibold mt-1">
                {tutor.subject || "Mathematics, Physics"}
              </p>
            </div>

            <div className="bg-base-200 border border-base-300 rounded-xl p-6">
              <p className="text-sm text-base-content/60">Location</p>
              <p className="font-semibold mt-1">
                {tutor.location || "Dhaka, Bangladesh"}
              </p>
            </div>

            <div className="bg-base-200 border border-base-300 rounded-xl p-6">
              <p className="text-sm text-base-content/60">Hourly Rate</p>
              <p className="font-semibold mt-1">
                {tutor.rate || "৳800 / hour"}
              </p>
            </div>
          </div>
        </div>

        {/* ================= RATINGS ================= */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Ratings & Reviews
          </h2>

          <div className="bg-base-200 border border-base-300 rounded-xl p-6 flex items-center gap-4">
            <div className="flex text-warning">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>

            <p className="text-base-content/70">
              4.9 Average Rating (120 Reviews)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}