import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Sobre from "./components/Sobre";
import Bandas from "./components/Bandas";
import Ajude from "./components/Ajude";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink font-body text-bone antialiased">
      {/* Textura de filme/grão sobre todo o site */}
      <div className="grain-overlay" aria-hidden />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Sobre />
        <Bandas />
        <Ajude />
        <Marquee reverse />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
