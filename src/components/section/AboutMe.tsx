import { Titlies } from "@/components/ui/Titlies";
import { navItems } from "@/data";
// import {MyTools} from "@/components/MyTools";

export default function AboutMe() {

 const [ , , , { name } ] = navItems
  return (
    <section id="about" className="w-full sm:w-[80%] mx-auto  ">
      <div className="border rounded-lg border-gray-300 mb-5 m-4">
        <div className=" p-4 md:p-8">
          <Titlies info={name} />

          <p className="text-left mt-4 font-light text-base sm:text-lg p-2 sm:p-4">
            Sou um desenvolvedor full stack apaixonado por construir
            experiências digitais completas, rápidas, escaláveis e centradas no
            utilizador. Com sólidos conhecimentos em tecnologias de front-end e
            back-end, gosto de transformar ideias em aplicações web totalmente
            funcionais, fluidas e intuitivas.
          </p>
          <p className="text-left font-light text-base sm:text-lg p-2 sm:p-4">
            Seja a criar interfaces responsivas ou a desenvolver sistemas
            back-end robustos, o meu objetivo é entregar soluções fiáveis e com
            impacto real.
          </p>
        </div>
      </div>
     
    </section>
  );
}
