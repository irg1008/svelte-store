<script lang="ts">
	import Meta from "$lib/components/atoms/Meta.svelte";

	const mail = "info@gazquez.art";
</script>

<Meta
	title="Working on it"
	description="This page is a place for art. We will open soon, stay tuned."
/>

<section>
	<div class="bg" />
	<div class="text-container">
		<h1>We are working on it!!</h1>
		<h1>meanwhile...</h1>
		<a href="mailto:{mail}">
			<h2 class="email">{mail}</h2>
		</a>
	</div>
</section>

<style lang="postcss">
	section {
		@apply w-full
			h-screen
			flex
			items-center
			justify-center;
	}

	.bg {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
			url("https://i.giphy.com/Q5idwzxmoRkBdiEVpu.gif");
		filter: contrast(105%) brightness(150%) saturate(150%) hue-rotate(310deg);
		@apply absolute
			w-full
			h-full
			bg-cover;
	}

	.text-container {
		@apply flex
			flex-col
			font-semibold
			gap-4
			animate-fade-in
			z-10;
	}

	h1 {
		@apply text-xl
			w-20
			leading-5
			text-gray-500;
	}

	h2 {
		@apply text-lg;
	}

	a {
		@apply text-white
			-ml-2;
	}

	a::after {
		content: "";
		@apply block
			w-0
			border-b-2
			transition-all
			ease-out
			duration-200
			border-white
			m-auto;
	}

	a:hover::after {
		@apply w-full;
	}
</style>
