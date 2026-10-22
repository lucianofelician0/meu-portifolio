import { experiences } from "@/data";
import { ExperienceComponent } from "@/components/ui/ExperienceComponents";
import { Titlies } from "../ui/Titlies";

const { frontEnd, backEnd } = experiences;
const titles: string[] = ["Frontend Development", "Backend Development"];

export const Experience = () => {
  const [front, back] = titles;

  return (
    <section
      id="experience"
      className="w-full sm:w-[80%] justify-between items-center md:flex-row mx-auto mb-4"
    >
      <div className="pb-8">
        <Titlies info="Experience" />
      </div>
      <div className="flex flex-col  justify-evenly  items-center md:flex-row mb-4">
        <div className="border rounded-lg border-gray-300 mx-4 mb-4">
          <ExperienceComponent contents={frontEnd} experienceTitle={front} />
        </div>
        <div className="border rounded-lg border-gray-300 mx-4 mb-4">
          <ExperienceComponent contents={backEnd} experienceTitle={back} />
        </div>
      </div>
    </section>
  );
};
