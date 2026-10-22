import { Navbar } from "@/components/Navbar";
import HeroSection from "./components/section/HeroSection";
import AboutMe from "./components/section/AboutMe";
import MySkills from "./components/section/MySkills";
import { Experience } from "./components/section/Experiences";
import { Footer } from "./components/Footer";
import { ContactMe } from "./components/section/ContactMe";

function App() {
  return (
    <div className=" min-h-screen">
      {/* BARRA DE NAVEGACAO  */}
      <Navbar />

      <main className="">
        <HeroSection />
        <AboutMe />
        <MySkills />
        <Experience />
        <ContactMe />
        <hr className="border border-zinc-300 mt-4 shadow-md" />
        <Footer />
      </main>
    </div>
  );
}

export default App;
