import fetch from "node-fetch";
import { ApolloClient, HttpLink } from "@apollo/client/core";
import { InMemoryCache, NormalizedCacheObject } from "@apollo/client/cache";
import { setContext } from "@apollo/client/link/context";
import config from "./config";

class Client {
	static instance: Client;
	apolloClient: ApolloClient<NormalizedCacheObject>;

	private constructor() {
		this.apolloClient = Client.setupClient();
	}

	public static getInstance(): Client {
		if (!Client.instance) {
			Client.instance = new Client();
		}
		return Client.instance;
	}

	private static setupClient = () => {
		const link = new HttpLink({
			uri: config.endpoint,
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
