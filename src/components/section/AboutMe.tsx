import { Titlies } from "@/components/ui/Titlies";
import { navItems } from "@/data";

export default function AboutMe() {

 const [ , , , { name } ] = navItems
  return (
    <section id="about" className="w-full md:w-[70%] mx-auto  ">
      <div className="border rounded-lg border-gray-300 mb-5 ">
        <div className=" p-4 md:p-8">
          <Titlies info={name} />

          <p className="text-left mt-4 font-light text-lg p-4 ">
            I’m a full-stack developer passionate about building
            end-to-end digital experiences that are fast, scalable and
            user-focused. With strong expertise in both front-end and back-end
            technologies, I enjoy transforming ideas into fully functional web
            applications that feel seamless and intuitive.
          </p>
          <p className="text-left font-light text-lg p-4">
            Whether it’s crafting responsive interfaces or developing robust
            backend systems, I aim to deliver solutions that are both reliable
            and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}
