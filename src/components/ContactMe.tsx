import { Titlies } from "./ui/Titlies";
import { navItems } from "@/data";

export default function ContactMe() {
  let [, , , Contact,] = navItems;

  return (
    <section className="w-full md:w-[70%] mx-auto">
      <Titlies info={Contact}  />
    </section>
  );
}
