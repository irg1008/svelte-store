<script lang="ts">
	import { theme, themes } from "$lib/stores/theme";
</script>

<div class="flex flex-col gap-2 p-2">
	<h2>Choose the theme (current: {$theme})</h2>
	{#each themes as iTheme}
		<label>
			<input
				type="radio"
				name="themes"
				value={iTheme}
				checked={iTheme === $theme}
				on:change={() => theme.set(iTheme)}
			/>
			{iTheme}</label
		>
	{/each}
</div>
