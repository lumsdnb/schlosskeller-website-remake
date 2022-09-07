<script>
	import EventBlock from '$lib/EventBlock.svelte';
	import { eventStore } from '$lib/eventStore';
</script>

<svelte:head>
	<title>Schlosskeller Darmstadt</title>
	<meta name="description" content="Kultur im Keller" />
</svelte:head>

<section>
	<span class="seule-fg">
		<picture>
			<img src="seule fg.png" alt="Säule vorne" draggable="false" />
		</picture>
	</span>
	{#each $eventStore as e}
		<EventBlock name={e.name} description={e.description} date={e.datum} tags={e.tags} />
	{/each}
</section>
<span class="seule-bg">
	<picture>
		<img src="seule bg.png" alt="Säule im Hintergrund" draggable="false" />
	</picture>
</span>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		z-index: 0;
		margin-top: 4rem;
	}

	.seule-fg {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		top: -2rem;
		left: 0;
		padding: 0;
	}

	.seule-bg {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		z-index: -20;
	}
</style>
