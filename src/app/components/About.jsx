"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Calculatoare</li>
        <li>Xbox Series X</li>
        <li>Playstation 5 PRO</li>
        <li>Arcade</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
       
        <li>Colegiul National "Emil Botta"</li>
      </ul>
    ),
  },
 
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image
      src="/images/projects/10.png"
      width={400}
      height={400}
      alt="Pisicaaaaaaaaaa" // Add your alternative text here
      quality={100}
      className="rounded-full hover:shadow-lg hover:scale-95 transition duration-300 ease-in-out"
/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">Despre Noi</h2>
          <p className="text-base lg:text-lg">
          SC GAMEZONE SRL este un spațiu <span className="text-purple-600">modern</span> destinat
          <span className="text-purple-600"> pasionaților</span> de gaming și tehnologie, aducând în premieră în <span className="text-purple-600">Adjud</span> un centru de gaming echipat cu console de ultimă generație, <span className="text-purple-600">calculatoare performante</span> calculatoare performante. Sediul se poate gasi pe Strada Nicae Balcescu, Str. Republicii 10C, Adjud!
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Echipamente{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educatie{" "}
            </TabButton>

          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
