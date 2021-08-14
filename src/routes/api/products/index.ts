import client from "$lib/utils/apollo/client";
import { gql, DocumentNode } from "@apollo/client/core";
import type { EndpointOutput, Request } from "@sveltejs/kit";

const post = async ({ body }: Request): Promise<EndpointOutput> => {
	let query: DocumentNode;

	if (body) {
		const slug = body["slug"];

		query = gql`
			query {
				products(where: { slug: "${slug}" }) {
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
	} else {
		query = gql`
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
	}

	try {
		const { data } = await client.query({
			query,
		});

		return {
			body: data["products"],
		};
	} catch (error) {
		return {
			status: 500,
		};
	}
};

export { post };