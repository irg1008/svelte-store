<script lang="ts">
	import { onMount } from "svelte";
	import Icon, { ArrowUp, ArrowDown } from "svelte-hero-icons";

	const images = [
		"/img/1.jpg",
		"/img/2.jpg",
		"/img/3.jpg",
		"/img/4.jpg",
		"/img/5.jpg",
		"/img/6.jpg",
	];

	let carousel: HTMLDivElement;
	let carouselLength: number;
	let carouselChildrenDistances: number[];
	let activeIndex = 0;

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
		const threshold = 30;

		const activeChild = carouselChildrenDistances.find(
			(distance) => distance + threshold >= scrollPosition,
		);

		const activeChildIndex = carouselChildrenDistances.indexOf(activeChild);

		activeIndex = getCorrentIndex(activeChildIndex);
	};

	const swapItem = (target: Element) => target.scrollIntoView();

	const goToPosition = (position: number) => {
		const correctIndex = getCorrentIndex(position);
		const target = carousel.children.item(correctIndex);
		swapItem(target);
	};

	const goUp = () => goToPosition(activeIndex - 1);
	const goDown = () => goToPosition(activeIndex + 1);
</script>

<svelte:window on:resize={calculateChildrenDistances} />

<div class="carousel" bind:this={carousel} on:scroll={onScroll}>
	{#each images as image, i}
		<section
			class="item"
			class:activeSection={activeIndex === i}
			on:click={() => goToPosition(i)}
		>
			<h1 class="centered-text">Image {i + 1}</h1>
			<img src={image} alt={(i + 1).toString()} />
		</section>
	{/each}
	<section
		class="item"
		class:activeSection={activeIndex === carouselLength - 1}
		on:click={() => goToPosition(carouselLength - 1)}
	>
		<div class="info">
			<h1>Info</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
				exercitationem inventore cupiditate eaque cumque? Debitis error
				laudantium mollitia sed nemo sint reprehenderit, deleniti aliquam,
				quaerat inventore dignissimos consequatur aperiam veritatis? Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Incidunt dicta ea est
				ipsum veritatis, pariatur accusamus eius similique delectus recusandae
				blanditiis dolorum aspernatur voluptatum architecto autem molestiae
				aliquam libero suscipit! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Similique libero atque voluptates error doloribus
				voluptate rerum facere, consequatur rem? In facere illum adipisci quidem
				ab cum cupiditate ex molestiae ut! Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Numquam pariatur delectus sunt officiis
				dolore aliquid accusantium magni modi, nisi enim beatae eius harum
				iusto. Ipsa expedita repudiandae modi blanditiis nihil? Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Perspiciatis facilis
				delectus cum eum non repellendus rem doloribus tempora, quisquam unde
				quam illo quidem placeat nam quis aliquam porro suscipit sint. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Illum laborum maxime,
				facilis nam laudantium voluptate quasi doloribus, magnam labore rerum at
				nisi eligendi odit suscipit veniam vitae sint quas tempore. Lorem ipsum,
				dolor sit amet consectetur adipisicing elit. Cupiditate ipsa odio nulla?
				Nesciunt veniam quis vero nemo fugit necessitatibus, molestiae, nostrum
				consequatur earum illum neque natus deleniti ratione aspernatur nihil?
			</p>
			<h1>Info</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
				exercitationem inventore cupiditate eaque cumque? Debitis error
				laudantium mollitia sed nemo sint reprehenderit, deleniti aliquam,
				quaerat inventore dignissimos consequatur aperiam veritatis? Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Incidunt dicta ea est
				ipsum veritatis, pariatur accusamus eius similique delectus recusandae
				blanditiis dolorum aspernatur voluptatum architecto autem molestiae
				aliquam libero suscipit! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Similique libero atque voluptates error doloribus
				voluptate rerum facere, consequatur rem? In facere illum adipisci quidem
				ab cum cupiditate ex molestiae ut! Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Numquam pariatur delectus sunt officiis
				dolore aliquid accusantium magni modi, nisi enim beatae eius harum
				iusto. Ipsa expedita repudiandae modi blanditiis nihil? Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Perspiciatis facilis
				delectus cum eum non repellendus rem doloribus tempora, quisquam unde
				quam illo quidem placeat nam quis aliquam porro suscipit sint. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Illum laborum maxime,
				facilis nam laudantium voluptate quasi doloribus, magnam labore rerum at
				nisi eligendi odit suscipit veniam vitae sint quas tempore. Lorem ipsum,
				dolor sit amet consectetur adipisicing elit. Cupiditate ipsa odio nulla?
				Nesciunt veniam quis vero nemo fugit necessitatibus, molestiae, nostrum
				consequatur earum illum neque natus deleniti ratione aspernatur nihil?
			</p>
			<h1>Info</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
				exercitationem inventore cupiditate eaque cumque? Debitis error
				laudantium mollitia sed nemo sint reprehenderit, deleniti aliquam,
				quaerat inventore dignissimos consequatur aperiam veritatis? Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Incidunt dicta ea est
				ipsum veritatis, pariatur accusamus eius similique delectus recusandae
				blanditiis dolorum aspernatur voluptatum architecto autem molestiae
				aliquam libero suscipit! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Similique libero atque voluptates error doloribus
				voluptate rerum facere, consequatur rem? In facere illum adipisci quidem
				ab cum cupiditate ex molestiae ut! Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Numquam pariatur delectus sunt officiis
				dolore aliquid accusantium magni modi, nisi enim beatae eius harum
				iusto. Ipsa expedita repudiandae modi blanditiis nihil? Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Perspiciatis facilis
				delectus cum eum non repellendus rem doloribus tempora, quisquam unde
				quam illo quidem placeat nam quis aliquam porro suscipit sint. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Illum laborum maxime,
				facilis nam laudantium voluptate quasi doloribus, magnam labore rerum at
				nisi eligendi odit suscipit veniam vitae sint quas tempore. Lorem ipsum,
				dolor sit amet consectetur adipisicing elit. Cupiditate ipsa odio nulla?
				Nesciunt veniam quis vero nemo fugit necessitatibus, molestiae, nostrum
				consequatur earum illum neque natus deleniti ratione aspernatur nihil?
			</p>
			<h1>Info</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
				exercitationem inventore cupiditate eaque cumque? Debitis error
				laudantium mollitia sed nemo sint reprehenderit, deleniti aliquam,
				quaerat inventore dignissimos consequatur aperiam veritatis? Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Incidunt dicta ea est
				ipsum veritatis, pariatur accusamus eius similique delectus recusandae
				blanditiis dolorum aspernatur voluptatum architecto autem molestiae
				aliquam libero suscipit! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Similique libero atque voluptates error doloribus
				voluptate rerum facere, consequatur rem? In facere illum adipisci quidem
				ab cum cupiditate ex molestiae ut! Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Numquam pariatur delectus sunt officiis
				dolore aliquid accusantium magni modi, nisi enim beatae eius harum
				iusto. Ipsa expedita repudiandae modi blanditiis nihil? Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Perspiciatis facilis
				delectus cum eum non repellendus rem doloribus tempora, quisquam unde
				quam illo quidem placeat nam quis aliquam porro suscipit sint. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Illum laborum maxime,
				facilis nam laudantium voluptate quasi doloribus, magnam labore rerum at
				nisi eligendi odit suscipit veniam vitae sint quas tempore. Lorem ipsum,
				dolor sit amet consectetur adipisicing elit. Cupiditate ipsa odio nulla?
				Nesciunt veniam quis vero nemo fugit necessitatibus, molestiae, nostrum
				consequatur earum illum neque natus deleniti ratione aspernatur nihil?
			</p>
		</div>
	</section>
</div>

<div class="controls">
	<div class="arrow up" on:click={goUp}>
		<Icon src={ArrowUp} />
	</div>
	{#each Array(carouselLength) as _, i}
		<div
			title="Go to position {i + 1}"
			on:click={() => goToPosition(i)}
			class:active={activeIndex === i}
			class="control-item"
		/>
	{/each}
	<div class="arrow down" on:click={goDown}>
		<Icon src={ArrowDown} />
	</div>
</div>

<style lang="postcss">
	.carousel {
		@apply snap
			snap-y
			overflow-y-scroll
      h-screen
      w-full;
		scroll-snap-points-y: repeat(100vh);
		scroll-padding: 30px;
		scroll-behavior: smooth;
	}

	.carousel::-webkit-scrollbar {
		display: none !important;
	}

	.item {
		@apply snap-start
			cursor-pointer
      relative
			transition-opacity
			duration-300
			delay-100
      w-full;
	}

	img {
		@apply block
			h-screen
			w-full
			object-cover;
	}

	.item:not(.activeSection) {
		@apply opacity-20;
	}

	.centered-text {
		@apply absolute
		text-white
			text-center
			transform
			right-1/2
			bottom-1/2
			translate-x-1/2
			translate-y-1/2;
	}

	.info {
		@apply p-6
			bg-darker
			flex
			flex-col
			text-lighter
			gap-6;
	}

	h1 {
		@apply font-bold
      uppercase
      text-8xl;
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
			m-10
			absolute
			right-0
			bottom-1/2
			transform
			translate-y-1/2
			gap-2;
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
