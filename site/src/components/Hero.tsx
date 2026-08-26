import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ChevronDown, Flame, MapPin } from "lucide-react";
import Embers from "./Embers";
import { PROXIMO_EVENTO } from "../data/evento";

const easing = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTitulo = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacidade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const escalaBg = useTransform(scrollYProgress, [0, 1], [1.08, 1.25]);

  return (
    <section
      id="topo"
      ref={ref}
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Fundo — multidão em show com luz vermelha */}
      <motion.div style={{ scale: escalaBg }} className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-55"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/35 to-ink" />
      <div className="bg-fire-floor absolute inset-0" />
      <Embers density={60} />

      {/* Conteúdo */}
      <motion.div
        style={{ y: yTitulo, opacity: opacidade }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-24 pt-32 text-center"
      >
        {/* Emblema */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: easing }}
          className="relative mb-6 md:mb-8"
        >
          <div className="absolute inset-0 scale-150 rounded-full bg-blood/35 blur-3xl" />
          <img
            src="./images/logo-hellbells.png"
            alt="Emblema Hell Bells"
            className="animate-floaty relative h-36 w-36 rounded-full object-cover ring-2 ring-blood/40 md:h-48 md:w-48"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: easing }}
          className="font-head text-[0.65rem] font-medium uppercase tracking-[0.6em] text-ember md:text-xs"
        >
          Belford Roxo apresenta
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: easing }}
          className="glow-fire mt-3 -rotate-1 font-display text-[clamp(4.2rem,15vw,12rem)] leading-[0.85] text-bone"
        >
          HELL BELLS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: easing }}
          className="mt-4 font-head text-sm font-semibold uppercase tracking-[0.5em] text-blood md:text-lg"
        >
          Rock Beneficente
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: easing }}
          className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-ash md:text-base"
        >
          O rock que sacode a cidade e alimenta quem precisa. Um evento sem
          fins lucrativos onde cada riff vira doação — alimentos, roupas,
          produtos e brindes para a nossa comunidade.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easing }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#ajude"
            className="group relative overflow-hidden bg-blood px-9 py-4 font-head text-xs font-bold uppercase tracking-[0.25em] text-white shadow-[0_0_35px_rgba(217,32,39,0.45)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(255,107,53,0.6)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Quero ajudar
          </a>
          <a
            href="#lineup"
            className="border border-bone/25 px-9 py-4 font-head text-xs font-bold uppercase tracking-[0.25em] text-bone transition-all duration-300 hover:border-blood hover:text-blood"
          >
            Ver line-up
          </a>
        </motion.div>

        {/* Fichas de informação */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-head text-[0.65rem] font-medium uppercase tracking-[0.25em] text-ash md:text-xs"
        >
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-ember" />
            {PROXIMO_EVENTO.local}
          </span>
          <span className="flex items-center gap-2">
            <Flame className="h-3.5 w-3.5 text-ember" />
            100% beneficente
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-ember" />
            Próxima edição: {PROXIMO_EVENTO.data}
          </span>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-ash transition-colors hover:text-blood"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
