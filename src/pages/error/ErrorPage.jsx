import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <main className="w-full max-w-2xl text-center">
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-10">
          
          <div className="mb-6">
            <span className="inline-block text-6xl font-extrabold text-slate-900 leading-none">
              404
            </span>
          </div>

          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            Page not found
          </h1>

          <p className="text-sm text-slate-600 mb-6">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2 text-sm font-medium hover:brightness-95 transition"
          >
            Go to Homepage
          </Link>

        </div>
      </main>
    </div>
  );
}
