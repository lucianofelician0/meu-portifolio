import experienceIcon from "@/assets/icons/checkmark.png"

interface NavItemsType{
    name: string;
    toId: string;
}

export const navItems: NavItemsType[] = [
  { name: 'Projects', toId: 'projects' },
  { name: 'Skills', toId: 'skills' },
  { name: 'Experience', toId: 'experience' },
  { name: 'About', toId: 'about' },
  { name: 'Contact', toId: 'contact' }
] 
 export interface Tech {
    name: string;
    icons: string;
    level: "Básico" | "Intermédio" | "Avançado"; // Define os níveis permitidos
}

export interface ExperienceType{
    frontEnd:Tech[],
    backEnd: Tech[]
}
export const experiences: ExperienceType = {
    frontEnd: [
        { name: "HTML", icons: experienceIcon, level: "Avançado" },
        { name: "CSS", icons: experienceIcon, level: "Avançado" },
        { name: "JavaScript", icons: experienceIcon, level: "Intermédio" },
        { name: "React Js", icons:experienceIcon, level: "Intermédio" },
        { name: "Tailwind CSS", icons: experienceIcon, level: "Intermédio" },
        { name: "ShadCn", icons: experienceIcon, level: "Básico" }
    ],
    backEnd: [
        { name: "Node Js", icons: experienceIcon, level: "Intermédio" },
        { name: "Express Js", icons: experienceIcon, level: "Intermédio" },
        { name: "MySql", icons: experienceIcon, level: "Intermédio" },
        { name: "Mongo Db", icons: experienceIcon, level: "Básico" },
        { name: "Next Js", icons: experienceIcon, level: "Básico" },
        { name: "PostMans", icons: experienceIcon, level: "Básico" }
    ]
};



