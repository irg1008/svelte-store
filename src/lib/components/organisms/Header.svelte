<script lang="ts">
	import { theme as currentTheme } from "$lib/stores/theme";
	import ThemePicker from "$lib/components/atoms/ThemeChooser.svelte";
</script>

<div class="{$currentTheme} bg-primary text-primary">
	<ThemePicker />
</div>
