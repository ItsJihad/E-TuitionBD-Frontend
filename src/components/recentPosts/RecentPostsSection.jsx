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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative text-center mb-20">
          {/* Background Glow */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-3xl"></div>

          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-slate-100 border border-emerald-100 text-xs font-semibold text-emerald-600 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Latest Opportunities
          </div>

          <h2 className="relative text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Recent Tuition{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Posts
            </span>
          </h2>

          <p className="relative text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover newly posted tuition opportunities from students and
            parents actively looking for qualified tutors.
          </p>

          <div className="relative mt-10 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                      {post.subject.toUpperCase()}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">{post.classLevel}</span>
                  </div>
                </div>

                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {post.status.toUpperCase()}
                </span>
              </div>

              <div className="space-y-4 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="font-medium">
                    {post.location.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Wallet className="w-4 h-4 text-slate-400" />
                  <span className="font-medium">{post.budget}</span>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-slate-400 mt-0.5" />
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to={`/tuitions/${post._id}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white py-2.5 text-sm font-medium hover:bg-indigo-600 transition-colors duration-300"
              >
                View Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center p-5">
          <Link
            to={"/tuitions"}
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-border font-semibold transition-all hover:bg-green-100 hover:border-primary/30"
          >
            View All Tuitions →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RecentPostsSection;
