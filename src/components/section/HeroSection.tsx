import { Avatar } from "../ui/Avatar";
import avatarImg from "@/assets/img/foto.jpg";
import cvDonwload from "@/cv/curriculo.pdf";
import { MyTools } from "@/components/MyTools";
import { Download } from 'lucide-react';
import { Link as ScroolLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-28 pb-8 md:min-h-screen md:mx-8 flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Avatar img={avatarImg} />
        </div>
        <div className="py-5 max-w-xl mx-auto">
          <h1 className="font-poppins text-xl sm:text-2xl text-center pb-4 px-4 leading-tight">
            Sou o <span className="text-green-900 font-bold">Luciano</span>, um
            Desenvolvedor Full Stack apaixonado por criar experiências web
            bonitas e funcionais.
          </h1>
          <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-4 mx-4">
            <ScroolLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-64}
              className="bg-zinc-900 hover:bg-zinc-800 text-white text-center px-6 py-2.5 rounded-sm text-sm transition cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                  Ver projetos
                </span>
                <span className="absolute top-0 left-0 w-full block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                  Vamos começar
                </span>
              </div>
            </ScroolLink>

            <a
              href={cvDonwload}
              download={"cv luciano"}
              className="flex justify-center gap-4 items-center border border-zinc-200 text-sm py-2.5 px-6 text-black rounded-sm hover:scale-105 transition duration-300 active:scale-100 cursor-pointer"
            >
              <span>Baixar o meu CV</span> <Download size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <MyTools />
      </div>
    </section>
  );
}
