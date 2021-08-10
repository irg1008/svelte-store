import { readable } from "svelte/store";

type ProductId = string | number;

interface Product {
	id: ProductId;
	slug: string;
	name: string;
	price: number;
	description: string;
	available: boolean;
	image: string;
}

const products = readable<Product[]>([
	{
		id: 1,
		slug: "apple",
		name: "Apple",
		image:
			"https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png",
		price: 10,
		available: true,
		description: "Is Apple",
	},
	{
		id: 2,
		slug: "orange",
		name: "Orange",
		image:
			"https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg",
		price: 11,
		available: true,
		description: "Is Orange",
	},
	{
		id: 3,
		slug: "grapes",
		name: "Grapes",
		image:
			"https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg",
		price: 12,
		available: false,
		description: "Is Grapes",
	},
]);

export { products };
export type { Product, ProductId };
