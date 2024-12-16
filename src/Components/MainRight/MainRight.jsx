import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

const MainRight = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[130px] md:pt-[90px] space-y-6 ">
      <div className="MainRight-Child">
        <a href="https://www.linkedin.com/in/believeharsh11/" target="_blank">
          <FaLinkedin className="Projects-link-icon " />
        </a>
      </div>
      <div className="MainRight-Child">
        <a href="https://github.com/believeharsh" target="_blank">
          <FaGithub className="Projects-link-icon" />
        </a>
      </div>
      <div className="MainRight-Child">
        <a href="" target="_blank">
          <FaTwitter className="Projects-link-icon" />
        </a>
      </div>
    </div>
  );
}

export default MainRight;
