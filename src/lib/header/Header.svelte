<script>
	import { page } from '$app/stores';
	import Burger from '$lib/header/Hamburger.svelte';
	import { menuState } from '$lib/eventStore';
	import { clickOutside } from '$lib/clickOutside.js';

	function handleClickOutside(event) {
		$menuState = false;
	}
</script>

<header>
	<nav>
		<span class="pagetitle"
			><a href="/">Schlosskeller</a>
			<Burger />
		</span>
		{#if $menuState}
			<ul use:clickOutside on:click_outside={handleClickOutside}>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/about">über_uns</a>
				</li>
				<li class:active={$page.url.pathname === '/galerie'}>
					<a sveltekit:prefetch href="/galerie">galerie</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">programm</a>
				</li>
			</ul>
		{/if}
	</nav>
</header>

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
		width: 100%;
	}
	.pagetitle {
		width: 100%;
		display: flex;
		background-color: #232323;
		justify-content: space-between;
		padding: 0 0.5rem;
		align-items: center;
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
