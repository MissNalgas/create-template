import { ICategory, IProduct, IProductDetail } from '../models/product';

export interface IProductRepository {
	getAll(): Promise<IProduct[]>;
	getProductDetail(id: string): Promise<IProductDetail>;
	getCategories(): Promise<ICategory[]>;
}
