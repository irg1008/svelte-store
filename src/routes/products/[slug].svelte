<script context="module" lang="ts">
	import type { LoadInput } from "@sveltejs/kit";
	import type { Product } from "$lib/utils/apollo/schemas.types";

	const load = async ({ page, fetch }: LoadInput) => {
		const { slug } = page.params;

		const url = "/api/products";

		const res = await fetch(url, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ slug }),
		});

		if (res.status === 200) {
			const product = await res.json();
			return { props: { product: product[0] } };
		}

		// If no product is recieved.
		return { status: res.status, error: res.statusText };
	};

	export { load };
</script>

<script lang="ts">
	export let product: Product;
</script>

<svelte:head>
	<title>{product.name} - {product.price}</title>
</svelte:head>

<pre>{JSON.stringify(product, null, 2)}</pre>
