"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gamezone",
    description: "Sala de Jocuri",
    image: "/images/projects/7.png",
    tag: ["Locatie", "LUA"],
    previewUrl: "https://maps.app.goo.gl/qX53kPNwzAQWkucHA",
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "/images/projects/gaming.png",
    tag: [  "Imagini"],
    gitUrl: "",
    previewUrl: "/images/projects/gaming.png",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "/images/projects/gaming2.png",
    tag: [  "Imagini"],
    gitUrl: "",
    previewUrl: "/images/projects/gaming2.png",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "/images/projects/gaming4.png",
    tag: [  "Imagini"],
    gitUrl: "",
    previewUrl: "/images/projects/gaming4.png",
  },
  {
    id: 4,
    title: "",
    description: "",
    image: "/images/projects/cacator.png",
    tag: [  "Imagini"],
    gitUrl: "",
    previewUrl: "/images/projects/cacator.png",
  },
  {
    id: 5,
    title: "",
    description: "",
    image: "/images/projects/ps.png",
    tag: [  "Imagini"],
    gitUrl: "",
    previewUrl: "/images/projects/ps.png",
  },
  {
    id: 6,
    title: "",
    description: "",
    image: "/images/projects/scaun.webp",
    tag: [  "Imagini"],
    gitUrl: "",
    previewUrl: "/images/projects/scaun.webp",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Locatie");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Locatie"
          isSelected={tag === "Locatie"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Imagini"
          isSelected={tag === "Imagini"}
        />

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
         
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
