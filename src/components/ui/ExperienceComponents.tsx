import type {Tech} from "@/data"
interface ExperienceProps{
  contents: Tech[],
  experienceTitle: string
}

export const ExperienceComponent = ({contents, experienceTitle }:ExperienceProps) => {

  return (
 
    <div className="border w-[40] border-gray-300 mt-1 dark:border-white/30 rounded-2xl p-6 ">

      {/* Definicao do titulo do component */}
          <h2 className="font-honk font-bold text-3xl text-center pb-8">
            {experienceTitle}
          </h2>
          <div className="grid grid-cols-2  gap-8">
            {contents.map((content, index) => {
              return (
                <div key={index} className="flex justify-center">
                  <img src={content.icons}  alt="icon"  className="w-10 h-10" />
                  <div>
                    <h3 className="font-bold">{content.name}</h3>
                    <p className="font-light text-sm text-center">
                      {content.level}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  )
}
