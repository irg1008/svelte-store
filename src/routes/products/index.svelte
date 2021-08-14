<script context="module" lang="ts">
	import type { LoadInput } from "@sveltejs/kit";
	import type { Product } from "$lib/utils/apollo/schemas.types";
	import { getProducts } from "$lib/middlewares/products";

	const load = async ({ page }: LoadInput) => {
		const products = await getProducts(page.host);

		if (products) {
			return { props: { products } };
		}

		// If no product is recieved.
		return { status: 404, error: "No such product" };
	};

	export { load };
</script>

<script lang="ts">
	import ProductCard from "$lib/components/atoms/ProductCard.svelte";

	export let products: Product[];
</script>

<div class="products">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</div>

<style>
	.products {
		@apply flex
			flex-wrap
			justify-center
			gap-4;
	}
</style>
