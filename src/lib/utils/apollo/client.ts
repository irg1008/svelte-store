import { ApolloClient, HttpLink } from "@apollo/client/core/core.cjs";
import {
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client/cache/cache.cjs";
import { setContext } from "@apollo/client/link/context/context.cjs";
import config from "./config";

class Client {
	static instance: Client;
	apolloClient: ApolloClient<NormalizedCacheObject>;

	private constructor() {
		this.apolloClient = this.setupClient();
	}

	public static getInstance(): Client {
		if (!Client.instance) {
			Client.instance = new Client();
		}
		return Client.instance;
	}

	private setupClient = () => {
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
