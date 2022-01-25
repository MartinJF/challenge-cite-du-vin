<script lang="ts">
	import Dots from '$lib/components/Dots.svelte';
	import { Page, News } from '$lib/interface';
	export let pages: Array<Page | News>;
</script>

<div class="w-screen h-screen">
	<Dots fixed direction="col" dots={pages} on:slideButton />
	<slot />
</div>
