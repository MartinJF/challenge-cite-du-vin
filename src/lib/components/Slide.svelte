<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import { Page } from '$lib/interface';
	const dispatch = createEventDispatcher();
	export let page: Page;
	// const { imgPath, id, active } = page;

	const handleScroll = function (e) {
		// console.log(e);
		dispatch('slideChange', {
			direction: e.wheelDeltaY < 0 ? 1 : -1, // for down -1 for up
			index: page.id
		});
	};

	// $: console.log(page);
</script>

{#if page.active}
	<section
		class="h-screen bg-fixed"
		id={page.id.toString()}
		style="background-image: url({page.imgPath});"
		on:wheel|capture={handleScroll}
		transition:slide
	>
		<slot />
	</section>
{/if}

<style>
	section {
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
