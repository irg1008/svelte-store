<script context="module" lang="ts">
	import type { LoadOutput } from "@sveltejs/kit";

	const load = (output: LoadOutput) => {
		const { status, error } = output;
		const message = typeof error === "string" ? error : error.message;

		return {
			props: {
				status,
				message,
			},
		};
	};

	export { load };
</script>

<script lang="ts">
	export let status: number;
	export let message: string;
</script>

<svelte:head>
	<title>{`${status}: ${message}`}</title>
</svelte:head>

<div class="text-center">
	<h1>{status}</h1>
	<h2>{message}</h2>
</div>
