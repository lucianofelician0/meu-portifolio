import React from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link as ScroolLink } from "react-scroll";
// import { Link } from "react-router";
import { navItems } from "@/data";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  let getInTouch = navItems[4].toId;
  let idHero = "hero";

  return (
    <>
      <nav className="fixed right-0 left-0 h-18 px-4 bg-white/20 backdrop-blur-sm border border-white/20 shadow-2xs flex items-center justify-between md:justify-around z-100 ">
        <div>
          <ScroolLink
            to={idHero}
            smooth={true}
            duration={500}
            offset={-66}
            className="text-3xl font-honk font-bold cursor-pointer"
          >
            Fluciano
            <span className="text-red-600 text-2xl font-extrabold">.</span>
          </ScroolLink>
        </div>

        <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
          {navItems.map((item, index) => (
            <ScroolLink
              key={index}
              to={item.toId} // O ID exato da secção para onde quer ir
              smooth={true} // Ativa o scroll suave automático
              duration={500} // Tempo da animação em milissegundos (0.5s)
              offset={-64} // O SEGREDO: Desconta os 64px (h-16) da sua Navbar!
              className={`px-4 cursor-pointer  py-1.5 rounded-full text-sm transition-colors ${item.name === "Projects" ? "bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600" : "text-zinc-500 hover:text-zinc-400"}`}
            >
              {item.name}
            </ScroolLink>
          ))}
        </div>
        {/* BUTAO GET IN TOUCH */}
        <ScroolLink
          to={getInTouch}
          smooth={true}
          duration={500}
          offset={-66}
          // Repare que todas as classes do botão vieram para cá:
          className="hidden md:inline-flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0"
        >
          Get in touch
          <span className="size-7 rounded-full bg-white flex items-center justify-center">
            {/* Substituímos o SVG complexo por um ícone limpo do Lucide */}
            <ArrowRight size={14} className="text-zinc-700" strokeWidth={2.5} />
          </span>
        </ScroolLink>
        {/* FIM BUTAO GET IN TOUCH  */}

        {/* ICON MENU PARA DISPLAY MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer text-zinc-800 p-1"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
         {/* FIM DO ICON DE DE MUN DISPLAY MOBILE  */}
   
      {/* THIS THE SET OF HUMBURGUER MENU  */}
        {menuOpen && (
          <div className="absolute top-full rounded-b-lg  bg-amber-500 left-0 w-full flex flex-col p-6 gap-1 md:hidden z-50">
            {navItems.map((item) => (
              <ScroolLink
                key={item.name}
                to={item.toId} // O ID exato da secção para onde quer ir
                smooth={true} // Ativa o scroll suave automático
                duration={500} // Tempo da animação em milissegundos (0.5s)
                offset={-64} // O SEGREDO: Desconta os 64px (h-16) da sua Navbar!
                className={`px-4 cursor-pointer  py-1.5 rounded-full text-sm transition-colors ${item.name === "Projects" ? "bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600" : "text-zinc-500 hover:text-zinc-400"}`}
              >
                {item.name}
              </ScroolLink>
            ))}
            <button className="flex items-center w-full justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer border-0 mt-3 ">
              <ScroolLink
                smooth={true}
                duration={500}
                offset={-66}
                to={getInTouch}
              >
                Get in touch
              </ScroolLink>
              <span className="size-7 rounded-full bg-white flex items-center justify-center">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.6 4.602h10m-4-4 4 4-4 4"
                    stroke="#3f3f47"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}

        {/* THE END OF THE HUMBURGUER MENU  */}
      </nav>
    </>
  );
};
