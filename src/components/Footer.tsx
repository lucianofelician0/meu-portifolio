import { navItems } from "@/data";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { fa} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faYoutube,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socialMedia = [
  {
    name: "facebook",
    icon: faFacebook,
    link:"facebook.com/lucianohali3"
  
  },
  {
    name: "github",
    icon: faGithub,
    link:"www.github.com/lucianofeluciano "
  },
  {
    name: "instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/@lucianohali"
  },
  {
    name: "youtube",
    icon: faYoutube,
    link: "https://youtube.com/@lucianohali"
  },
  {
    name: "linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/lucianofeliciano"
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around w-full py-16 text-sm text-gray-800/70">
      <div className="flex items-center gap-8">
        {navItems.map((item, index) => {
          return (
            <Link
              smooth={true}
              duration={500}
              to={item.toId}
              offset={-66}
              key={index}
              className="font-medium text-gray-500 cursor-pointer hover:text-black transition-all"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-8">
        {socialMedia.map((item) => {
          return (
            <div key={item.name}>
              <a target="_blank" href={item.link}>
                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              </a>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-center">
        Copyright © {new Date().getFullYear()} <a href="#">Feluciano</a>. All
        rights reservered.
      </p>
    </footer>
  );
};
