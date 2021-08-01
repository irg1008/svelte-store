<script context="module" lang="ts">
	import type { LoadInput } from "@sveltejs/kit";

	const endpoint = "https://jsonplaceholder.typicode.com";

	const load = async ({ page, fetch }: LoadInput) => {
		const { productId } = page.params;

		const res = await fetch(`${endpoint}/users/${productId}`);

		console.log(res);

		if (res.status === 200) {
			const user = await res.json();
			return { props: { user } };
		}

		// If no product is recieved.
		return { status: res.status, error: res.statusText };
	};

	export { load };
</script>

<script lang="ts">
	export let user: any;
</script>

<svelte:head>
	<title>{user.id}</title>
</svelte:head>

<pre>{JSON.stringify(user, null, 2)}</pre>
