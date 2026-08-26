import { motion } from "framer-motion";
import { Bell, Flame, HeartHandshake, MapPin } from "lucide-react";
import { NUMEROS, PROXIMO_EVENTO } from "../data/evento";

const easing = [0.22, 1, 0.36, 1] as const;

const CAUSAS = [
  "Alimentos não perecíveis",
  "Roupas e agasalhos",
  "Produtos para doação",
  "Brindes para sorteio",
  "Parcerias",
];

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-36">
      <div className="bg-fire-top absolute inset-0" />

      {/* Marca d'água gigante */}
      <span
        aria-hidden
        className="text-stroke-bone pointer-events-none absolute -right-8 top-10 hidden select-none font-display text-[11rem] leading-none opacity-40 lg:block"
      >
        HELL
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: easing }}
          className="relative"
        >
          <div className="absolute -inset-3 rotate-[-1.5deg] border-2 border-blood/40" />
          <div className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-ember" />
          <div className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-ember" />
          <img
            src="./images/sobre.jpg"
            alt="Mesa de doações do Hell Bells: alimentos, roupas e produtos arrecadados no evento"
            className="relative aspect-[4/3] w-full object-cover shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          />
          <div className="absolute -bottom-6 right-6 rotate-[3deg] bg-blood px-5 py-2.5 font-head text-xs font-bold uppercase tracking-[0.25em] text-white shadow-[0_10px_35px_rgba(217,32,39,0.5)]">
            Tudo vira doação
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: easing }}
        >
          <p className="flex items-center gap-3 font-head text-xs font-semibold uppercase tracking-[0.4em] text-ember">
            <span className="h-px w-10 bg-blood" />
            O manifesto
          </p>

          <h2 className="mt-5 font-display text-5xl leading-[0.95] text-bone md:text-7xl">
            MAIS QUE UM SHOW,
            <span className="glow-fire block text-blood">UM ATO DE ROCK SOLIDÁRIO</span>
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-relaxed text-ash md:text-base">
            <p>
              O{" "}
              <strong className="font-semibold text-bone">Hell Bells</strong> é
              um evento de rock beneficente nascido em{" "}
              <strong className="font-semibold text-bone">Belford Roxo</strong>.
              Cada edição acontece em um lugar diferente da cidade — do bar do
              bairro ao galpão — sempre com o mesmo propósito:{" "}
              <strong className="font-semibold text-bone">
                transformar som alto em solidariedade
              </strong>
              .
            </p>
            <p>
              Somos um evento{" "}
              <strong className="font-semibold text-bone">
                sem fins lucrativos
              </strong>
              . Tudo o que entra é doado: alimentos não perecíveis, roupas e
              produtos seguem direto para quem mais precisa, e os brindes
              arrecadados voltam para o público em sorteios durante a noite.
            </p>
            <p className="border-l-2 border-blood pl-4 text-bone/85">
              A gente sobe o volume pra derrubar a fome. Rock pesado, coração
              leve — e a comunidade inteira junta no mesmo riff.
            </p>
          </div>

          {/* Causas */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {CAUSAS.map((causa) => (
              <span
                key={causa}
                className="flex items-center gap-2 border border-white/10 bg-coal/60 px-3.5 py-2 font-head text-[0.65rem] font-medium uppercase tracking-[0.18em] text-bone/80 transition-colors hover:border-blood/50 hover:text-bone"
              >
                <Flame className="h-3 w-3 text-ember" />
                {causa}
              </span>
            ))}
          </div>

          {/* Números */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {NUMEROS.map((n, i) => (
              <motion.div
                key={n.rotulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.7, ease: easing }}
              >
                <p className="font-display text-4xl text-ember md:text-5xl">
                  {n.valor}
                </p>
                <p className="mt-1 font-head text-[0.6rem] font-medium uppercase tracking-[0.2em] text-ash md:text-xs">
                  {n.rotulo}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Próximo evento */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border border-white/10 bg-coal/40 p-5">
            <Bell className="h-5 w-5 shrink-0 text-blood" />
            <p className="text-xs leading-relaxed text-ash md:text-sm">
              <span className="font-head font-semibold uppercase tracking-[0.2em] text-bone">
                Próxima edição: {PROXIMO_EVENTO.data}
              </span>
              <br />
              {PROXIMO_EVENTO.aviso}{" "}
              <MapPin className="inline h-3.5 w-3.5 text-ember" />{" "}
              {PROXIMO_EVENTO.local}
            </p>
            <HeartHandshake className="ml-auto hidden h-5 w-5 text-blood/60 sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
