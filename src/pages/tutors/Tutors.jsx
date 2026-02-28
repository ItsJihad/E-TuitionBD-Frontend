import { Mail, ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router";
import { useAxiosSecure } from "../../hooks/UseAxios.jsx";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import LoadingPage from "../../components/Loader/LoadingPage.jsx";

export default function Tutors() {
  const axios = useAxiosSecure();
  const { currentUser } = UseAuth();

  const [tutors, setTutors] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const res = await axios.get("/private/allprivateteachers");
        setTutors(res.data);
      } catch (error) {
        console.error("Failed to fetch tutors");
      } finally {
        setLoader(false);
      }
    };

    if (currentUser) {
      fetchData();
    }
  }, [currentUser]);

  if (loader) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-base-100 text-base-content py-20">
      <main className="container mx-auto px-6 lg:px-10">

        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Meet Our <span className="text-primary">Tutors</span>
          </h1>
          <p className="text-base-content/70 text-lg">
            Verified tutors ready to help you achieve your academic goals.
          </p>
        </header>

        {/* Cards */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor) => {
              const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                tutor.name
              )}&background=0f172a&color=ffffff&size=200`;

              return (
                <article
                  key={tutor._id}
                  className="flex flex-col justify-between bg-base-200 border border-base-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  {/* Top */}
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <img
                        src={avatar}
                        alt={tutor.name}
                        className="w-14 h-14 rounded-full object-cover border border-base-300"
                      />

                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold truncate">
                          {tutor.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-1 text-sm text-accent">
                          <BadgeCheck className="w-4 h-4" />
                          Verified Tutor
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-base-content/70">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{tutor.email}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-6 pt-4 border-t border-base-300">
                    <Link
                      to={`/tutors/${tutor._id}`}
                      className="btn btn-primary btn-sm w-full"
                    >
                      View Profile
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}