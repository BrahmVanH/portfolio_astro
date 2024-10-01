import React from "react";
import type { Project } from "../types";
import aws_cloudfront_s3_lambda_svg from "../images/svg/aws-lambda-cloudfront-s3-combo-icons.svg";
import { create_techs_icons_array } from "src/lib/util";

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

  React.useEffect(() => {
    import(`../images/${project.imgKey}`).then((module) => {
      setScreenshotUrl(module.default.src);
    });
  }, [project.imgKey]);

  React.useEffect(() => {
    if (!project.techs) return;
    const tech_icons = create_techs_icons_array(project.techs);
    console.log("tech_icons", tech_icons);
    setTechIcons(tech_icons);
  }, [project.techs]);

  return (
    <div
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos={`zoom-out-${zoomOutDirection}`}
      className={`w-full border rounded-2xl mx-2 flex ${zoomOutDirection == "right" ? "flex-row" : "flex-row-reverse"} justify-between overflow-hidden items-center`}
    >
      <img className="max-w-[400px] max-h-[400px]" src={screenshotUrl ?? ""} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-md text-center m-2 p-2">{project.name}</h1>
        <ul className="flex flex-row [&>li]:ml-2 last:mr-2">
          {techIcons.map((tech, index) => (
            <li key={index}>
              <img src={tech} className="w-5 h-5" />
            </li>
          ))}
        </ul>
        <p className="m-4">{project.text}</p>
      </div>
    </div>
  );
}
