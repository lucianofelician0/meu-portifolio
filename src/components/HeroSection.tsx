import { Avatar } from "./Avatar";

export default function HeroSection() {
  return (
    <section className="h-full">
      <div className="flex flex-col items-center">
        <div className="p-4">
          <Avatar />
        </div>
        <div className=" p-5 max-w-xl mx-auto">
          <h1 className="font-poppins  text-2xl text-center pb-4 px-4 leading-tight">
             I'm <span className="text-green-900 font-bold">Luciano</span> a Full Stack Developer with a
            love for creating beautiful and functional web experiences.
          </h1>
          <div className="p-2.5 flex justify-center   gap-4 mx-auto w-full ">
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-sm text-sm transition cursor-pointer group">
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                  Explore Templates
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                  Get in Touch
                </span>
              </div>
            </button>
            <button className="border border-zinc-200 px-6 text-sm py-2.5 text-black rounded-sm hover:scale-105 transition duration-300 active:scale-100 cursor-pointer">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <hr className="border-zinc-200" />
    </section>
  );
}
