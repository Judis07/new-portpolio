import Image from "next/image";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const Card = ({ title, skills, liveLink, githubLink, previewImage }) => {
  return (
    <div className="shadow-md rounded-lg	overflow-hidden flex flex-col">
      <div className="h-[15rem]">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={previewImage ? previewImage : "/landingPreview.svg"}
            width={300}
            height={200}
            alt=""
          />
        </a>
      </div>

      <div className="p-4 basis-1/4">
        <h3 className="font-bold mb-2 text-xl hover:text-blue-700">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
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
