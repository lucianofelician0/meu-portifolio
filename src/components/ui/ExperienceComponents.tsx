import type { Tech } from "@/data";
interface ExperienceProps {
  contents: Tech[];
  experienceTitle: string;
}

export const ExperienceComponent = ({
  contents,
  experienceTitle,
}: ExperienceProps) => {
  return (
    <div className=" dark:border-white/30 rounded-2xl pb-2 ">
      {/* Definicao do titulo do component */}
      <h2 className="font-honk font-bold text-3xl text-center py-6">
        {experienceTitle}
      </h2>
      <div className="grid grid-cols-2 place-items-center items-center pl-3 ">
        {contents.map((content, index) => {
          return (
            <div key={index} className="flex  items-start  p-2 m-4 w-40">
              <img src={content.icons} width={40} alt="icon" className="" />
              <div>
                <h3 className="font-bold ">{content.name}</h3>
                <p className="font-light ">
                  {content.level}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
