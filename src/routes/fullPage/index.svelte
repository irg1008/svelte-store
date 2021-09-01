<script lang="ts">
	import Icon, { ArrowUp, ArrowDown } from "svelte-hero-icons";

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

	const getCorrentIndex = (position: number) =>
		position < 0 ? imagesLength - 1 : position % imagesLength;

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
		const correctIndex = getCorrentIndex(position);
		const target = document.getElementById(images[correctIndex]);
		swapItem(target);
	};

	const goUp = () => goToPosition(activeIndex - 1);
	const goDown = () => goToPosition(activeIndex + 1);
</script>

<div class="carousel" bind:this={carousel} on:scroll={onScroll}>
	{#each images as image, i}
		<section
			id={image}
			class="item"
			on:click={({ currentTarget }) => swapItem(currentTarget)}
		>
			<h1>Image {i + 1}</h1>
			<img src={image} alt={(i + 1).toString()} />
		</section>
	{/each}
</div>

<button class="up" on:click={goUp}><Icon src={ArrowUp} /></button>
<button class="down" on:click={goDown}><Icon src={ArrowDown} /></button>

<style lang="postcss">
	.carousel {
		@apply snap
			snap-y
			overflow-y-scroll
      h-screen
      w-full;
		scroll-snap-points-y: repeat(100vh);
		scroll-behavior: smooth;
	}

	.carousel::-webkit-scrollbar {
		display: none !important;
	}

	.item {
		@apply snap-start
			cursor-pointer
      relative
      w-full
      h-full;
	}

	img {
		@apply block
			w-full
      h-full
			object-cover;
	}

	h1 {
		@apply absolute
      text-center
      transform
      right-1/2
      bottom-1/2
      translate-x-1/2
      translate-y-1/2
      text-white
      font-bold
      uppercase
      text-8xl;
	}

	button {
		@apply fixed
      w-4
      h-4
      m-2
      right-1/2
      translate-x-1/2
      transform
      transition-transform
      ease-in-out
      hover:scale-x-90
      duration-200;
	}

	.up {
		@apply top-0
    hover:translate-y-2;
	}

	.down {
		@apply bottom-0
      hover:-translate-y-2;
	}
</style>
