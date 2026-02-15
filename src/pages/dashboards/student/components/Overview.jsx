import {
  BookOpen,
  Users,
  UserCheck,
  PlusCircle,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function Overview() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "How do I get more tutor applications?",
      content:
        "Make sure your tuition post has clear subject details, realistic budget, and accurate location. More clarity attracts more tutors.",
    },
    {
      title: "When is a tutor considered active?",
      content:
        "A tutor becomes active after you approve the application and complete the payment successfully.",
    },
    {
      title: "Can I edit my tuition after posting?",
      content:
        "Yes, you can update subject, class, location, and budget anytime before approving a tutor.",
    },
  ];

  return (
    <div className="relative space-y-14">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Student Dashboard
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Manage your tuition activity at a glance.
        </p>
      </header>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Tuitions"
          value="12"
          icon={<BookOpen className="text-indigo-600" size={22} />}
        />
        <StatCard
          title="Tutor Applications"
          value="8"
          icon={<Users className="text-blue-600" size={22} />}
        />
        <StatCard
          title="Active Tutors"
          value="3"
          icon={<UserCheck className="text-emerald-600" size={22} />}
        />
      </div>

      {/* Suggestions Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Lightbulb className="text-amber-500" size={20} />
          Smart Suggestions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <SuggestionCard
            title="Increase Budget"
            desc="Higher budgets usually attract more experienced tutors."
          />
          <SuggestionCard
            title="Add More Details"
            desc="Detailed descriptions improve application quality."
          />
          <SuggestionCard
            title="Respond Quickly"
            desc="Faster responses increase your chance to hire better tutors."
          />
        </div>
      </section>

      {/* Accordion Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Helpful Information
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-slate-900">
                  {item.title}
                </span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Need a Tutor?
        </h2>

        <p className="text-slate-500 mb-8 max-w-xl mx-auto">
          Create a new tuition request and start receiving tutor applications instantly.
        </p>

        <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
          <PlusCircle size={18} />
          Post a New Tuition
        </button>
      </div>
    </div>
  );
}

/* Reusable Components */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">
            {value}
          </h2>
        </div>
        <div className="p-3 bg-indigo-100 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

function SuggestionCard({ title, desc }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}
