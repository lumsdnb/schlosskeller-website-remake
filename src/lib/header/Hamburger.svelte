<script>
	import { menuState } from '$lib/eventStore';
	let stroke1;
</script>

<div class="burgermenu">
	<input type="checkbox" name="" id="burgertoggle" bind:checked={$menuState} />
	{#if $menuState}
		<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="0.5" width="28.9556" height="28.9556" fill="#2C2C2C" stroke="#2C2C2C" />
			<path d="M8 27V30" stroke="#EAEAEA" stroke-width="3" stroke-linecap="round" />
			<path d="M15 27V30" stroke="#EAEAEA" stroke-width="3" stroke-linecap="round" />
			<path d="M22 27L22 30" stroke="#EAEAEA" stroke-width="3" stroke-linecap="round" />
		</svg>
	{:else}
		<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="0.5" width="28.9556" height="28.9556" fill="#2C2C2C" stroke="#2C2C2C" />
			<path d="M8 6L8 24" stroke="#EAEAEA" stroke-width="3" stroke-linecap="round" />
			<path d="M15 6L15 21" stroke="#EAEAEA" stroke-width="3" stroke-linecap="round" />
			<path d="M22 6L22 23" stroke="#EAEAEA" stroke-width="3" stroke-linecap="round" />
		</svg>
	{/if}
</div>

<style>
	.burgermenu {
		width: 3.6rem;
		height: 3.6rem;
		background-color: #232323;
		/* border: white solid 1px; */
		z-index: 10;
	}
	#burgertoggle {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		border: none;
		background-color: #444;
		opacity: 0;
	}
	#burgertoggle:hover {
		cursor: crosshair;
	}
</style>
