import { Titlies } from "./ui/Titlies";
import { navItems } from "@/data";
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
      icon: graphicIcon,
      description: "Web development is the process of building, programming...",
      link: "#",
    },
  ];
  return (
    <section className="w-full  md:w-[70%] mx-auto">
      <Titlies info={Skills} />
      <div className="  mt-3  mx-4">
        <div className="grid   items-center md:grid-cols-4 gap-4 my-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg border-gray-300 p-6 mx-1 dark:border-white/30  hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <img src={service.icon} alt="" className="w-10" />
              <h3 className="py-2 font-medium text-left">{service.name}</h3>
              <p className="text-sm font-extralight pb-2">
                {service.description}
              </p>
              <a
                href={service.link}
                className="flex items-center gap-2 text-sm mt-5"
              >
                Read more{" "}
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
