<script lang="ts">
	const images = [
		"/img/1.jpg",
		"/img/2.jpg",
		"/img/3.jpg",
		"/img/4.jpg",
		"/img/5.jpg",
		"/img/6.jpg",
	];

	let activeIndex = 0;

	let carousel: HTMLDivElement;

	const onScroll = () => {
		const currentIndex = Math.round(
			(carousel.scrollTop / carousel.scrollHeight) * images.length,
		);
		activeIndex = currentIndex;
	};

	const swapItem = (target: EventTarget & HTMLElement) => {
		target.scrollIntoView();
	};

	const goToPosition = (position: number) => {
		const target = document.getElementById(images[position]);
		swapItem(target);
	};
</script>

<div class="flex">
	<div class="carousel" bind:this={carousel} on:scroll={onScroll}>
		{#each images as image, i}
			<section
				id={image}
				class="item"
				on:click={({ currentTarget }) => swapItem(currentTarget)}
			>
				<img src={image} alt={(i + 1).toString()} />
			</section>
		{/each}
	</div>

	<div class="controls">
		{#each images as image, i}
			<div title={image} on:click={() => goToPosition(i)} class="control-item">
				<div class="control-inner" class:active={activeIndex === i} />
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.carousel {
		@apply snap
			snap-y
			flex
			flex-col
			gap-5
			overflow-y-scroll;
		height: 85vh;
		scroll-behavior: smooth;
	}

	.carousel::-webkit-scrollbar {
		display: none !important;
	}

	.item {
		@apply snap-center
			cursor-pointer;
	}

	img {
		@apply block
			w-full
			h-full
			object-cover;
	}

	.controls {
		@apply flex
			flex-col
			justify-center
			mt-2
			ml-10
			gap-2;
	}

	.control-item {
		@apply rounded-full
			cursor-pointer
			bg-medium
			w-6
			h-6;
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
