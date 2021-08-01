<script lang="ts">
	import { page } from "$app/stores";

	
</script>

<svelte:head>
	<title>{$page.params.productId}</title>
</svelte:head>

<p>Displaying information about product: {$page.params.productId}</p>
