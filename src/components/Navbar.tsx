import React from "react";
import { Menu, X, ArrowRight, LogIn } from "lucide-react";
import { Link as ScroolLink } from "react-scroll";
import { Link } from "react-router";
import { navItems } from "@/data";

// Estilo dos links: "Projetos" fica em destaque. No menu móvel (fundo laranja) o texto é mais escuro para ser legível.
const linkClass = (toId: string, mobile = false) =>
  `px-4 cursor-pointer py-1.5 rounded-full text-sm transition-colors ${toId === "projects" ? "bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600" : mobile ? "text-zinc-900 hover:text-zinc-700" : "text-zinc-500 hover:text-zinc-400"}`;

// Ícone de entrar que leva ao painel admin
const AdminLink = ({ onClick }: { onClick?: () => void }) => (
  <Link
    to="/admin"
    onClick={onClick}
    aria-label="Entrar no painel"
    title="Entrar no painel"
    className="size-11 shrink-0 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-colors"
  >
    <LogIn size={18} strokeWidth={2.25} />
  </Link>
);

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const getInTouch = "contact";
  const idHero = "hero";
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed right-0 left-0 h-18 px-4 bg-white/20 backdrop-blur-sm border border-white/20 shadow-2xs flex items-center justify-between lg:justify-around z-100 ">
        <div>
          <ScroolLink
            to={idHero}
            smooth={true}
            duration={500}
            offset={-66}
            onClick={closeMenu}
            className="text-2xl sm:text-3xl font-honk font-bold cursor-pointer"
          >
            Feluciano
            <span className="text-red-600 text-2xl font-extrabold">.</span>
          </ScroolLink>
        </div>

        <div className="hidden lg:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-1 xl:gap-2">
          {navItems.map((item) => (
            <ScroolLink
              key={item.toId}
              to={item.toId} // O ID exato da secção para onde quer ir
              smooth={true} // Ativa o scroll suave automático
              duration={500} // Tempo da animação em milissegundos (0.5s)
              offset={-64} // O SEGREDO: Desconta os 64px (h-16) da sua Navbar!
              className={linkClass(item.toId)}
            >
              {item.name}
            </ScroolLink>
          ))}
        </div>
        {/* BUTAO GET IN TOUCH + ENTRAR */}
        <div className="hidden lg:flex items-center gap-3">
          <ScroolLink
            to={getInTouch}
            smooth={true}
            duration={500}
            offset={-66}
            className="inline-flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0"
          >
            Fale comigo
            <span className="size-7 rounded-full bg-white flex items-center justify-center">
              <ArrowRight size={14} className="text-zinc-700" strokeWidth={2.5} />
            </span>
          </ScroolLink>
          <AdminLink />
        </div>
        {/* FIM BUTAO GET IN TOUCH  */}

        {/* ICON MENU PARA DISPLAY MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="lg:hidden cursor-pointer text-zinc-800 p-1"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* FIM DO ICON DE DE MUN DISPLAY MOBILE  */}

        {/* THIS THE SET OF HUMBURGUER MENU  */}
        {menuOpen && (
          <div className="absolute top-full rounded-b-lg bg-amber-500 left-0 w-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto flex flex-col p-6 gap-1 lg:hidden z-50">
            {navItems.map((item) => (
              <ScroolLink
                key={item.toId}
                to={item.toId}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={closeMenu}
                className={linkClass(item.toId, true)}
              >
                {item.name}
              </ScroolLink>
            ))}
            <ScroolLink
              to={getInTouch}
              smooth={true}
              duration={500}
              offset={-66}
              onClick={closeMenu}
              className="flex items-center w-full justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer mt-3"
            >
              Fale comigo
              <span className="size-7 rounded-full bg-white flex items-center justify-center">
                <ArrowRight size={14} className="text-zinc-700" strokeWidth={2.5} />
              </span>
            </ScroolLink>
            <div className="flex justify-center mt-3">
              <AdminLink onClick={closeMenu} />
            </div>
          </div>
        )}

        {/* THE END OF THE HUMBURGUER MENU  */}
      </nav>
    </>
  );
};
