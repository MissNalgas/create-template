import { API_URL } from '../consts';
import { IHttpApi } from '../models/http';
import axios from 'axios';

const instance = axios.create({
	baseURL: API_URL,
}); // Add here the defalt configuration

export const api: IHttpApi = {
	get: instance.get,
	post: instance.post,
	put: instance.put,
	delete: instance.delete,
	patch: instance.patch,
};
