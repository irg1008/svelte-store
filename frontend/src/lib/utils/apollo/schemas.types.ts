interface Image {
	url: string;
}

interface Product {
	id: string;
	name: string;
	slug: string;
	price: number;
	available: boolean;
	images: Image[];
	description: {
		text: string;
	};
}

export type { Product };
