import type { Product } from "$lib/stores/cart";
import type {
	ApolloError,
	DocumentNode,
	OperationVariables,
} from "@apollo/client/core";
import { gql } from "@apollo/client/core";
import client from "../utils/apollo/client";

type Key = "products";
type Data<T> = Record<Key, T>;

interface MiddleResponse<T> {
	data: Data<T>;
	error: ApolloError;
}

type CustomPromise<T> = Promise<MiddleResponse<T>>;

interface ApolloOptions {
	query: DocumentNode;
	variables?: OperationVariables;
}

const getKeyFromQuery = (query: DocumentNode): Key =>
	query.definitions[0]["selectionSet"]["selections"][0]["name"]["value"];

const apolloQuery = async <T>({
	query,
	variables,
}: ApolloOptions): CustomPromise<T> => {
	try {
		const { data } = await client.query<Data<T>>({ query, variables });
		const key = getKeyFromQuery(query);

		return {
			data: {
				[key]: data[key],
			},
			error: null,
		};
	} catch (error) {
		return { data: null, error };
	}
};

const getProducts = async (): CustomPromise<Product[]> => {
	const query = gql`
		query {
			products {
				id
				name
				slug
				price
				available
				images {
					url
				}
				description {
					text
				}
			}
		}
	`;

	return apolloQuery<Product[]>({ query });
};

const getProductsBySlug = async (slug: string): CustomPromise<Product[]> => {
	const query = gql`
		query ($slug: String) {
			products(where: { slug: $slug }) {
				id
				name
				slug
				price
				available
				images {
					url
				}
				description {
					text
				}
			}
		}
	`;

	return apolloQuery<Product[]>({ query, variables: { slug } });
};

const api = {
	getProducts,
	getProductsBySlug,
};

export default api;
