import fetch from "node-fetch";
import { ApolloClient, HttpLink } from "@apollo/client/core/core.cjs.js";
import { InMemoryCache } from "@apollo/client/cache/cache.cjs.js";
import { setContext } from "@apollo/client/link/context/context.cjs.js";
import config from "./config";

class Client {
	static instance: Client;
	apolloClient: ApolloClient;

	private constructor() {
		this.apolloClient = Client.setupClient();
	}

	public static getInstance(): Client {
		if (!Client.instance) {
			Client.instance = new Client();
		}
		return Client.instance;
	}

	private static setupClient = (): ApolloClient => {
		const link = new HttpLink({
			uri: config.endpoint,
			fetch,
		});

		const authLink = setContext((_, { headers }) => {
			return {
				headers: {
					...headers,
					authorization: `Bearer ${config.access_token}`,
				},
			};
		});

		const client = new ApolloClient({
			credentials: "include",
			link: authLink.concat(link),
			cache: new InMemoryCache(),
		});

		return client;
	};
}

export default Client.getInstance().apolloClient;
