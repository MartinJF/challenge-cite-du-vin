<script lang="ts">
	import { Dot } from '$lib/interface';
	export let dots: Array<Dot>;
</script>

<ul class="dots">
	{#each dots as dot}
		<a href="#{dot.anchor}">
			<li class:active={dot.active} class="flex items-center justify-end mt-4 h-6">
				{#if dot.active}
					<span>{dot.name}</span>
				{/if}
				<svg width="10" height="10" class="ml-2">
					<circle cx="5" cy="5" r="5" />
				</svg>
			</li>
		</a>
	{/each}
</ul>

<style>
	.dots {
		position: fixed;
		/* background: red; */
		color: white;
		right: 40px;
		top: 50%;
	}
</style>
