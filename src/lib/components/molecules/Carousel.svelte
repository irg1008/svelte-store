<script lang="ts">
	import { goto } from "$app/navigation";
	import { useInterval } from "$lib/hooks";

	const images = [
		"/img/1.jpg",
		"/img/2.jpg",
		"/img/3.jpg",
		"/img/4.jpg",
		"/img/5.jpg",
		"/img/6.jpg",
	];
	const maxIndex = images.length;

	let activeIndex = 0;

	const incrementIndex = () => {
		const newIndex = (activeIndex + 1) % maxIndex;
		swapItem(newIndex);
	};

	const swapItem = (position: number, reset?: boolean) => {
		goto(`./#${images[position]}`);
		activeIndex = position;
		if (reset) resetInterval();
	};

	const { resetInterval } = useInterval(incrementIndex, 4000);
</script>

<div class="carousel">
	{#each images as image, i}
		<section id={image} class="item">
			<img src={image} alt={(i + 1).toString()} />
		</section>
	{/each}
</div>

<div class="controls">
	{#each images as image, i}
		<div title={image} on:click={() => swapItem(i, true)} class="control-item">
			<div class="control-inner" class:active={activeIndex === i} />
		</div>
	{/each}
</div>

<style>
	.carousel {
		@apply snap
			snap-x
			flex
			overflow-x-hidden;
		scroll-behavior: smooth;
	}

	.item {
		@apply w-full
			flex-shrink-0
			snap-start;
	}

	img {
		@apply block
			w-full
			h-full
			object-cover;
	}

	.controls {
		@apply flex
			justify-center
			mt-2
			gap-2;
	}

	.control-item {
		@apply rounded-full
			cursor-pointer
			bg-medium;
	}

	.control-inner {
		@apply transform
			transition-all
			rounded-full
			p-2
			m-1
			bg-dark;
	}

	.control-item:hover > .control-inner:not(.active) {
		@apply bg-darker;
	}

	.active {
		@apply bg-primary
			duration-200;
	}
</style>
