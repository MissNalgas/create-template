export interface IProduct {
	id: string;
	name: string;
	price: string;
	image: string;
	category: string;
}

export interface IProductDetail {
	id: string;
	name: string;
	price: string;
	images: string[];
	category: string;
	description: string;
	colors: string[];
}

export interface IBanner {
	image: string;
	name: string;
}

export interface ICategory {
	name: string;
	value: string;
	items: ICategory[];
}
