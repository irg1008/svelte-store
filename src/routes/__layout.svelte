<script lang="ts">
	import "../app.postcss"; // Global styles.
	import Header from "$lib/components/organisms/Header.svelte";
</script>

<svelte:head>
	<title>Svelte Store</title>
</svelte:head>

<Header />

<slot />
