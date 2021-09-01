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
	const imagesLength = images.length;

	let carousel: HTMLDivElement;

	const onScroll = () => {
		const currentIndex = Math.round(
			(carousel.scrollTop / carousel.scrollHeight) * imagesLength,
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
</div>

<style lang="postcss">
	.carousel {
		@apply snap
			snap-y
			overflow-y-scroll;
    scroll-snap-points-y: repeat(100vh);
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
</style>
