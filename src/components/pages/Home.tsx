import {Navbar} from "@/components/Navbar"
import HeroSection from "../HeroSection"
import whatsappIcon from "@/assets/icons/whatsap.png"
import AboutMe from "@/components/AboutMe"
import MySkills from "@/components/MySkills"
import { Experience } from "@/components/Experience"
export const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <MySkills />
        <Experience />
        <img className="fixed bottom-4 right-4 hover:scale-110 transition-transform duration-200"  src={whatsappIcon} width={60} alt="WhatsApp" />
       
    </div>
  )
}


