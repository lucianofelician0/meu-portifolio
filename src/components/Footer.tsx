import { navItems } from "@/data";
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
  },
  {
    name: "github",
    icon: faGithub,
  },
  {
    name: "instagram",
    icon: faInstagram,
  },
  {
    name: "youtube",
    icon: faYoutube,
  },
  {
    name: "linkedin",
    icon: faLinkedin,
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-around w-full py-16 text-sm text-gray-800/70">
      <div className="flex items-center gap-8">
        {navItems.map((item, index) => {
          return (
            <a
              href="#"
              key={index}
              className="font-medium text-gray-500  hover:text-black transition-all"
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-8">
        {socialMedia.map((item) => {
          return (
            <div key={item.name}>
              <a target="_blank" href="#" >
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
