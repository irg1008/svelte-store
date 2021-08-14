<script context="module" lang="ts">
	import type { LoadInput } from "@sveltejs/kit";
	import type { Product } from "$lib/utils/apollo/schemas.types";
	import { getProductsBySlug } from "$lib/middlewares/products";

	const load = async ({ page }: LoadInput) => {
		const { slug } = page.params;

		const products = await getProductsBySlug(page.host, slug);

		if (products.length > 0) {
			return { props: { product: products[0] } };
		}

		// If no product is recieved.
		return { status: 404, error: "No such product with given slug" };
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
