
const Footer = () => {
  return (
    <footer className="bg-[#e3e3e3] dark:bg-slate-800 text-black dark:text-white py-5 px-4 mt-10">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Copyright */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} Harsh Dahiya. All rights reserved.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4 text-sm md:text-base">
            <li>
              <a
                href="#about"
                className="hover:underline transition-all duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:underline transition-all duration-200"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline transition-all duration-200"
              >
                Projects
              </a>
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

        {/* Right Section - Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/harshdahiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/assets/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </a>
          <a
            href="https://github.com/harshdahiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/assets/icons/github.svg"
              alt="GitHub"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </a>
          <a
            href="mailto:harsh.dahiya@example.com"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/assets/icons/email.svg"
              alt="Email"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

