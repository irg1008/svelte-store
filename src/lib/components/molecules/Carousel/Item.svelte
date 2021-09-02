<script lang="ts">
	import { getContext, onMount } from "svelte";
	import type { CarouselContext } from "./Carousel.types";

	const { activeIndex, goToPosition } =
		getContext<CarouselContext>("CarouselContext");

	let item: HTMLElement;
	let i: number;

	onMount(() => {
		i = Array.from(item.parentElement.children).indexOf(item);
	});
</script>

<section
	class="item"
	bind:this={item}
	class:activeSection={$activeIndex === i}
	on:click={() => goToPosition(i)}
>
	<slot />
</section>

<style lang="postcss">
	.item {
		@apply snap-start
			cursor-pointer
      relative
			transition-opacity
			duration-300
			delay-100
      w-full
			h-full;
	}

	.item:not(.activeSection) {
		@apply opacity-20;
	}
</style>
