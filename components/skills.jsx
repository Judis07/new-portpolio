import React from "react";
import Container from "./container";
import { skills } from "@/utils/data";

const SkillsSection = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="flex">
          <h3 className="text-4xl font-bold  mb-8 basis-1/2">Skills</h3>

          <div className="basis-1/2  flex  items-center gap-8 flex-wrap   ">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-[#EAECF9] py-3 px-6 text-xl font-bold rounded-full  inline-block"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
