import React from 'react';
import type { Project } from '../types';

interface ProjectTabletProps {
	project: Project;
	zoomOutDirection: string;
}
export default function ProjectTablet({ project, zoomOutDirection }: Readonly<ProjectTabletProps>) {
	return (
		<div data-aos-delay="500" data-aos-duration="1000" data-aos={`zoom-out-${zoomOutDirection}`} className={`w-full border rounded-2xl mx-2 flex ${zoomOutDirection == "right" ? "flex-row" : "flex-row-reverse"} justify-between overflow-hidden items-center`}>
			<img className='max-h-[400px]' src={project.imgUrl ?? ""} />
      <div className='flex flex-col justify-center items-center'>

			<h1 className='text-md text-center m-2 p-2'>{project.name}</h1>
      <p>{project.text}</p>
      </div>
		</div>
	);
}
