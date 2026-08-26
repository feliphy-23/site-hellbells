import { motion } from "framer-motion";
import {
  Gift,
  HandCoins,
  Handshake,
  MessageCircle,
  Package,
  Shirt,
  UtensilsCrossed,
} from "lucide-react";
import { CONTATO } from "../data/evento";

const easing = [0.22, 1, 0.36, 1] as const;

const FORMAS = [
  {
    icon: UtensilsCrossed,
    titulo: "Alimentos não perecíveis",
    texto:
      "Arroz, feijão, macarrão, óleo, enlatados... cada quilo arrecadado vira cesta básica para famílias da nossa comunidade.",
  },
  {
    icon: Shirt,
    titulo: "Roupas e agasalhos",
    texto:
      "Roupas, calçados, cobertores e agasalhos em bom estado. O que não serve mais pra você. aquece e veste quem precisa.",
  },
  //{
  //  icon: Package,
  //  titulo: "Produtos para doação",
  //  texto:
  //    "Itens de higiene, limpeza e qualquer produto, novo ou usado em bom estado, que possa seguir direto para a doação.",
  //},
  {
    icon: Gift,
    titulo: "Brindes para sorteio",
    texto:
      "Camisetas, discos, canecas, serviços, vale-compras... seus brindes viram prêmios nos sorteios e incendeiam a noite.",
  },
  {
    icon: Handshake,
    titulo: "Parcerias",
    texto:
      "Tem um espaço, som, iluminação, transporte, divulgação ou patrocínio? Parceiros são o motor que mantém o Hell Bells rodando.",
  },
  {
    icon: HandCoins,
    titulo: "Apoie as bandas",
    destaque: true,
    texto:
      "A única doação em dinheiro que aceitamos é destinada única e exclusivamente às bandas que sobem ao palco para animar a noite.",
  },
];

export default function Ajude() {
  return (
    <section id="ajude" className="relative overflow-hidden py-24 md:py-36">
      <div className="bg-fire-floor absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: easing }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <p className="flex items-center justify-center gap-3 font-head text-xs font-semibold uppercase tracking-[0.4em] text-ember">
            <span className="h-px w-10 bg-blood" />
            A doação é o ingresso
            <span className="h-px w-10 bg-blood" />
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] text-bone md:text-7xl">
            COMO <span className="glow-fire text-blood">AJUDAR</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ash md:text-base">
            O Hell Bells não visa lucro. existimos graças a quem doa. Tem
            várias formas de manter essa fogueira acesa:
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FORMAS.map((forma, i) => {
            const Icon = forma.icon;
            return (
              <motion.div
                key={forma.titulo}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.08 * i, duration: 0.8, ease: easing }}
                className={`group relative overflow-hidden border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                  forma.destaque
                    ? "border-ember/50 bg-gradient-to-br from-blood/25 via-coal to-coal shadow-[0_0_50px_rgba(217,32,39,0.18)] hover:shadow-[0_0_70px_rgba(217,32,39,0.35)]"
                    : "border-white/8 bg-coal/50 hover:border-blood/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                }`}
              >
                {forma.destaque && (
                  <span className="absolute right-5 top-5 border border-flame/50 bg-flame/10 px-2.5 py-1 font-head text-[0.55rem] font-bold uppercase tracking-[0.25em] text-flame">
                    Importante
                  </span>
                )}
                <div
                  className={`mb-5 flex h-13 w-13 items-center justify-center border transition-all duration-500 group-hover:scale-110 ${
                    forma.destaque
                      ? "border-ember/60 bg-ember/15 text-flame"
                      : "border-blood/40 bg-blood/10 text-blood group-hover:border-blood group-hover:bg-blood group-hover:text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-head text-lg font-semibold uppercase tracking-[0.12em] text-bone">
                  {forma.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  {forma.texto}
                </p>
                <span className="mt-5 block h-px w-10 bg-blood/50 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="mt-14 flex flex-col items-center justify-between gap-6 border border-white/10 bg-coal/60 p-7 md:flex-row md:p-9"
        >
          <p className="max-w-lg text-center text-sm leading-relaxed text-ash md:text-left md:text-base">
            <span className="font-head font-semibold uppercase tracking-[0.18em] text-bone">
              Quer doar, dar brindes ou ser parceiro?
            </span>
            <br />
            Fala com a gente que combinamos a entrega ou a retirada da sua
            doação.
          </p>
          <a
            href={CONTATO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 bg-blood px-8 py-4 font-head text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_30px_rgba(217,32,39,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,107,53,0.55)]"
          >
            <MessageCircle className="h-4 w-4" />
            Combinar doação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
