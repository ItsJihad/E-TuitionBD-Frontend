import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  MapPin,
  Wallet,
} from "lucide-react";
import { Link, useLoaderData } from "react-router";

function RecentPostsSection() {
  const { Posts } = useLoaderData();
  const posts = Posts?.data;

  return (
    <section className="bg-base-100 py-16 md:py-24 border-t border-base-300">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 text-primary text-sm font-semibold border border-base-300">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Latest Opportunities
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-base-content">
            Recent Tuition <span className="text-primary">Posts</span>
          </h2>

          <p className="text-base-content/70 text-lg">
            Discover newly posted tuition opportunities from students and parents
            actively looking for qualified tutors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts?.slice(0, 4).map((post) => (
            <article
              key={post._id}
              className="flex flex-col justify-between bg-base-200 rounded-xl border border-base-300 p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Top Section */}
              <div>

                {/* Subject + Status */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-base-content">
                        {post.subject.toUpperCase()}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-base-content/70">
                      <GraduationCap className="w-4 h-4 text-base-content/50" />
                      <span>{post.classLevel}</span>
                    </div>
                  </div>

                  <span className="badge badge-accent badge-sm">
                    {post.status}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm text-base-content/70 mb-5">

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-base-content/50" />
                    <span>{post.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-base-content/50" />
                    <span>{post.budget}</span>
                  </div>

                  <div className="bg-base-100 border border-base-300 rounded-lg p-3 mt-3">
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-base-content/50 mt-1" />
                      <p className="line-clamp-3 text-sm text-base-content/80">
                        {post.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Button */}
              <Link
                to={`/tuitions/${post._id}`}
                className="btn btn-primary btn-sm w-full"
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/tuitions"
            className="btn btn-outline btn-primary px-8"
          >
            View All Tuitions →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default RecentPostsSection;