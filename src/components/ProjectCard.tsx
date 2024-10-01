import React from 'react';
import type { Projects } from './Projects.astro';

interface ProjectCardProps {
	project: Projects;
}
export default function PRojectCard({ project }: Readonly<ProjectCardProps>) {
	return (
		<div className='w-[400px] max-h-[224px] flex flex-col justify-end align-middle' style={{ backgroundImage: `url(${project.imgUrl ?? ''})`, backgroundSize: 'cover' }}>
			<h1 className='text-2xl text-center m-2 p-2'>{project.name}</h1>
		</div>
	);
}
