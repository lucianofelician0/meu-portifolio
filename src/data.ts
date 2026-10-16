import experienceIcon from "@/assets/icons/checkmark.png"

export const navItems: string[] = ['Projects', 'Skills', 'Experience', 'About me', 'Contact'];
interface Tech {
    name: string;
    icons: string;
    level: "Básico" | "Intermédio" | "Avançado"; // Define os níveis permitidos
}

interface ExperienceType{
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
        { name: "Mongo Db", icons: experienceIcon, level: "Básico" }
    ]
};



