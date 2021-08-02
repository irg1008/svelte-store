import { writable } from "svelte-local-storage-store";
import { get } from "svelte/store";

import type { Product, ProductId } from "$lib/stores/products";

interface Item {
	product: Product;
	quantity: number;
}

type Cart = Item[];

const emptyCart: Cart = [];

const cart = writable<Cart>("cart", emptyCart);

const getProductFromCart = (productId: ProductId) => {
	const currentCart = get(cart);
	const productInCart = currentCart.find(
		(item) => item.product.id === productId,
	);

	return productInCart;
};

const addProduct = (product: Product): void => {
	cart.update((cart) => {
		const productInCart = getProductFromCart(product.id);

		if (productInCart) productInCart.quantity++;
		else cart.push({ product, quantity: 1 });

		return cart;
	});
};

const removeProduct = (productId: ProductId): void => {
	cart.update((cart) => {
		const productInCart = getProductFromCart(productId);

		if (productInCart) {
			if (productInCart.quantity > 1) productInCart.quantity--;
			else cart = cart.filter((item) => item !== productInCart);
		}

		return cart;
	});
};

export { cart, addProduct, removeProduct };
export type { Product };
