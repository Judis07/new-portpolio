import Image from "next/image";

const Card = ({ title, skills, liveLink }) => {
  return (
    <div className="shadow-md rounded">
      <div>
        <Image src={"/landingPreview.svg"} width={300} height={200} alt="" />
      </div>

      <div className="p-4">
        <h3 className="font-bold mb-4 text-xl">{title}</h3>

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

        <div className="mt-6 flex justify-end gap-3">
          <a
            href={liveLink}
            target="_blank"
            className="text-xs underline hover:text-blue-600"
          >
            Live Link
          </a>

          <a
            href={liveLink}
            target="_blank"
            className="text-xs underline hover:text-blue-600"
          >
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
