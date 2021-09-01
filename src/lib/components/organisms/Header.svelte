<script lang="ts">
	import Nav from "$lib/components/molecules/Nav.svelte";
</script>

<header>
	<Nav />
</header>

<style lang="postcss">
	header {
		@apply z-10
			w-full
			fixed
			top-0
			left-0;
	}
</style>
