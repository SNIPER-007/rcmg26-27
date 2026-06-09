import PageTransition from "../components/animations/PageTransition";

export default function Achievements() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-8 py-32">
        <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
          Our Journey
        </p>

        <h1 className="mt-4 text-6xl font-bold text-[#0f172a]">
          Achievements
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          Celebrating milestones, recognitions, awards and impactful
          initiatives achieved by RCMG over the years.
        </p>
      </div>
    </PageTransition>
  );
}