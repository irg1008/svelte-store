<script lang="ts">
	import { setTheme } from "$lib/stores/theme";
	import { onMount } from "svelte";

	onMount(() => {
		setTheme();
	});
</script>

<slot />
