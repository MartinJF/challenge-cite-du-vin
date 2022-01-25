<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import { Page } from '$lib/interface';
	const dispatch = createEventDispatcher();
	export let classes: string;
	export let page: Page;
	// const { imgPath, id, active } = page;

	const handleScroll = function (e) {
		// console.log(e);
		dispatch('slideChange', {
			direction: e.wheelDeltaY < 0 ? 1 : -1, // for down -1 for up
			index: page.id
		});
	};

	$: console.log(page);
</script>

{#if page.active}
	<section
		class="h-screen"
		id={page.id.toString()}
		style="background-image: url({page.imgPath});"
		on:wheel|capture={handleScroll}
		transition:slide
	>
		<div
			class="cont h-full flex justify-center items-start xl:px-64 lg:px-40 md:px-14 px-5 {classes}"
		>
			<slot />
		</div>
	</section>
{/if}

<style>
	section {
		background-size: 120vw;
		background-repeat: no-repeat;
	}
</style>
