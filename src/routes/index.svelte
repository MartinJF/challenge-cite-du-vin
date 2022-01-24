<script lang="ts" context="module">
	export async function load({ fetch }) {
		const jsonLow = await fetch('https://challenge-cite-du-vin.vercel.app//api/GetLowCepage');

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
	import Dots from '$lib/components/Dots.svelte';
	import { Dot } from '$lib/interface';
	import { Wine } from '$lib/interface';
	export let lowCepage: Wine;

	const pages: Array<Dot> = [
		{ name: 'Actualités', active: true, anchor: 'actu', imgPath: '/news.jpg' },
		{ name: 'Découverte', active: false, anchor: 'discovery', imgPath: '/wines.jpg' },
		{ name: 'Footer', active: false, anchor: 'footer' }
	];
</script>

<svelte:head>
	<title>La cité du Vin</title>
</svelte:head>

<Dots dots={pages} />
<Slider>
	<Slide classes={'color-white text-white flex-col'} id={pages[0].anchor} bg={pages[0].imgPath}>
		<h1 class="font-bold text-2xl">
			{pages[0].name}
		</h1>
		<p class="px-8 pt-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime quidem facere sequi
			perspiciatis, beatae quia animi debitis quo. Doloribus, ipsam autem quas rem illum aspernatur?
			Quasi blanditiis praesentium consequatur?
		</p>
		<p class="px-8 pt-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime quidem facere sequi
			perspiciatis, beatae quia animi debitis quo. Doloribus, ipsam autem quas rem illum aspernatur?
			Quasi blanditiis praesentium consequatur?
		</p>
		<p class="px-8 pt-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas impedit
			praesentium deserunt doloribus laborum cumque cupiditate soluta cum deleniti voluptate nobis
			distinctio maiores, totam eius perspiciatis blanditiis asperiores enim! Inventore saepe nihil
			culpa rerum atque architecto, officiis omnis, fugiat molestiae, illum voluptas? Ipsum incidunt
			hic dicta placeat minima iusto inventore nam porro soluta reiciendis assumenda a consectetur,
			illo pariatur.
		</p>
	</Slide>
	<Slide classes={' color-white text-white flex-col'} id={pages[1].anchor} bg={pages[1].imgPath}>
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
	</Slide>
	<Slide classes={'bg-slate-700 color-white text-white flex-col'} id={pages[2].anchor}>
		<h1 class="font-bold text-2xl">
			{pages[2].name}
		</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime quidem facere sequi
			perspiciatis, beatae quia animi debitis quo. Doloribus, ipsam autem quas rem illum aspernatur?
			Quasi blanditiis praesentium consequatur?
		</p>
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
</style>
