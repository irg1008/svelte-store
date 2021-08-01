<script lang="ts">
	import { theme, themes } from "$lib/stores/theme";
</script>

<div class="flex flex-col gap-2 p-4 bg-light text-dark">
	<label for="theme-select">
		<h2>Choose the theme:</h2>
	</label>
	<select
		id="theme-select"
		class="bg-lighter text-darker rounded-custom"
		bind:value={$theme}
	>
		{#each themes as iTheme}
			<option value={iTheme}>
				{iTheme}
			</option>
		{/each}
	</select>
</div>
