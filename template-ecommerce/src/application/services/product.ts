import { IProductRepository } from '@/domain/repository/product';
import { IHttpApi } from '../models/http';
import { api } from './api';
import {
	IBanner,
	ICategory,
	IProduct,
	IProductDetail,
} from '@/domain/models/product';
import { faker } from '@faker-js/faker/locale/en';
import { hash, randomInt } from '@/utils';

class ProductService implements IProductRepository {
	constructor(private api: IHttpApi) {}

	async getBanner(): Promise<IBanner[]> {
		return Array(4)
			.fill(null)
			.map(() => ({
				image: faker.image.urlPicsumPhotos(),
				name: faker.lorem.word(),
			}));
	}

	async getAll(): Promise<IProduct[]> {
		return Array(9)
			.fill(null)
			.map(() => ({
				id: faker.string.uuid(),
				name: faker.commerce.product(),
				price: faker.commerce.price(),
				category: faker.commerce.department(),
				image: faker.image.urlPicsumPhotos(),
			}));
		const response = await this.api.get<IProduct[]>('/products');
		return response.data;
	}

	async getProductDetail(id: string): Promise<IProductDetail> {
		return {
			id: id,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			category: faker.commerce.department(),
			images: Array(8)
				.fill(null)
				.map(() => faker.image.urlPicsumPhotos()),
			description: faker.commerce.productDescription(),
			colors: Array(4)
				.fill(null)
				.map(() => faker.color.rgb()),
		};
	}

	async getCategories(): Promise<ICategory[]> {
		function generateCategory(): ICategory[] {
			return Array(randomInt(9))
				.fill(null)
				.map(() => ({
					name: faker.commerce.productAdjective(),
					value: hash(),
					items: Math.random() > 0.7 ? generateCategory() : [],
				})) as unknown as ICategory[];
		}

		return generateCategory();
	}
}

export const productService = new ProductService(api);
