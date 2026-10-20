import { Titlies } from "../ui/Titlies";
import contactImg from "@/assets/img/contact-foto.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

// Inicialização com a sua Public Key ativa
emailjs.init({
  publicKey: "2LrGJ_MnVq9LnTeJ3", 
});

export const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const serviceID = "service_k8gobhe";
  const templateID = "template_f2lloiq";

  // CORREÇÃO: Usando a tipagem oficial e recomendada para submissão de formulários no React
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(serviceID, templateID, form.current)
      .then((response) => {
        console.log("SUCESSO!", response.status, response.text);
        alert("Mensagem enviada com sucesso!");
        form.current?.reset();
      })
      .catch((error) => {
        console.log("FALHA...", error);
        alert("Erro ao enviar: " + error.text);
      });
      
    console.log("clicked!");
  };

  return (
    <>
      <section
        id="contact"
        className=" md:w-[80%] mx-4 md:pt-6 mt-5 border rounded-lg border-gray-300 md:mx-auto px-6 "
      >
        <div className="pt-3">
          <Titlies info="Contact Me" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:p-8 my-4 gap-12 md:gap-20">
          {/* Left Side */}
          <div className="flex flex-col justify-start pt-1">
            <div className="">
              <img
                className=" rounded-lg"
                src={contactImg}
                alt="foto de contacto"
              />
            </div>
            <p className=" text-center font-light leading-relaxed py-5 max-w-[420]">
              Have a question or need help? Reach out and I'll get back to you
              as soon as possible.
            </p>
          </div>

          {/* Right Side */}
          {/* O form agora referencia a ref={form} correta que o emailjs precisa ler */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="firstName" className="font-light text-sm">
                  First Name
                </label>
                <input
                  required
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Luciano"
                  className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="lastName" className=" font-light text-sm">
                  Last Name
                </label>
                <input
                  required
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Feliciano"
                  className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label htmlFor="email" className="font-light text-sm">
                Email
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                placeholder="felucianoS@gmail.com"
                className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <label htmlFor="message" className="font-light text-sm">
                Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                placeholder="Hi, I'd like to know more about your services"
                rows={6}
                className="w-full px-3.5 py-3 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full mt-1 bg-black hover:bg-zinc-900 border border-zinc-300 text-white text-sm font-medium py-3 rounded-sm transition-colors cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
