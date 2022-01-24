<script lang="ts">
	import Slider from '$lib/components/Slider.svelte';
	import Slide from '$lib/components/Slide.svelte';
	import Dots from '$lib/components/Dots.svelte';
	import { Dot } from '$lib/interface';

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
	<Slide classes={'bg-slate-900 color-white text-white flex-col'} id={pages[0].anchor}>
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
	<Slide classes={'bg-slate-800 color-white text-white'} id={pages[1].anchor}>
		<h1>
			{pages[1].name}
		</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime quidem facere sequi
			perspiciatis, beatae quia animi debitis quo. Doloribus, ipsam autem quas rem illum aspernatur?
			Quasi blanditiis praesentium consequatur?
		</p>
	</Slide>
	<Slide classes={'bg-slate-700 color-white text-white'} id={pages[2].anchor}>
		<h1>
			{pages[2].name}
		</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime quidem facere sequi
			perspiciatis, beatae quia animi debitis quo. Doloribus, ipsam autem quas rem illum aspernatur?
			Quasi blanditiis praesentium consequatur?
		</p>
	</Slide>
</Slider>
