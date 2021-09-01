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
	let activeIndex = 0;
	let imagesLength: number;

	$: onMount(() => {
		imagesLength = carousel.children.length;
	});

	const getCorrentIndex = (position: number) =>
		position < 0 ? imagesLength - 1 : position % imagesLength;

	const onScroll = () => {
		const currentIndex = Math.round(
			(carousel.scrollTop / carousel.scrollHeight) * imagesLength,
		);
		activeIndex = currentIndex;
	};

	const swapItem = (target: Element) => {
		target.scrollIntoView();
	};

	const goToPosition = (position: number) => {
		const correctIndex = getCorrentIndex(position);
		const target = carousel.children[correctIndex];
		swapItem(target);
	};

	const goUp = () => goToPosition(activeIndex - 1);
	const goDown = () => goToPosition(activeIndex + 1);
</script>

<div class="carousel" bind:this={carousel} on:scroll={onScroll}>
	{#each images as image, i}
		<section class="item">
			<h1 class="centered-text">Image {i + 1}</h1>
			<img src={image} alt={(i + 1).toString()} />
		</section>
	{/each}
	<section class="item">
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
      w-full;
	}

	img {
		@apply block
			h-screen
			w-full
			object-cover;
	}

	.centered-text {
		@apply absolute
			text-center
			transform
			right-1/2
			bottom-1/2
			translate-x-1/2
			translate-y-1/2;
	}

	.info {
		@apply p-6
			bg-dark
			flex
			flex-col
			text-lighter
			gap-6;
	}

	h1 {
		@apply text-white
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
