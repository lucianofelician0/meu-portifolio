import { experiences } from "@/data";
import { ExperienceComponent } from "@/components/ui/ExperienceComponents";

const { frontEnd, backEnd } = experiences;
const titles: string[] = ["Frontend Development", "Backend Development"];

export const Experience = () => {
  const [front, back] = titles;

  return (
    <section className="w-full md:w-[70%] justify-between items-center md:flex-row mx-auto">
      <div className="flex flex-col  justify-evenly  items-center md:flex-row">
        <div className="border rounded-lg border-gray-300 m-1">
          <ExperienceComponent contents={frontEnd} experienceTitle={front} />
        </div>
        <div className="border rounded-lg border-gray-300 m-1">
          <ExperienceComponent contents={backEnd} experienceTitle={back} />
        </div>
      </div>
    </section>
  );
};
