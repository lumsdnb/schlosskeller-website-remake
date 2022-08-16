<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div> -->

	<nav>
		<ul>
			<span><a href="/">Schlosskeller</a></span>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">programm</a></li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">galerie</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">über_uns</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	nav {
		/* display: flex; */
		justify-content: right;
		--background: #2c2c2c;
		color: #d9d9d9;
		z-index: 10;
		width: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		padding-left: 4rem;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active {
		color: var(--accent-color);
	}

	header span {
		flex-basis: 100%;
		font-size: 2rem;
		flex-basis: 100%;
	}

	nav li:not(:first-child) {
		display: flex;
		height: 100%;
		align-items: space-around;
		padding: 0 0.4rem;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 1.5rem;
		text-transform: lowercase;
		letter-spacing: 0em;
		text-decoration: none;
		transition: color 0.2s linear;
		rotate: 90deg;
		position: relative;
		top: 6rem;
		background-color: var(--background);
	}

	a:hover {
		color: var(--accent-color);
		text-decoration: none;
	}
	a {
		color: var(--heading-color);
	}
</style>
