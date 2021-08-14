<script context="module" lang="ts">
	import type { LoadInput } from "@sveltejs/kit";
	import type { Product } from "$lib/utils/apollo/schemas.types";

	const load = async ({ fetch }: LoadInput) => {
		const url = "/api/products";

		const res = await fetch(url, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		if (res.status === 200) {
			const products = await res.json();
			return { props: { products } };
		}

		// If no product is recieved.
		return { status: res.status, error: res.statusText };
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
