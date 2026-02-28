import { ArrowRight, BadgeCheck } from "lucide-react";
import { useLoaderData, Link } from "react-router";

function FeaturedTutors() {
  const { Teachers } = useLoaderData();
  const tutors = Teachers?.data || [];

  return (
    <section className="bg-base-100 py-16 md:py-24 border-t border-base-300">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 text-primary text-sm font-semibold border border-base-300">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Our Tutors
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-base-content">
            Meet Our <span className="text-primary">Teachers</span>
          </h2>

          <p className="text-base-content/70 text-lg">
            Verified tutors ready to connect and help students succeed.
          </p>
        </div>

        {/* Tutor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tutors.slice(0, 4).map((tutor) => (
            <div
              key={tutor._id}
              className="flex flex-col justify-between bg-base-200 rounded-xl border border-base-300 p-6 hover:shadow-lg transition-all duration-300"
            >

              {/* Top Section */}
              <div>

                {/* Avatar */}
                <div className="flex justify-center mb-5">
                  <div className="h-20 w-20 rounded-full bg-primary text-primary-content flex items-center justify-center text-xl font-bold">
                    {tutor.name?.charAt(0).toUpperCase()}
                  </div>
                </div>

                {/* Name */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-base-content">
                    {tutor.name}
                  </h3>
                  <p className="text-xs text-base-content/60 mt-1">
                    Tutor ID: {tutor._id.slice(-6)}
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="mt-5 flex items-center justify-center gap-2 text-sm text-base-content/70">
                  <BadgeCheck className="w-4 h-4 text-accent" />
                  <span>Verified with Legal Documents</span>
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

            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            to="/tutors"
            className="btn btn-outline btn-primary px-8"
          >
            View All Tutors →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FeaturedTutors;