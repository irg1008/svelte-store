import { ContentfulClientApi, createClient, Entry } from "contentful";
import config from "./config";
import type { Product } from "./api.types";

type ContentType = "product";
const TypeInterface: Record<ContentType, any> = {
  "product": typeof 
}

class Api {
	client: ContentfulClientApi;

	constructor() {
		this.client = createClient({
			space: config.space,
			accessToken: config.access_token,
			host: config.host,
			resolveLinks: true,
		});
	}

	getContentFulEntries = async (type: ContentType) => {
		try {
			const res = await this.client.getEntries<Product>({
				content_type: type,
			});

			// No error => Return data.
			return res.items.map((item) => item.fields);
		} catch (error) {
			console.log(error);
		}
	};

	fetchProducts = async (): Promise<Product[]> => {
		const res = await this.client.getEntries<Product>({
			content_type: "product",
		});

    return this.getContentFulEntries("product")
		// Products.
		return res.items.map((item) => item.fields);
	};
}

const api = new Api();
export default api;
