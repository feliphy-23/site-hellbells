import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons";
import { bandas } from "../data/bandas";
import { CONTATO } from "../data/evento";



const easing = [0.22, 1, 0.36, 1] as const;

export default function Bandas() {
  return (
    <section id="lineup" className="relative overflow-hidden py-24 md:py-36">
      <div className="bg-fire-top absolute inset-0 opacity-70" />

      {/* Marca d'água */}
      <span
        aria-hidden
        className="text-stroke-blood pointer-events-none absolute -left-6 top-8 hidden select-none font-display text-[11rem] leading-none opacity-25 lg:block"
      >
        LIVE
      </span>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: easing }}
          className="mb-16 max-w-3xl md:mb-24"
        >
          <p className="flex items-center gap-3 font-head text-xs font-semibold uppercase tracking-[0.4em] text-ember">
            <span className="h-px w-10 bg-blood" />
            No palco
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] text-bone md:text-7xl">
            LINE-UP <span className="glow-fire text-blood">DA NOITE</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ash md:text-base">
            As bandas que doam seu som e sua energia pra fazer a noite
            acontecer. Siga cada uma no Instagram — o rock da Baixada se faz
            junto com quem toca e quem apoia.
          </p>
        </motion.div>

        {/* Lista de bandas */}
        <div className="space-y-20 md:space-y-28">
          {bandas.map((banda, i) => {
            const invertida = i % 2 === 1;
            return (
              <motion.article
                key={banda.nome}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: easing }}
                className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                {/* Foto */}
                <div
                  className={`relative md:col-span-7 ${
                    invertida ? "md:order-2" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className={`text-stroke-bone pointer-events-none absolute -top-10 z-10 font-display text-7xl opacity-70 md:-top-14 md:text-9xl ${
                      invertida ? "-right-2 md:-right-4" : "-left-2 md:-left-4"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`absolute -inset-2.5 border border-blood/25 transition-all duration-500 group-hover:border-blood/60 ${
                      invertida ? "rotate-[1deg]" : "rotate-[-1deg]"
                    }`}
                  />
                  <div className="relative overflow-hidden">
                    <img
                      src={banda.foto}
                      alt={`Foto da banda ${banda.nome}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover grayscale-[45%] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-40" />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:shadow-[inset_0_0_80px_rgba(217,32,39,0.35)]" />
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`md:col-span-5 ${
                    invertida ? "md:order-1 md:text-right" : ""
                  }`}
                >
                  <p
                    className={`inline-flex items-center gap-2.5 border border-ember/40 bg-ember/5 px-3.5 py-1.5 font-head text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-ember ${
                      invertida ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blood shadow-[0_0_10px_rgba(217,32,39,0.9)]" />
                    {banda.estilo}
                  </p>

                  <h3 className="glow-fire mt-4 font-display text-5xl leading-[0.95] text-bone transition-colors duration-500 group-hover:text-white md:text-6xl">
                    {banda.nome}
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-ash md:text-[0.95rem]">
                    {banda.descricao}
                  </p>

                  <a
                    href={banda.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-7 inline-flex items-center gap-2.5 border border-blood/60 bg-blood/10 px-6 py-3.5 font-head text-xs font-bold uppercase tracking-[0.22em] text-bone transition-all duration-300 hover:bg-blood hover:text-white hover:shadow-[0_0_35px_rgba(217,32,39,0.5)] ${
                      invertida ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Instagram da banda
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Convite para novas bandas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="mt-24 flex flex-col items-center gap-5 border border-dashed border-blood/35 bg-coal/30 px-6 py-10 text-center md:mt-32"
        >
          <p className="font-display text-3xl text-bone md:text-4xl">
            SUA BANDA QUER TOCAR NO HELL BELLS?
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-ash">
            Estamos sempre de ouvidos abertos para novas bandas da cena. Chama
            a gente no WhatsApp ou no Instagram e bora colocar seu som nesse
            palco solidário.
          </p>
          <a
            href={CONTATO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-blood px-7 py-3.5 font-head text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(217,32,39,0.55)]"
          >
            <MessageCircle className="h-4 w-4" />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
