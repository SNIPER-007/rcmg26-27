import Navbar from "./Navbar";
import Footer from "./Footer";
import { Spark, RotaryGear } from "../ui/FloatingDecorations";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#0F172A] overflow-hidden">
      {/* Global Background Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#7C3AED]/4 blur-[120px] pointer-events-none animate-blob z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#EC4899]/4 blur-[150px] pointer-events-none animate-blob-delayed z-0" />
      <div className="absolute top-[60%] left-[-15%] w-[450px] h-[450px] rounded-full bg-[#06B6D4]/4 blur-[100px] pointer-events-none animate-blob z-0" />

      {/* Subtle floating vector gear outline in the page background */}
      <RotaryGear className="absolute top-[15%] right-[5%] opacity-[0.02] z-0 pointer-events-none" />
      <RotaryGear className="absolute bottom-[25%] left-[2%] opacity-[0.015] z-0 pointer-events-none scale-150" />
      <Spark className="absolute top-[30%] left-[8%] opacity-[0.03] z-0 pointer-events-none text-[#7C3AED]" />
      <Spark className="absolute bottom-[40%] right-[10%] opacity-[0.03] z-0 pointer-events-none text-[#EC4899]" />

      <Navbar />

      <main className="pt-28 min-h-screen relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}