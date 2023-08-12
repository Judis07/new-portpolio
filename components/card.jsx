import Image from "next/image";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const Card = ({ title, skills, liveLink, githubLink }) => {
  return (
    <div className="shadow-md rounded">
      <div>
        <Image src={"/landingPreview.svg"} width={300} height={200} alt="" />
      </div>

      <div className="p-4">
        <h3 className="font-bold mb-2 text-xl">{title}</h3>
        <div className="flex mb-4  gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <AiOutlineLink />
          </a>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <AiOutlineGithub />
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-3 my-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-[#EAECF9] py-2 px-4 text-xs font-bold rounded-full  inline-block"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
