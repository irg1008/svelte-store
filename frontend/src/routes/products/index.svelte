<script>
	import { products } from "$lib/stores/products";
	import ProductCard from "$lib/components/atoms/ProductCard.svelte";
</script>

<div class="products">
	{#each $products as product}
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
