<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<!-- decorations -->
<div class="parallax">
	<span class="seule-fg">
		<picture>
			<img src="seule fg.png" alt="Säule vorne" draggable="false" />
		</picture>
	</span>
	<main>
		<slot />
	</main>

	<span class="seule-bg">
		<picture>
			<img src="seule bg.png" alt="Säule im Hintergrund" draggable="false" />
		</picture>
	</span>
</div>

<footer>
	<p>&copy; 2022 Schlosskeller Darmstadt</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 95vw;
		margin: 0 auto;
		box-sizing: border-box;
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
	.parallax {
		perspective: 1px;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.seule-bg {
		transform: translateZ(-13px) scale(13);
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		z-index: -20;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
