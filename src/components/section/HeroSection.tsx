import { Avatar } from "../ui/Avatar";
import avatarImg from "@/assets/img/foto.jpg";
import cvDonwload from "@/cv/D3cLuciano.pdf";
import { MyTools } from "@/components/MyTools";
import { Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className=" pt-28 md:min-h-screen md:mx-8   flex flex-col justify-center ">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Avatar img={avatarImg} />
        </div>
        <div className=" py-5 max-w-xl mx-auto">
          <h1 className="font-poppins  text-2xl text-center pb-4 px-4 leading-tight">
            I'm <span className="text-green-900 font-bold">Luciano</span> a Full
            Stack Developer with a love for creating beautiful and functional
            web experiences.
          </h1>
          <div className=" flex flex-col sm:flex-row justify-center sm:items-center gap-4 mx-auto w-full ">
            <button className=" bg-zinc-900 mx-4 hover:bg-zinc-800  my-4 text-white p-6 py-2.5 rounded-sm text-sm transition cursor-pointer group">
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                  Explore Templates
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                  Get in Touch
                </span>
              </div>
            </button>

            <button className="border  mx-4 border-zinc-200  text-sm py-2.5 p-6 text-black rounded-sm hover:scale-105 transition duration-300 active:scale-100 cursor-pointer">
              <a href={cvDonwload} className="flex justify-center gap-4 items-center" download={"cv luciano"}>
                <span>Get my CV</span> <Download size={20} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <MyTools />
      </div>
    </section>
  );
}
