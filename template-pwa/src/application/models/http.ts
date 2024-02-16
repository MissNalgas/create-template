interface IResponse<T> {
	data: T;
}
export interface IHttpApi {
	get<T>(url: string): Promise<IResponse<T>>;
	post<T>(url: string, data: any): Promise<IResponse<T>>;
	put<T>(url: string, data: any): Promise<IResponse<T>>;
	delete<T>(url: string): Promise<IResponse<T>>;
	patch<T>(url: string, data: any): Promise<IResponse<T>>;
}
