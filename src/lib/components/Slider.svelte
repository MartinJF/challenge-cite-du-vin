<div class="cont w-screen h-screen">
	<slot />
</div>

<style>
	.cont {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	}
</style>
