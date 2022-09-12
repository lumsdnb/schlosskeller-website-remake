<script>
	export let name = 'test';
	export let description = 'hallo freunde bald gehts wieder los';
	export let date = '1/12/2033';
	export let tags = ['main tag', 'other tag', 'another one'];
</script>

<details>
	<summary>
		<picture
			><img src="https://source.unsplash.com/random/200×50/?fruit" alt="" srcset="" /></picture
		>
		<span class="event-type">{tags[0]}</span>
		<span class="event-name">{name}</span>
		<span class="event-date">{date}</span>
	</summary>
	<p class="event-description">
		{description}
	</p>

	<div class="flex-split">
		<p>
			{#each tags as t}
				<span class="tag">{t}</span>
			{/each}
		</p>
		<p class="price">eintritt frei!</p>
	</div>
</details>

<style>
	.flex-split {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.price {
		padding-left: 1rem;
	}

	details {
		padding: 0.4rem;
		margin: 0.4rem;
		z-index: 10;
		width: 100%;
		background-color: #232323aa;
		color: #eee;
		max-width: 900px;
		user-select: none;
	}

	details:hover {
		cursor: pointer;
		transition: background-color 50ms;
		background-color: #232323fa;
	}
	details[open] summary ~ * {
		animation: sweep 0.5s ease-in-out;
	}

	details[open] {
		transition: background-color 50ms;
		background-color: #232323fa;
	}

	@keyframes sweep {
		0% {
			opacity: 0;
			margin-left: -10px;
		}
		100% {
			opacity: 1;
			margin-left: 0px;
		}
	}
	summary {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		position: relative;
		max-height: 5rem;
		max-width: 100vw;
		align-items: center;
	}

	img {
		position: relative;
		width: 150px; /* change to auto once img size is defined */
		height: 5rem; /* same as summary */
	}

	.event-name {
		padding: 1rem;
		/* background-color: #232323; */
		color: #eee;
		font-weight: 900;
		width: fit-content;
		font-size: 1rem;
	}
	.event-type {
		position: absolute;
		padding: 0.2rem;
		font-weight: 400;
		width: fit-content;
		font-size: 1.2rem;
		flex-basis: 1;
		background-color: #232323;
		rotate: 20deg;
	}
	.event-date {
		position: absolute;
		top: 0;
		right: 0;
		background-color: var(--heading-color);
		padding: 0.2rem;
		font-size: 0.9rem;
		color: #232323;
	}

	.event-description {
		padding: 0.2rem;
		margin-top: 20px;
		max-width: 80%;
	}

	.tag {
		padding: 0.2rem;
		font-size: 0.8rem;
		margin: 0.4rem;
		background-color: #eee;
		border: #706f6f solid 1px;
		border-radius: 0.2rem;
		filter: drop-shadow(2px 1px 1px #000);
		color: #232323;
		user-select: none;
	}
	.tag:hover {
		scale: 1.1;
	}
</style>
