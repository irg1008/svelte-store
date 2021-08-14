import fetch from "node-fetch";

const getProducts = () => {
	const url = "/api/products";
	const res = fetch(url, { method: "GET" });
	return res;
};

export { getProducts };
