"use client";

import { useState } from "react";
import { personalProjects, professionalProjects } from "@/utils/data";
import Card from "./card";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section>
      <div className="shadow-md m-auto py-3  w-3/4	m-auto flex justify-center items-center gap-6 rounded-md border	 max-md:w-full max-md:px-3">
        <div
          className={`font-bold text-xl cursor-pointer  py-2 px-4 rounded-md  max-md:text-base ${
            activeTab === 1 && "bg-[#EAECF9]"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Professional Projects
        </div>
        <div
          className={`font-bold text-xl cursor-pointer  py-2 px-4 rounded-md max-md:text-base ${
            activeTab === 2 && "bg-[#EAECF9]"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Personal Projects
        </div>
      </div>

      <div className="mt-8 mb-8">
        {activeTab === 1 ? (
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-lg:w-10/12 max-lg:m-auto max-mid:w-full max-md:grid-cols-1 max-md:w-full">
            {professionalProjects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-lg:w-10/12 max-lg:m-auto max-mid:w-full max-md:grid-cols-1 max-md:w-full">
            {personalProjects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tabs;
