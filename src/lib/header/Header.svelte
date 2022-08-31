<script>
	import { page } from '$app/stores';
	import Burger from '$lib/header/Hamburger.svelte';
	let menuState = true;
</script>

<header>
	<nav>
		<span class="pagetitle"
			><a href="/">Schlosskeller</a>
			<Burger menuState /></span
		>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">programm</a></li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/galerie">galerie</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">über_uns</a>
			</li>
		</ul>
	</nav>
</header>

<!-- <style>
	
	
	ul {
		position: absolute;
		top: 6rem;
		right: -128vw;
		padding: 0;
		padding-left: 4rem;
		margin: 0;
		height: 3em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		background: var(--background);
		background-size: contain;
		rotate: 90deg;
		scale: 1.2;
	}

	li {
		width: fit-content;
		--background: #2c2c2c;
	}
	
	/* header span {
		flex-basis: 100%;
		font-size: 2rem;
		flex-basis: 100%;
	} */

	li {
		display: flex;
		height: 100%;
		align-items: space-around;
		padding: 0 0.4rem;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 1.5rem;
	
		transition: color 0.2s linear;
		
		position: relative;
		top: 6rem;
		background-color: var(--background);
	}

</style> -->
<style>
	header {
		position: fixed;
		top: 0.2rem;
		z-index: 1;
		font-size: 2.4rem;
		width: 100%;
		margin: 0.2rem 0;
	}
	nav {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		color: #d9d9d9;
		z-index: 10;
		/* width: 100%; */
	}
	.pagetitle {
		width: 100%;
		display: flex;
		background-color: #232323;
	}

	ul {
		position: absolute;
		right: 0;
		list-style: none;
		rotate: 90deg;
	}
	li {
		text-transform: lowercase;
		text-decoration: none;
		padding: 0.9rem;
		width: fit-content;
		background-color: #232323;
	}
	li.active {
		text-decoration: none;
		color: var(--accent-color);
	}
	a {
		color: #eee;
	}
	a:hover {
		color: var(--accent-color);
		text-decoration: none;
	}
	a {
		color: var(--heading-color);
	}
</style>
