import gitIcon from "@/assets/icons/git.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import figmaIcon from "@/assets/icons/figma.png";
import fireBase from "@/assets/icons/firebase.png";
import mongoDB from "@/assets/icons/mongodb.png";

let toolsIcons = [
  { name: "Git", icon: gitIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Firebase", icon: fireBase },
  { name: "MongoDB", icon: mongoDB },
];

export const MyTools = () => {
  return (
    <>
      <h2 className="text-xl font-honk text-center font-bold text-gray-700 dark:text-white mb-4">
        My Tools
      </h2>
      <div className="w-full flex flex-wrap border  border-gray-300 dark:border-white/30 rounded-2xl  justify-center items-center gap-10 ">
        {toolsIcons.map((tool, index) => (
          <div
            key={index}
            className="group relative  inline-block p-4 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full justify-center items-center"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
            <span className="hidden absolute w-20 top-full  text-center group-hover:block bg-gray-800 text-white text-xs rounded ">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
