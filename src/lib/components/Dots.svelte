<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { flip } from 'svelte/animate';
	import { Page } from '$lib/interface';
	const dispatch = createEventDispatcher();
	export let dots: Array<Page>;
	$: innerWidth = 0;
	// $: console.log(innerWidth >= 768);

	const handleClick = function (i) {
		// console.log(e);
		dispatch('slideButton', { index: i });
	};
</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= 768}
	<ul class="dots flex flex-col items-center justify-center">
		{#each dots as dot, i}
			<li
				class:active={dot.active}
				class="flex items-center justify-end mt-4 h-6 cursor-pointer"
				on:click={() => handleClick(i)}
			>
				<svg width="10" height="10" class="ml-2" class:active={dot.active}>
					<circle cx="5" cy="5" r="5" />
				</svg>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.dots {
		position: fixed;
		/* background: red; */
		color: white;
		right: 30px;
		top: 50%;
		z-index: 100;
	}

	svg {
		transition: all 0.5s ease;
	}

	.active {
		transform: scale(1.5);
		transition: transform 0.5s;
	}
</style>
