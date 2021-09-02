<script lang="ts">
	import { onMount, setContext } from "svelte";
	import { writable } from "svelte/store";
	import Icon, { ArrowUp, ArrowDown } from "svelte-hero-icons";
	import { useInterval } from "$lib/hooks";
	import type { CarouselContext } from "./Carousel.types";

	export let intervalTime = 10; // Seconds

	let carousel: HTMLDivElement;
	let carouselLength: number;
	let carouselChildrenDistances: number[];
	let activeIndex = writable(0);

	const calculateChildrenDistances = () => {
		const carouselChildrens = Array.from(carousel.children);

		const distancesToTop = carouselChildrens.map((_, i) => {
			const distanceToTop = carouselChildrens
				.slice(0, i)
				.reduce((sum, curr) => (sum += curr.clientHeight), 0);
			return distanceToTop;
		});

		carouselChildrenDistances = distancesToTop;
	};

	onMount(() => {
		carouselLength = carousel.children.length;
		calculateChildrenDistances();
	});

	const getCorrentIndex = (position: number) =>
		position < 0 ? carouselLength - 1 : position % carouselLength;

	const onScroll = () => {
		const scrollPosition = carousel.scrollTop;

		// The active child is the one wich top is closer to the window top given a threshold.
		const activeChild = carouselChildrenDistances.find((distance, i) => {
			const threshold = carousel.children.item(i).clientHeight / 2;
			return distance + threshold >= scrollPosition;
		});

		const activeChildIndex = carouselChildrenDistances.indexOf(activeChild);

		activeIndex.set(getCorrentIndex(activeChildIndex));
		resetInterval();
	};

	const swapItem = (target: Element) => target.scrollIntoView();

	const goToPosition = (position: number) => {
		const correctIndex = getCorrentIndex(position);
		const target = carousel.children.item(correctIndex);
		swapItem(target);
		resetInterval();
	};

	const goUp = () => goToPosition($activeIndex - 1);
	const goDown = () => goToPosition($activeIndex + 1);

	const { resetInterval, value } = useInterval(goDown, intervalTime * 1000);

	setContext<CarouselContext>("CarouselContext", {
		activeIndex,
		goToPosition,
		swapItem,
	});
</script>

<svelte:window on:resize={calculateChildrenDistances} />

<div class="carousel-container">
	<div class="carousel" bind:this={carousel} on:scroll={onScroll}>
		<slot />
	</div>
	<div class="controls">
		<div class="arrow up" on:click={goUp}>
			<Icon src={ArrowUp} />
		</div>
		{#each Array(carouselLength) as _, i}
			<div
				title="Go to position {i + 1}"
				on:click={() => goToPosition(i)}
				class:active={$activeIndex === i}
				class="control-item"
			/>
		{/each}
		<div class="arrow down" on:click={goDown}>
			<Icon src={ArrowDown} />
		</div>
		<div class="remaining-time">
			{$value}
		</div>
	</div>
</div>

<style lang="postcss">
	.carousel-container {
		@apply w-full
			h-full
			overflow-hidden
			relative;
	}

	.carousel {
		@apply snap
			snap-y
			overflow-y-scroll
			relative
      h-full
      w-full;
		scroll-snap-points-y: repeat(100vh);
		scroll-padding: 30px;
		scroll-behavior: smooth;
	}

	.carousel::-webkit-scrollbar {
		display: none !important;
	}

	.remaining-time {
		@apply bg-primary
			text-lighter
			rounded-custom
			w-8
			text-center
			p-2;
	}

	.arrow {
		@apply w-8
      h-8
      my-4
			cursor-pointer
			bg-lighter
			rounded-custom
			p-2
      ease-in-out
			transition-transform
      duration-200;
	}

	.up {
		@apply top-0
    hover:-translate-y-1;
	}

	.down {
		@apply bottom-0
      hover:translate-y-1;
	}

	.controls {
		@apply flex
			flex-col
			justify-center
			items-center
			mr-10
			absolute
			right-0
			bottom-1/2
			transition-opacity
			duration-300
			ease-in-out
			transform
			translate-y-1/2
			opacity-0
			gap-2;
	}

	.carousel-container:hover > .controls {
		@apply opacity-100;
	}

	.control-item {
		@apply rounded-full
			cursor-pointer
			bg-dark
			transition-all
			border-light
			border-2
			w-3
			h-3;
	}

	.control-item:not(.active) {
		@apply opacity-80 
			hover:bg-medium
			hover:scale-150;
	}

	.active {
		@apply bg-primary
			duration-200;
	}
</style>
