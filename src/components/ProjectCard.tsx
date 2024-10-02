import React from "react";
import type { Project } from "../types";

import "../styles/project_card.css";

const screenshots = import.meta.glob<{ default: ImageMetadata }>(
  "../images/*.{png,jpg,jpeg,webp}",
);

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  const [screenshotUrl, setScreenshotUrl] = React.useState<string>("");
  const [isClient, setIsClient] = React.useState<boolean>(false);

  const aos_attr = isClient
    ? {
        "data-aos": "fade-left",
        "data-aos-duration": "1500",
      }
    : {};

  async function loadScreenshot(imagePath: string) {
    if (screenshots) console.log("screenshots", screenshots);
    const moduleImg = await screenshots[imagePath]();
    if (moduleImg) {
      setScreenshotUrl(moduleImg.default.src);
    } else {
    }
  }

  React.useEffect(() => {
    setIsClient(true);
    const imagePath = `../images/${project.imgKey}`;

    if (screenshots[imagePath]) {
      loadScreenshot(imagePath);
    }
  }, [project.imgKey]);
  return (
    <>
      {screenshotUrl ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.projectUrl}
          id="project-card"
          {...aos_attr}
          className="relative border rounded-2xl mx-2 group"
        >
          <img
            className="rounded-2xl max-h-[700px] h-[400px] max-w-[5000px]"
            src={screenshotUrl}
            alt={project.name}
          />
          <div
            className="absolute rounded-2xl inset-0 bg-black/45 opacity-0 transition-opacity 
      duration-300 group-hover:opacity-100 flex flex-col 
      justify-center items-center text-white"
          >
            <h1 className="text-xl font-bold mb-2">{project.name}</h1>
            <p className="text-sm p-2">{project.textPreview}</p>
          </div>
        </a>
      ) : (
        <></>
      )}
    </>
  );
}
