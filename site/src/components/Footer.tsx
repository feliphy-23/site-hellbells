import { Flame, Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons";
import { CONTATO } from "../data/evento";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-coal/60">
      <div className="bg-fire-top absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {/* Marca */}
          <div className="flex items-center gap-4">
            <img
              src="/images/logo-hellbells.png"
              alt="Hell Bells"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-blood/50"
            />
            <div>
              <p className="font-display text-2xl leading-none text-bone">
                HELL BELLS
              </p>
              <p className="mt-1 font-head text-[0.55rem] font-medium uppercase tracking-[0.4em] text-ember">
                Rock Beneficente · Belford Roxo
              </p>
            </div>
          </div>

          {/* Sociais */}
          <div className="flex items-center gap-3">
            {[
              { icon: InstagramIcon, href: CONTATO.instagram, rotulo: "Instagram" },
              { icon: Mail, href: `mailto:${CONTATO.email}`, rotulo: "E-mail" },
              { icon: MessageCircle, href: CONTATO.whatsapp, rotulo: "WhatsApp" },
            ].map(({ icon: Icon, href, rotulo }) => (
              <a
                key={rotulo}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={rotulo}
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-ash transition-all duration-300 hover:border-blood hover:bg-blood hover:text-white hover:shadow-[0_0_25px_rgba(217,32,39,0.5)]"
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/5 pt-7 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-head text-[0.6rem] font-medium uppercase tracking-[0.25em] text-ash">
            © {ano} Site desenvolvido por <a href="https://www.linkedin.com/in/feliphy/" target="_blank" rel="noreferrer" className="text-ember hover:text-blood transition-colors duration-300">Feliphy</a>
          </p>
          <p className="flex items-center gap-2 font-head text-[0.6rem] font-medium uppercase tracking-[0.25em] text-ash">
            Feito com suor, distorção e solidariedade
            <Flame className="h-3.5 w-3.5 text-ember" />
          </p>
        </div>
      </div>
    </footer>
  );
}
