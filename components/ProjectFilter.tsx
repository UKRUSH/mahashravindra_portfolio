"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCategories, projects, type ProjectCategory } from "@/content/portfolio";

type Filter = ProjectCategory | "All";

/**
 * Brief §11.1 optional filter: local records only, toggle buttons with
 * aria-pressed, a live result count, and an empty state. Every card is in
 * the prerendered HTML; filtering only hides cards after hydration.
 */
export function ProjectFilter() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  const filters: Filter[] = ["All", ...projectCategories];

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by category">
        {filters.map((option) => (
          <button
            key={option}
            type="button"
            className="filter-button"
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="filter-status" aria-live="polite">
        Showing {visible.length} of {projects.length}
        {filter === "All" ? " projects and ventures" : ` · ${filter}`}
      </p>

      {visible.length > 0 ? (
        <div className="grid-3">
          {visible.map((project) => (
            <ProjectCard project={project} headingLevel="h2" key={project.slug} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No projects in this category yet.</p>
      )}
    </>
  );
}
