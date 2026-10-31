import { Titlies } from "@/components/ui/Titlies";
import  {navItems}  from "@/data"
import webIcon from "@/assets/icons/web-icon.png";
import mobileIcon from "@/assets/icons/mobile-icon.png";
import uiIcon from "@/assets/icons/ui-icon.png";
import graphicIcon from "@/assets/icons/graphics-icon.png";

export default function MySkills() {
  let [, Skills] = navItems;
 const services = [
  {
    name: "Web design",
    icon: webIcon,
    description: "Criação de layouts modernos, intuitivos e responsivos, focados na identidade visual da sua marca e na melhor experiência digital para os utilizadores.",
    link: "#",
  },
  {
    name: "Aplicações móveis",
    icon: mobileIcon,
    description: "Desenvolvimento de aplicações móveis personalizadas para iOS e Android, com alto desempenho, fluidez e funcionalidades à medida do seu negócio.",
    link: "#",
  },
  {
    name: "Design UI/UX",
    icon: uiIcon,
    description: "Desenho de interfaces amigáveis (UI) aliado ao estudo da jornada do utilizador (UX), para que o seu produto seja atrativo, eficiente e intuitivo.",
    link: "#",
  },
  {
    name: "Design gráfico",
    icon: graphicIcon,
    description: "Criação de materiais visuais de alto impacto, como logótipos, identidades corporativas e recursos digitais que comunicam com clareza o valor do seu negócio.",
    link: "#",
  },
];

  return (
    <section id="skills" className="w-full  md:w-[80%] mx-auto">
      <Titlies info={Skills.name} />
      <div className="  mt-3  mx-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border lg:min-h-75 rounded-lg border-gray-300 p-6 dark:border-white/30  hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <img src={service.icon} alt="" className="w-10" />
              <h3 className="py-2 font-medium text-left">{service.name}</h3>
              <p className="text-sm font-extralight pb-2">
                {service.description}
              </p>
              <a
                href={service.link}
                className=" items-center gap-2 text-sm mt-5 hidden"
              >
                Saber mais{" "}
                <img src="./assets/right-arrow.png" alt="" className="w-4" />
              </a>
              <hr className="py-2" />
            </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}
