import fetch from "node-fetch";
import core from "@apollo/client/core/core.cjs.js";
import cache from "@apollo/client/cache/cache.cjs.js";
import context from "@apollo/client/link/context/context.cjs.js";
import config from "./config";

const { ApolloClient, HttpLink } = core;
const { InMemoryCache } = cache;
const { setContext } = context;

class Client {
	static instance: Client;
	apolloClient: typeof ApolloClient;

	private constructor() {
		this.apolloClient = Client.setupClient();
	}

	public static getInstance(): Client {
		if (!Client.instance) {
			Client.instance = new Client();
		}
		return Client.instance;
	}

	private static setupClient = (): typeof ApolloClient => {
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
