import PageTransition from "../components/animations/PageTransition";

export default function GetInvolved() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-8 py-32">
        <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
          Join Us
        </p>

        <h1 className="mt-4 text-6xl font-bold text-[#0f172a]">
          Get Involved
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          Become a part of a vibrant community of young leaders dedicated
          to service, fellowship, leadership and personal growth.
        </p>

        <button
          className="
            mt-10
            px-8
            py-4
            rounded-full
            bg-[#0f172a]
            text-white
            hover:scale-105
            transition
          "
        >
          Join RCMG
        </button>
      </div>
    </PageTransition>
  );
}