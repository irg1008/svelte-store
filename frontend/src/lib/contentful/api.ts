import { ContentfulClientApi, createClient } from "contentful";
import config from "./config";

type ContentType = "product";

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

	getContentfulEntries = async <T>(type: ContentType) => {
		try {
			const res = await this.client.getEntries<T>({
				content_type: type,
			});

			// No error => Return data.
			return res.items.map((item) => item.fields);
		} catch (error) {
			console.log(error);
		}
	};
}

const api = new Api();
export default api;
