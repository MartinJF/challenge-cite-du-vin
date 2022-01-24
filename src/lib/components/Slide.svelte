<script lang="ts">
	export let classes: string;
	export let id: string;
	export let bg: string = '';
	// console.log(classes);
</script>

<div
	class="slide h-screen flex justify-center items-start xl:px-64 lg:px-40 md:px-14 px-5 {classes}"
	{id}
	style="background-image: url({bg});"
>
	<slot />
</div>

<style>
	.slide {
		scroll-snap-align: start;
		scroll-snap-stop: always;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
