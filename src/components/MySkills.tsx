import { Titlies } from "./ui/Titlies";
import { navItems } from "@/data";
import webIcon from "@/assets/icons/web-icon.png";
import mobileIcon from "@/assets/icons/mobile-icon.png"
import uiIcon from "@/assets/icons/ui-icon.png"
import graphicIcon from "@/assets/icons/graphics-icon.png"
import {MyTools} from "./MyTools";

export default function MySkills() {
  let [, Skills] = navItems;
  const services = [
    {
      name: "Web design",
      icon: webIcon,
      description: "Web development is the process of building, programming...",
      link: "#",
    },
    {
      name: "Mobile app",
      icon: mobileIcon,
      description: "Web development is the process of building, programming...",
      link: "#",
    },
    {
      name: "UI/ UX design",
      icon: uiIcon,
      description: "Web development is the process of building, programming...",
      link: "#",
    },
    {
      name: "Graphics design",
      icon:graphicIcon,
      description: "Web development is the process of building, programming...",
      link: "#",
    },
  ];
  return (
    <section className="w-full md:w-[70%] mx-auto">
      <Titlies info={Skills} />
      <div id="services" className="w-full  py-10 scroll-mt-20">
        <div className="grid grid-cols-4 gap-4 my-10">
          {services.map((service) => (
            <div
              key={service.name}
              className="border border-gray-300  dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <img src={service.icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {service.description}
              </p>
              <a
                href={service.link}
                className="flex items-center gap-2 text-sm mt-5"
              >
                Read more{" "}
                <img src="./assets/right-arrow.png" alt="" className="w-4" />
              </a>
            </div>
          ))}
        </div>
        <MyTools />
      </div>
    </section>
  );
}
