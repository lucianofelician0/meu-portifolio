import gitIcon from "@/assets/icons/git.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import figmaIcon from "@/assets/icons/figma.png";
import fireBase from "@/assets/icons/firebase.png";
import mongoDB from "@/assets/icons/mongodb.png";

let toolsIcons = [
  { name: "VS Code", icon: vscodeIcon },
  { name: "Git", icon: gitIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Firebase", icon: fireBase },
  { name: "MongoDB", icon: mongoDB },
];

export const MyTools = () => {
  return (
    <>
      <div>
        <div className="w-[60%] mx-auto flex flex-col sm:flex-row border mt-4 border-gray-300 dark:border-white/30 rounded-2xl justify-center items-center gap-6 sm:gap-10 p-2">
          {toolsIcons.map((tool, index) => (
            <div
              key={index}
              // Mudámos para 'flex' e adicionámos 'cursor-pointer' (visto que o rato já está bom!)
              className="group relative flex p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full justify-center items-center cursor-pointer transition-colors duration-200"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                // O hover:scale-110 funciona melhor se a transição estiver no estado inicial
                className="w-8 h-8 transform hover:scale-110 transition-transform duration-200"
              />

              {/* TOOLTIP: Corrigido para aparecer centrado abaixo do ícone e com uma margem de topo (mt-2) */}
              <span className="pointer-events-none hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-28 text-center group-hover:block bg-gray-900 text-white text-xs py-1 px-2.5 rounded shadow-lg z-10 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
