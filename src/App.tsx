import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import HeroSection from "./components/section/HeroSection";
import AboutMe from "./components/section/AboutMe";
import MySkills from "./components/section/MySkills";
import { Experience } from "./components/section/Experiences";
import { Projects } from "./components/section/Projects";
import { Certifications } from "./components/section/Certifications";
import { Blog } from "./components/section/Blog";
import { Footer } from "./components/Footer";
import { ContactMe } from "./components/section/ContactMe";
import { api } from "@/lib/api";

// Registra uma visita por sessão do navegador
function useTrackVisit() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("visit_tracked")) return;
      sessionStorage.setItem("visit_tracked", "1");
    } catch {
      // storage bloqueado: registra mesmo assim
    }
    api("/visits", { method: "POST" }).catch(() => {});
  }, []);
}

function App() {
  useTrackVisit();

  return (
    <div className=" min-h-screen">
      {/* BARRA DE NAVEGACAO  */}
      <Navbar />

      <main className="">
        <HeroSection />
        <AboutMe />
        <MySkills />
        <Experience />
        <Projects />
        <Certifications />
        <Blog />
        <ContactMe />
        <hr className="border border-zinc-300 mt-4 shadow-md" />
        <Footer />
      </main>
    </div>
  );
}

export default App;
