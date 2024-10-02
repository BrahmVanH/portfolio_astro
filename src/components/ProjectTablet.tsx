import React from "react";
import type { ImageMetadata } from "astro";

import type { Project } from "../types";
import { create_techs_icons_array } from "src/lib/util";

const screenshots = import.meta.glob<{ default: ImageMetadata }>(
  "../images/*.{png,jpg,jpeg,webp}",
);

interface ProjectTabletProps {
  project: Project;
  zoomOutDirection: string;
}
export default function ProjectTablet({
  project,
  zoomOutDirection,
}: Readonly<ProjectTabletProps>) {
  const [screenshotUrl, setScreenshotUrl] = React.useState<string>("");
  const [techIcons, setTechIcons] = React.useState<string[]>([]);

  // This is a workaround for AOS hydration issues in this component
  const [isClient, setIsClient] = React.useState<boolean>(false);

  const baseAnchorClasses = `max-h-[30%] z-[1000] border rounded-2xl mx-4 flex ${
    zoomOutDirection === "right" ? "flex-row" : "flex-row-reverse"
  } justify-between overflow-hidden items-center shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.03]`;

  const aos_attr = isClient
    ? {
        "data-aos-delay": "500",
        "data-aos-duration": "1000",
        "data-aos": `zoom-out-${zoomOutDirection}`,
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
    const imagePath = `../images/${project.imgKey}`;

    if (screenshots[imagePath]) {
      loadScreenshot(imagePath);
    }
  }, [project.imgKey]);

  React.useEffect(() => {
    if (!project.techs) return;
    const tech_icons = create_techs_icons_array(project.techs);
    setTechIcons(tech_icons);
  }, [project.techs]);

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={project.projectUrl}
      {...aos_attr}
      className={baseAnchorClasses}
    >
      <img className="max-w-[50%] h-full m-0" src={screenshotUrl} />
      <div className="flex flex-col justify-center items-center [&>ul>li]:hover:scale-[1.50] [&>ul>li]:hover:p-2 [&>ul>li]:hover:transition-all  [&>ul>li]:hover:duration-300">
        <h1 className="text-md text-center m-2 p-2">{project.name}</h1>
        <ul className="flex flex-row [&>ul>li]:ml-2 last:mr-2 ">
          {techIcons.map((tech, index) => (
            <li className="" key={index}>
              <img src={tech} className="w-5 h-5" />
            </li>
          ))}
        </ul>
        <p className="text-md m-4">{project.text}</p>
      </div>
    </a>
  );
}
