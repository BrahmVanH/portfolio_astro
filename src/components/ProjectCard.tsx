import React from "react";
import type { Project } from "../types";

const screenshots = import.meta.glob<{ default: ImageMetadata }>(
  "../images/*.{png,jpg,jpeg,webp}",
);

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  const [screenshotUrl, setScreenshotUrl] = React.useState<string>("");
  const [isClient, setIsClient] = React.useState<boolean>(false);
  const [aosAttr, setAosAttr] = React.useState<Record<string, string>>({});
  const [isSmallViewPort, setIsSmallViewPort] = React.useState<boolean>(false);

  const aos_attr = {
    "data-aos": "fade-left",
    "data-aos-duration": "1500",
  };

  async function loadScreenshot(imagePath: string) {
    const moduleImg = await screenshots[imagePath]();
    if (moduleImg) {
      setScreenshotUrl(moduleImg.default.src);
    }
  }

  React.useEffect(() => {
    if (window.innerWidth < 640) {
      setIsSmallViewPort(true);
    } else {
      setIsSmallViewPort(false);
    }
  }, []);

  React.useEffect(() => {
    if (isClient && !isSmallViewPort) {
      setAosAttr(aos_attr);
    }
  }, [isClient]);

  React.useEffect(() => {
    setIsClient(true);
    const imagePath = isSmallViewPort
      ? `../images/${project.mobileImgKey}`
      : `../images/${project.imgKey}`;

    if (screenshots[imagePath]) {
      loadScreenshot(imagePath);
    }
  }, [project.imgKey, project.mobileImgKey, isSmallViewPort]);

  return (
    <>
      {screenshotUrl ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.projectUrl}
          id="project-card"
          {...aosAttr}
          className="flex flex-col-reverse lg:flex-col lg:relative overflow-hidden sm:overflow-visible rounded-2xl m-2 group lg:w-min"
        >
          {/* <div className="absolute right-20 md:hidden">
            <button>
              <img
                height="50"
                width="50"
                className=" "
                src={crossIcon.src}
                alt="cross"
              />
            </button>
          </div> */}
          <img
            className="lg:rounded-2xl  lg:max-h-[700px] lg:h-[400px] lg:max-w-[5000px]"
            src={screenshotUrl}
            alt={project.name}
          />
          <div
            className="lg:absolute lg:rounded-2xl p-2 lg:p-0 inset-0 bg-black/45 lg:opacity-0 lg:transition-opacity 
      lg:duration-300 lg:group-hover:opacity-100 flex flex-col 
      justify-center items-center text-white"
          >
            <h1 className="text-2xl  lg:text-xl font-bold mb-2">
              {project.name}
            </h1>
            <p className="text-sm p-2">{project.textPreview}</p>
          </div>
        </a>
      ) : (
        <></>
      )}
    </>
  );
}
