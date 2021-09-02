<script lang="ts">
	import Carousel, { Item } from "$lib/components/molecules/Carousel";

	const images = [
		"/img/1.jpg",
		"/img/2.jpg",
		"/img/3.jpg",
		"/img/4.jpg",
		"/img/5.jpg",
		"/img/6.jpg",
	];
</script>

<div class="container">
	<Carousel>
		{#each images as image, i}
			<Item>
				<h1 class="centered-text">Image {i + 1}</h1>
				<img src={image} alt={(i + 1).toString()} />
			</Item>
		{/each}
		<Item>
			<div class="info">
				<h1>Info</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
					exercitationem inventore cupiditate eaque cumque? Debitis error
					laudantium mollitia sed nemo sint reprehenderit, deleniti aliquam,
					quaerat inventore dignissimos consequatur aperiam veritatis? Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Incidunt dicta ea
					est ipsum veritatis, pariatur accusamus eius similique delectus
					recusandae blanditiis dolorum aspernatur voluptatum architecto autem
					molestiae aliquam libero suscipit! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Similique libero atque voluptates error
					doloribus voluptate rerum facere, consequatur rem? In facere illum
					adipisci quidem ab cum cupiditate ex molestiae ut! Lorem ipsum dolor
					sit, amet consectetur adipisicing elit. Numquam pariatur delectus sunt
					officiis dolore aliquid accusantium magni modi, nisi enim beatae eius
					harum iusto. Ipsa expedita repudiandae modi blanditiis nihil? Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
					facilis delectus cum eum non repellendus rem doloribus tempora,
					quisquam unde quam illo quidem placeat nam quis aliquam porro suscipit
					sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
					laborum maxime, facilis nam laudantium voluptate quasi doloribus,
					magnam labore rerum at nisi eligendi odit suscipit veniam vitae sint
					quas tempore. Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Cupiditate ipsa odio nulla? Nesciunt veniam quis vero nemo fugit
					necessitatibus, molestiae, nostrum consequatur earum illum neque natus
					deleniti ratione aspernatur nihil?
				</p>
			</div>
		</Item>
	</Carousel>
</div>
<div class="container">
	<Carousel>
		{#each images as image, i}
			<Item>
				<h1 class="centered-text">Image {i + 1}</h1>
				<img src={image} alt={(i + 1).toString()} />
			</Item>
		{/each}
		<Item>
			<div class="info">
				<h1>Info</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
					exercitationem inventore cupiditate eaque cumque? Debitis error
					laudantium mollitia sed nemo sint reprehenderit, deleniti aliquam,
					quaerat inventore dignissimos consequatur aperiam veritatis? Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Incidunt dicta ea
					est ipsum veritatis, pariatur accusamus eius similique delectus
					recusandae blanditiis dolorum aspernatur voluptatum architecto autem
					molestiae aliquam libero suscipit! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Similique libero atque voluptates error
					doloribus voluptate rerum facere, consequatur rem? In facere illum
					adipisci quidem ab cum cupiditate ex molestiae ut! Lorem ipsum dolor
					sit, amet consectetur adipisicing elit. Numquam pariatur delectus sunt
					officiis dolore aliquid accusantium magni modi, nisi enim beatae eius
					harum iusto. Ipsa expedita repudiandae modi blanditiis nihil? Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
					facilis delectus cum eum non repellendus rem doloribus tempora,
					quisquam unde quam illo quidem placeat nam quis aliquam porro suscipit
					sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
					laborum maxime, facilis nam laudantium voluptate quasi doloribus,
					magnam labore rerum at nisi eligendi odit suscipit veniam vitae sint
					quas tempore. Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Cupiditate ipsa odio nulla? Nesciunt veniam quis vero nemo fugit
					necessitatibus, molestiae, nostrum consequatur earum illum neque natus
					deleniti ratione aspernatur nihil?
				</p>
			</div>
		</Item>
	</Carousel>
</div>

<style lang="postcss">
	.container {
		@apply my-10
			w-full;
		height: 40vh;
	}

	img {
		@apply block
			h-screen
			w-full
			object-cover;
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
</style>
