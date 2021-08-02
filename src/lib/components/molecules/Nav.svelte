<script lang="ts">
	import Logo from "$lib/components/atoms/Logo.svelte";
	import ThemePicker from "$lib/components/atoms/ThemePicker.svelte";
</script>

<div class="navbar">
	<a href="/" class="logo">
		<Logo />
	</a>
	<ol class="links">
		<li>
			<a href="/products">products</a>
		</li>
		<li>
			<a href="/cart">cart</a>
		</li>
	</ol>
	<ThemePicker />
</div>

<style>
	.navbar {
		@apply flex
      justify-between
      items-center
      bg-light
      p-3
      fixed
      w-full
      top-0
      left-0;
	}

	.logo {
		@apply h-8;
	}

	.links {
		@apply flex
      items-center
      gap-4
      justify-center;
	}

	li > a {
		@apply hover:underline
      uppercase;
	}
</style>
