import { IProductRepository } from '@/domain/repository/product';
import { IHttpApi } from '../models/http';
import { api } from './api';
import { IProduct } from '@/domain/models/product';

class ProductService implements IProductRepository {
	constructor(private api: IHttpApi) {}

	async getAll(): Promise<IProduct[]> {
		return Array(9)
			.fill(null)
			.map(() => ({
				name: (Math.random() * 10).toString(),
			}));
		const response = await this.api.get<IProduct[]>('/products');
		return response.data;
	}
}

export const productService = new ProductService(api);
