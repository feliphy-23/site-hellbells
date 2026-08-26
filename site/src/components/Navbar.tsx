import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "./icons";
import { CONTATO } from "../data/evento";

const LINKS = [
  { rotulo: "O Evento", href: "#sobre" },
  { rotulo: "Line-up", href: "#lineup" },
  { rotulo: "Como Ajudar", href: "#ajude" },
  { rotulo: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-ink/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#topo" className="group flex items-center gap-3">
            <img
              src="./images/logo-hellbells.png"
              alt="Hell Bells — Rock Beneficente"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-blood/50 transition-transform duration-500 group-hover:rotate-6"
            />
            <span className="leading-none">
              <span className="block font-display text-xl tracking-wide text-bone md:text-2xl">
                HELL BELLS
              </span>
              <span className="block font-head text-[0.55rem] font-medium uppercase tracking-[0.42em] text-ember">
                Rock Beneficente
              </span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-head text-xs font-semibold uppercase tracking-[0.28em] text-ash transition-colors hover:text-bone"
              >
                {link.rotulo}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-blood transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={CONTATO.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-blood/60 bg-blood/10 px-4 py-2 font-head text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-all duration-300 hover:bg-blood hover:shadow-[0_0_25px_rgba(217,32,39,0.5)]"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Instagram
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setAberto(!aberto)}
            className="p-2 text-bone lg:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          >
            {aberto ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </header>

      {/* Menu mobile em tela cheia */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-ink/97 backdrop-blur-lg lg:hidden"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setAberto(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
                className="font-display text-4xl text-bone transition-colors hover:text-blood sm:text-5xl"
              >
                {link.rotulo}
              </motion.a>
            ))}
            <motion.a
              href={CONTATO.instagram}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-6 flex items-center gap-2 border border-blood/60 px-6 py-3 font-head text-xs font-semibold uppercase tracking-[0.25em] text-ember"
            >
              <InstagramIcon className="h-4 w-4" />
              {CONTATO.instagramUser}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
