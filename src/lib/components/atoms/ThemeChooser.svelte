<script lang="ts">
	import { theme, themes } from "$lib/stores/theme";
</script>

<h2>Choose the theme (current: {$theme})</h2>

{#each themes as iTheme}
	<label for="{iTheme}"></label>
	<input
		id="{iTheme}"
		type="radio"
		group="{themes}"
		name="themes"
		value="{iTheme}"
		checked="{iTheme === $theme}"
		on:change="{() => theme.set(iTheme)}"
	/>
	{iTheme}
{/each}
