<script context="module" lang="ts">
	import type { LoadInput } from "@sveltejs/kit";
	import api from "$lib/graphcms/api";

	// const endpoint = "https://jsonplaceholder.typicode.com";

	const load = async ({ page, fetch }: LoadInput) => {
		const { slug } = page.params;

		const res = await api.fetchProducts();

		//console.log(res)

		// TODO: Access products with API or something like that.

		/*
		const res = await fetch(`${endpoint}/users/${productId}`);

		console.log(res);

		if (res.status === 200) {
			const user = await res.json();
			return { props: { user } };
		}

		// If no product is recieved.
		return { status: res.status, error: res.statusText };
		*/

		if (["apple", "orange", "grapes"].includes(slug))
			return { props: { slug } };
		else return { status: 404, error: `The product "${slug}" does not exist` };
	};

	export { load };
</script>

<script lang="ts">
	import { products } from "$lib/stores/products";
	export let slug: string;

	const product = $products.find((product) => product.slug === slug);
</script>

<svelte:head>
	<title>{product.name} - {product.price}</title>
</svelte:head>

<pre>{JSON.stringify(product, null, 2)}</pre>
