import { Flame } from "lucide-react";

const ITENS = [
  "ROCK BENEFICENTE",
  "BELFORD ROXO · RJ",
  "SEM FINS LUCRATIVOS",
  "DOAR É RESISTÊNCIA",
  "APOIE AS BANDAS LOCAIS",
  "FAÇA PARTE COM A GENTE",
  "SUA BANDA OU SUA MARCA PODE APOIAR ESSA CAUSA",
];


export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const faixa = (
    <div
      className={`flex w-max items-center animate-marquee ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      {[0, 1].map((copia) => (
        <div key={copia} className="flex w-max items-center" aria-hidden={copia === 1}>
          {ITENS.map((item) => (
            <span key={`${copia}-${item}`} className="flex items-center">
              <span
                className={`font-head text-sm font-semibold uppercase tracking-[0.35em] md:text-base ${
                  reverse ? "text-ash" : "text-bone"
                }`}
              >
                {item}
              </span>
              <Flame
                className={`mx-7 h-4 w-4 shrink-0 md:mx-9 ${
                  reverse ? "text-blood/70" : "text-flame"
                }`}
                strokeWidth={2.2}
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`relative z-10 overflow-hidden py-3.5 md:py-4 ${
        reverse
          ? "rotate-[0.8deg] border-y border-white/8 bg-coal"
          : "animate-flicker -rotate-[1.2deg] scale-x-105 border-y-2 border-black/40 bg-gradient-to-r from-blood via-[#b01515] to-blood shadow-[0_10px_50px_rgba(217,32,39,0.35)]"
      }`}
    >
      {faixa}
    </div>
  );
}
