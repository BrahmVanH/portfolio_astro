import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
	project: Project;
}
export default function ProjectCard({ project }: Readonly<ProjectCardProps>) {
	return (
		<div data-aos="fade-left" data-aos-duration="1500" className='border rounded-2xl mx-2 flex flex-col justify-end items-center'>
			<img className='max-w-[600px]' src={project.imgUrl ?? ""} />
			<h1 className='text-md text-center m-2 p-2'>{project.name}</h1>
		</div>
	);
}
