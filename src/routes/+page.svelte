<script>
	import EventBlock from '$lib/EventBlock.svelte';
	import { eventStore } from '$lib/eventStore';
</script>

<svelte:head>
	<title>Schlosskeller Darmstadt</title>
	<meta name="description" content="Kultur im Keller" />
</svelte:head>

<section>
	{#each $eventStore as e}
		<EventBlock name={e.name} description={e.description} date={e.datum} tags={e.tags} />
	{/each}
</section>

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
</style>
