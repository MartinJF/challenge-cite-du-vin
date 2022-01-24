<script lang="ts">
	export let classes: string;
	export let id: string;
	// console.log(classes);
</script>

<div class="slide h-screen flex justify-center items-start p-96 {classes}" {id}>
	<slot />
</div>

<style>
	.slide {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
</style>
