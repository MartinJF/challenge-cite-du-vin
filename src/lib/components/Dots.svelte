<script lang="ts">
	import { Dot } from '$lib/interface';
	export let dots: Array<Dot>;
</script>

<ul class="dots">
	{#each dots as dot}
		<a href="#{dot.anchor}">
			<li class:active={dot.active}>
				{#if dot.active}
					{dot.name}
				{/if}a
			</li>
		</a>
	{/each}
</ul>

<style>
	.dots {
		position: fixed;
		background: red;
		color: white;
		right: 40px;
		top: 50%;
	}
</style>
