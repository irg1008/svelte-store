import type { Product } from "$lib/stores/cart";
import axios, { AxiosResponse } from "axios";

interface IMiddle<T> {
	res: T;
	error: unknown;
}

const withMiddle = async <T>(
	fn: () => Promise<AxiosResponse>,
): Promise<IMiddle<T>> => {
	try {
		const res = await fn();
		return { res: res.data, error: null };
	} catch (error) {
		return { res: null, error: error.response.data };
	}
};

const productsUrl = "/api/products";

const getProducts = async (hostUrl: string): Promise<Product[]> => {
	const { res } = await withMiddle<Product[]>(() =>
		axios.post(`http://${hostUrl}${productsUrl}`),
	);
	return res;
};

const getProductsBySlug = async (
	hostUrl: string,
	slug: string,
): Promise<Product[]> => {
	const { res } = await withMiddle<Product[]>(() =>
		axios.post(`http://${hostUrl}${productsUrl}`, { slug }),
	);
	return res;
};

export { getProducts, getProductsBySlug };
