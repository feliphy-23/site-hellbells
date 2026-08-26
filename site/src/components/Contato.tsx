import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUpRight as Arrow, Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons";
import Embers from "./Embers";
import { CONTATO } from "../data/evento";

const easing = [0.22, 1, 0.36, 1] as const;

const CANAIS = [
  {
    icon: InstagramIcon,
    titulo: "Instagram",
    valor: CONTATO.instagramUser,
    desc: "Novidades, datas, fotos das edições e a maneira mais rápida de falar com a gente.",
    cta: "Seguir / mandar DM",
    href: CONTATO.instagram,
  },
  {
    icon: Mail,
    titulo: "E-mail",
    valor: CONTATO.email,
    desc: "Propostas de parceria, imprensa, orçamentos e tudo que precisar de mais detalhe.",
    cta: "Enviar e-mail",
    href: `mailto:${CONTATO.email}`,
  },
  {
    icon: MessageCircle,
    titulo: "WhatsApp",
    valor: CONTATO.whatsappRotulo,
    desc: "Entre no grupo da comunidade: avisos de edição, ponto de encontro das doações e backstage do evento.",
    cta: "Entrar no grupo",
    href: CONTATO.whatsapp,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-36">
      <div className="bg-fire-floor absolute inset-0 opacity-70" />
      <Embers density={30} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: easing }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <p className="flex items-center justify-center gap-3 font-head text-xs font-semibold uppercase tracking-[0.4em] text-ember">
            <span className="h-px w-10 bg-blood" />
            Bora conversar
            <span className="h-px w-10 bg-blood" />
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] text-bone md:text-7xl">
            FALE COM <span className="glow-fire text-blood">A GENTE</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ash md:text-base">
            Quer doar, ser parceiro, levar sua banda ao palco ou só trocar uma
            ideia sobre rock? Escolhe o canal:
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {CANAIS.map((canal, i) => {
            const Icon = canal.icon;
            return (
              <motion.a
                key={canal.titulo}
                href={canal.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.1 * i, duration: 0.8, ease: easing }}
                className="group relative flex flex-col overflow-hidden border border-white/8 bg-coal/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blood/50 hover:shadow-[0_25px_70px_rgba(217,32,39,0.22)]"
              >
                <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-ash transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center border border-blood/40 bg-blood/10 text-blood transition-all duration-500 group-hover:scale-110 group-hover:bg-blood group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <p className="font-head text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-ember">
                  {canal.titulo}
                </p>
                <p className="mt-2 break-words font-head text-lg font-semibold tracking-wide text-bone">
                  {canal.valor}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
                  {canal.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-head text-xs font-bold uppercase tracking-[0.22em] text-bone transition-colors group-hover:text-ember">
                  {canal.cta}
                  <Arrow className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 text-center font-head text-[0.65rem] font-medium uppercase tracking-[0.3em] text-ash"
        >
          Respondemos mais rápido pelo Instagram e pelo WhatsApp
        </motion.p>
      </div>
    </section>
  );
}
