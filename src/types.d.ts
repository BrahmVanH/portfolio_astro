declare module 'aos';

export interface Project {
	name: string;
	imgUrl?: string;
	imgKey: string;
	techs?: string[];
	text?: string;
	textPreview?: string;
	projectUrl?: string;
}
