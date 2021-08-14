import client from "$lib/utils/apollo/client";
import { gql } from "@apollo/client/core";
import type { EndpointOutput, Request } from "@sveltejs/kit";

const get = async ({ params }: Request): Promise<EndpointOutput> => {
	const { slug } = params;

	console.log(slug);

	const query = gql`
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

	try {
		const { data } = await client.query({ query });

		return {
			body: data.products,
		};
	} catch (error) {
		return {
			status: 500,
		};
	}
};

export { get };
