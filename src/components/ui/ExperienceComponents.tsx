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
      <h2 className="font-honk font-bold text-2xl sm:text-3xl text-center py-6 px-2">
        {experienceTitle}
      </h2>
      <div className="grid grid-cols-2 gap-2 px-3 sm:px-6">
        {contents.map((content, index) => {
          return (
            <div key={index} className="flex items-start gap-2 p-2 min-w-0">
              <img src={content.icons} width={32} alt="" className="shrink-0 sm:w-10" />
              <div className="min-w-0">
                <h3 className="font-bold text-sm sm:text-base wrap-break-word">{content.name}</h3>
                <p className="font-light text-sm sm:text-base">
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
