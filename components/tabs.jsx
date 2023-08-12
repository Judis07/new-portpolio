"use client";

import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section>
      <div className="shadow-md m-auto py-3  w-3/4	m-auto flex justify-center items-center gap-6 rounded-md border	">
        <div
          className={`font-bold text-xl cursor-pointer  py-2 px-4 rounded-md ${
            activeTab === 1 && "bg-[#A8B4FF] text-white"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Professional Work
        </div>
        <div
          className={`font-bold text-xl cursor-pointer  py-2 px-4 rounded-md ${
            activeTab === 2 && "bg-[#A8B4FF] text-white"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Personal Work
        </div>
      </div>

      <div className="mt-8 mb-8">
        {activeTab === 1 ? (
          <div>Tab one content</div>
        ) : (
          <div>Tab two content</div>
        )}
      </div>
    </section>
  );
};

export default Tabs;
