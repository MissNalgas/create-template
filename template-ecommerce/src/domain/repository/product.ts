import { IProduct } from '../models/product';

export interface IProductRepository {
	getAll(): Promise<IProduct[]>;
}
