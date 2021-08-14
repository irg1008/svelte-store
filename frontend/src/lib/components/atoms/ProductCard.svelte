<script lang="ts">
	import type { Product } from "$lib/utils/apollo/schemas.types";
	import { cart } from "$lib/stores/cart";

	export let product: Product;
	const { images, name, price, available, slug } = product;

	const addProductToCart = () => cart.addProduct(product);
</script>

<div class="card">
	<div class="image-holder">
		<img src={images[0].url} alt={name} />
	</div>
	<h1>{name}</h1>
	<h2>Price: {price}$</h2>
	<button on:click={addProductToCart} disabled={!available}>
		{available ? "Add to cart" : "Not available"}
	</button>
	<a href="/products/{slug}">
		<button> Details </button>
	</a>
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
