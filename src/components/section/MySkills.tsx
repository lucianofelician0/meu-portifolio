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
    description: "Creation of modern, intuitive, and responsive layouts focused on your brand's visual identity and delivering the best digital experience for users.",
    link: "#",
  },
  {
    name: "Mobile app",
    icon: mobileIcon,
    description: "Development of custom mobile applications for iOS and Android, featuring high performance, seamless fluidity, and tailored business functionalities.",
    link: "#",
  },
  {
    name: "UI/ UX design",
    icon: uiIcon,
    description: "Designing user-friendly interfaces (UI) combined with user journey research (UX) to ensure your product is attractive, efficient, and intuitive.",
    link: "#",
  },
  {
    name: "Graphics design",
    icon: graphicIcon,
    description: "Creation of high-impact visual materials, such as logos, corporate identities, and digital assets that clearly communicate your business value.",
    link: "#",
  },
];

  return (
    <section id="skills" className="w-full  md:w-[80%] mx-auto">
      <Titlies info={Skills.name} />
      <div className="  mt-3  mx-4">
        <div className="grid  place-items-center sm:grid-cols-2 lg:grid-cols-4  gap-2 my-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border min-h-75 rounded-lg border-gray-300 p-6 mx-1 dark:border-white/30  hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
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
