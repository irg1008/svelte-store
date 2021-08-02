<script lang="ts">
	import "../app.postcss"; // Global styles.
	import Header from "$lib/components/organisms/Header.svelte";
	import { setTheme } from "$lib/stores/theme";
	import { onMount } from "svelte";

	onMount(() => setTheme());
</script>

<svelte:head>
	<title>Svelte Store</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<footer />

<style>
	main {
		@apply p-2
			mt-20;
	}
</style>
