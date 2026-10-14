import {Titlies} from './ui/Titlies'
import{navItems} from '@/data'

export default function MySkills() {
  let   [,Skills ,,] = navItems 

  return (
    <section className="w-full md:w-[70%] mx-auto">
    <Titlies info={Skills} />
    </section>
  );
}
