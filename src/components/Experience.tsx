import { experiences } from "@/data";
export const Experience = () => {
  return (
    <section className="w-full md:w-[70%] flex justify-center gap-20 mx-auto pb-6">
      <div className="flex justify-center ">
        <div className="border  border-gray-300 dark:border-white/30 rounded-2xl p-5 ">
          <h2 className="font-honk font-extralight text-2xl text-center pb-6">
            Frontend Development
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {experiences.frontEnd.map((experience, index) => {
              return (
                <div key={index} className="flex gap-4 ">
                  <img src={experience.icons} width={50} alt="icon" />
                  <div>
                    <h3 className="font-bold">{experience.name}</h3>
                    <p className="font-light text-lg text-center">
                      {experience.level}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="border  border-gray-300 dark:border-white/30 rounded-2xl p-5 ">
          <h2 className="font-honk font-extralight text-2xl text-center pb-6">
            Backend Development
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {experiences.backEnd.map((experience, index) => {
              return (
                <div key={index} className="flex gap-4 ">
                  <img src={experience.icons} width={50} alt="icon" />
                  <div>
                    <h3 className="font-bold">{experience.name}</h3>
                    <p className="font-light text-lg text-center">
                      {experience.level}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
