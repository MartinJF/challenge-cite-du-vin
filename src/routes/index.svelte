<script lang="ts" context="module">
	export async function load({ fetch }) {
		const url = import.meta.env.VITE_API_URL;
		const jsonLow = await fetch(`${url}/api/GetLowCepage`);

		return {
			props: {
				lowCepage: await jsonLow.json()
			}
		};
	}
</script>

<script lang="ts">
	import Slider from '$lib/components/Slider.svelte';
	import Slide from '$lib/components/Slide.svelte';
	import ArrowDown from '$lib/components/ArrowDown.svelte';
	import { Page } from '$lib/interface';
	import { Wine } from '$lib/interface';
	export let lowCepage: Wine;

	let pages: Array<Page> = [
		{ id: 0, name: 'Actualités', active: false, anchor: 'actu', imgPath: '/news.jpg' },
		{ id: 1, name: 'Découverte', active: false, anchor: 'discovery', imgPath: '/wines.jpg' },
		{ id: 2, name: 'Footer', active: true, anchor: 'footer' }
	];

	let scrollAvailable = true;

	const handleSlideChange = function (e) {
		if (scrollAvailable) {
			const { direction, index } = e.detail;
			if (pages[index].active && index + direction > -1 && index + direction < pages.length) {
				// console.log(`direction: ${direction}, index: ${index}`);
				pages[index].active = false;
				pages[index + direction].active = true;

				pages = pages;
				scrollAvailable = false;
				setTimeout(() => (scrollAvailable = true), 1500);
			}
		}
	};

	const handleSlideButton = function (e) {
		const { index } = e.detail;
		pages.forEach((p) => (p.active = false));
		pages[index].active = true;
		pages = pages;
	};

	// $: console.log(pages);
</script>

<svelte:head>
	<link
		rel="icon"
		sizes="32x32"
		href="https://www.laciteduvin.com/packs/media/images/favicons/favicon-32x32-5079c424a07cb942094695047e4cd14b.png"
	/>
	<link
		rel="icon"
		sizes="16x16"
		href="https://www.laciteduvin.com/packs/media/images/favicons/favicon-16x16-94bab1ce209a71fc3b7ee781b1b41f79.png"
	/>
	<title>La cité du Vin</title>
</svelte:head>

<Slider {pages} on:slideButton={handleSlideButton}>
	<Slide bind:page={pages[0]} on:slideChange={handleSlideChange}>
		<div class="slide xl:px-64 lg:px-40 md:px-14 px-5">
			<div class="box rounded-md px-4 py-9">
				<h1 class="font-bold text-2xl">
					{pages[0].name}
				</h1>
				<p class="px-8 pt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime quidem facere sequi
					perspiciatis, beatae quia animi debitis quo. Doloribus, ipsam autem quas rem illum
					aspernatur? Quasi blanditiis praesentium consequatur?
				</p>
				<p class="px-8 pt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime quidem facere sequi
					perspiciatis, beatae quia animi debitis quo. Doloribus, ipsam autem quas rem illum
					aspernatur? Quasi blanditiis praesentium consequatur?
				</p>
				<p class="px-8 pt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas impedit
					praesentium deserunt doloribus laborum cumque cupiditate soluta cum deleniti voluptate
					nobis distinctio maiores, totam eius perspiciatis blanditiis asperiores enim! Inventore
					saepe nihil culpa rerum atque architecto, officiis omnis, fugiat molestiae, illum
					voluptas? Ipsum incidunt hic dicta placeat minima iusto inventore nam porro soluta
					reiciendis assumenda a consectetur, illo pariatur.
				</p>
			</div>
		</div>
	</Slide>
	<Slide bind:page={pages[1]} on:slideChange={handleSlideChange}>
		<div class="slide xl:px-64 lg:px-40 md:px-14 px-5">
			<div class="box rounded-md px-4 py-9">
				<h1 class="font-bold text-2xl">
					{pages[1].name}
				</h1>
				<div class="container flex flex-col justify-start pl-8 pt-4">
					<h2>Titre :</h2>
					<span>{lowCepage.title}</span>

					<h2>Pays d'origine :</h2>
					<span>{lowCepage.country}</span>

					<h2>Description :</h2>
					<span>{lowCepage.description}</span>

					{#if lowCepage.price}
						<h2>Prix :</h2>
						<span>{lowCepage.price}</span>
					{/if}

					<h2>Vignobles :</h2>
					<span>{lowCepage.winery}</span>

					<h2>Variété :</h2>
					<span>{lowCepage.variety}</span>

					<h2>Provinces :</h2>
					<span>{lowCepage.province}</span>
				</div>
			</div>
		</div>
	</Slide>
	<Slide bind:page={pages[2]} on:slideChange={handleSlideChange}>
		<div class="slide !items-center h-full bg-slate-600">
			<div class="flex flex-col items-center justify-center grow xl:px-64 lg:px-40 md:px-14 px-5 ">
				<ArrowDown classes="" />
				<a href="#"><button>boutique</button></a>
			</div>
			<footer class="w-full flex items-center text-center basis-40 bg-gray-900">
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente totam provident
					sunt earum, ea amet ducimus architecto eaque accusamus quisquam deleniti asperiores labore
					nostrum, repellat, fugit assumenda enim! Expedita. Quaerat ea aliquid atque soluta
					accusantium quisquam inventore assumenda animi quibusdam dolor obcaecati ratione, quis
					blanditiis corrupti porro nisi rem laboriosam natus repudiandae. Quaerat natus harum
					veniam quae consequuntur. Delectus? Pariatur atque laborum voluptas qui culpa assumenda
					enim magni voluptates sunt. Corporis nam, veniam quasi velit mollitia commodi eum
					reiciendis provident sunt neque magnam, amet a vel sed officiis. Illum?
				</span>
			</footer>
		</div>
	</Slide>
</Slider>

<style>
	h2 {
		font-weight: 700;
		font-size: 1.25rem /* 20px */;
		line-height: 1.75rem /* 28px */;
	}
	span {
		padding-left: 5px;
	}
	button {
		text-transform: uppercase;
	}
	.slide {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		color: #fff;
		flex-direction: column;
	}
	.box {
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>
