import React from "react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  const [screenshotUrl, setScreenshotUrl] = React.useState<string>("");
  React.useEffect(() => {
		console.log("project.imgKey", project.imgKey);
    import(`../images/${project.imgKey}`).then((module) => {
			console.log(module.default);
      setScreenshotUrl(module.default.src);
    });
  }, [project.imgKey]);

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      className="border rounded-2xl mx-2 flex flex-col justify-end items-center hover:scale-105 hover:transform transition-transform duration-500 ease-in-out"
    >
      <img className="rounded-2xl max-w-[600px] max-h-[300px]" src={screenshotUrl} />
      <h1 className="text-md text-center m-2 p-2">{project.name}</h1>
    </div>
  );
}
