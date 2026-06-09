import PageTransition from "../components/animations/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-8 py-32">
        <h1 className="text-6xl font-bold">
          About RCMG
        </h1>
      </div>
    </PageTransition>
  );
}