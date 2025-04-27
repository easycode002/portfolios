"use client";
import React, { useState } from "react";
import { CategoryFilter } from "../components/molecules/portfolio/CategoryFilter";
import { projects } from "@/data/project";
import { ProjectCard } from "../components/molecules/portfolio/PortfolioCard";
import { Category } from "@/types/category";

const categories: Category[] = [
  { id: "1", name: "All" },
  { id: "2", name: "Web" },
  { id: "3", name: "App" },
  { id: "4", name: "Design" },
  { id: "5", name: "Data" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );
  // sm:px-6 md:px-8
  return (
    <section className="px-4 sm:px-6 mb-6 mt-12 md:px-8 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-center mb-3 text-2xl md:text-3xl lg:text-4xl font-ubuntubold uppercase underline underline-offset-4">
          Portfolio
        </h2>
        <p className="text-center">Most recent work</p>
        <div className="flex w-full justify-center mt-4">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
