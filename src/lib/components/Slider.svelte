<script lang="ts">
	import Dots from '$lib/components/Dots.svelte';
	import { Page } from '$lib/interface';
	export let pages: Array<Page>;
</script>

<div class="w-screen h-screen">
	<Dots dots={pages} />
	<slot />
</div>
