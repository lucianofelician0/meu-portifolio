import { experiences } from "@/data";
import { ExperienceComponent } from "@/components/ui/ExperienceComponents";
import { Titlies } from "../ui/Titlies";

const { frontEnd, backEnd } = experiences;
const titles: string[] = ["Desenvolvimento Frontend", "Desenvolvimento Backend"];

export const Experience = () => {
  const [front, back] = titles;

  return (
    <section
      id="experience"
      className="w-full sm:w-[80%] justify-between items-center md:flex-row mx-auto mb-4"
    >
      <div className="pb-8">
        <Titlies info="Experiência" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mx-4 mb-4">
        <div className="border rounded-lg border-gray-300">
          <ExperienceComponent contents={frontEnd} experienceTitle={front} />
        </div>
        <div className="border rounded-lg border-gray-300">
          <ExperienceComponent contents={backEnd} experienceTitle={back} />
        </div>
      </div>
    </section>
  );
};
