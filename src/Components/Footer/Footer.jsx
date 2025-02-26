import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e3e3e3] dark:bg-slate-800 text-black dark:text-white py-5 px-4 mt-10">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
      
        <div className="mb-4 md:mb-0">
          <p className="text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} Harsh Dahiya. All rights reserved.
          </p>
        </div>

     
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4 text-lg md:text-base">
            <li>
              <Link to="experience">
                <p className="hover:underline transition-all duration-200">
                Experience
                </p>
              </Link>
            </li>
            <li>
            <Link to="projects">
                <p className="hover:underline transition-all duration-200">
                Projects
                </p>
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline transition-all duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/believeharsh11/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200 text-lg"
          >
            <FaLinkedin/>
          </a>
          <a
            href="https://github.com/believeharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200 text-lg"
          >
         <FaGithub/>
          </a>
          <a
            href="mailto:harsh.dahiya@example.com"
            className="hover:scale-110 transition-transform duration-200 text-lg"
          >
          <FaTwitter/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
