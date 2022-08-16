<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<span class="seule-fg">
		<picture>
			<img src="seule fg.png" alt="Säule vorne" />
		</picture>
	</span>

	Programm! geil

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>
	<article>Event 1</article>
	<article>Event 2</article>
	<article>Event 3</article>
	<article>Event 4</article>
	<article>Event 5</article>
</section>
<span class="seule-bg">
	<picture>
		<img src="seule bg.png" alt="Säule im Hintergrund" />
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
		margin-top: 15rem;
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
		height: 0;
		top: 0;
		left: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		z-index: -20;
	}
</style>
