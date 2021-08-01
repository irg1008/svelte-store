<script lang="ts">
	import "../app.postcss"; // Global styles.
	import { theme as currentTheme } from "$lib/stores/theme"; // Current Theme.
	import Header from "$lib/components/organisms/Header.svelte";
</script>

<svelte:head>
	<title>Svelte Store</title>
</svelte:head>

<div class="{$currentTheme}">
	<Header />
	<main>
		<slot />
	</main>
	<footer></footer>
</div>
