<script lang="ts">
	import type { Product } from "$lib/stores/products";
	import { addProduct } from "$lib/stores/cart";

	export let product: Product;
	const { image, name, price, available } = product;

	const addProductToCart = () => addProduct(product);
</script>

<div class="card">
	<div class="image-holder">
		<img src={image} alt={name} />
	</div>
	<h1>{name}</h1>
	<h2>Price: {price}$</h2>
	<button on:click={addProductToCart} disabled={!available}
		>{available ? "Add to cart" : "Not avilable"}</button
	>
</div>

<style>
	.card {
		@apply flex
			flex-col
			items-center
			justify-end
			gap-3
			p-3
			w-44
			bg-light
			rounded-xl;
	}

	.image-holder {
		@apply bg-white
			h-36
			w-full
			rounded-xl
			flex
			items-center
			justify-center
			overflow-hidden;
	}
</style>
