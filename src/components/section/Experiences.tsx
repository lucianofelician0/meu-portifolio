import { experiences } from "@/data";
import { ExperienceComponent } from "@/components/ui/ExperienceComponents";
// import { MyTools } from "@/components/MyTools";

const { frontEnd, backEnd } = experiences;
const titles: string[] = ["Frontend Development", "Backend Development"];

export const Experience = () => {
  const [front, back] = titles;

  return (
    <section id="experience" className="w-full md:w-[70%] justify-between items-center md:flex-row mx-auto mb-4">
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
