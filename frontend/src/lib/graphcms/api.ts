import { GraphQLClient } from "graphql-request";
import config from "./config";

class Api {
	client: GraphQLClient;

	constructor() {
		this.client = new GraphQLClient(config.endpoint, {
			credentials: "include",
			mode: "cors",
			headers: {
				Authorization: `Bearer ${config.access_token}`,
			},
		});
	}

	fetchProducts = async (): Promise<unknown> => {
		const { request } = this.client;

		const query = `
      {
        products {
          id
          name
          slug
        }
      }
    `;

		const res = await request(config.endpoint, query);

		console.log(res);

		return;
	};
}

const api = new Api();
export default api;
