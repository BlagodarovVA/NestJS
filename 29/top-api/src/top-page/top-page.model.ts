export enum TopLevevCategory {
	Courses,
	Services,
	Books,
	Products,
}

export class TopPageModel {
	_id: string;
	firstCategory: TopLevevCategory;
	secondCategory: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		juniorSalary: number;
		middleSalary: number;
		seniorSalary: number;
	};
	advantages: {
		title: string;
		description: string;
	}[];
	seoText: string;
	tagsTitle: string;
	tags: string[];
}
