<script>
	export let name = 'test';
	export let description = 'hallo freunde bald gehts wieder los';
	export let date = '1/12/2033';
	export let tags = ['main tag', 'other tag', 'another one'];
</script>

<details>
	<summary>
		<span class="event-type">{tags[0]}</span>
		<span class="event-name">{name}</span>
		<span class="event-date">{date}</span>
	</summary>
	test
	{description}
	<p>
		{#each tags as t}
			<span class="tag">{t}</span>
		{/each}
	</p>
</details>

<style>
	details {
		padding: 0.3rem;
		margin: 0.2rem;
		z-index: 10;
		width: 100%;
		background-image: url(https://source.unsplash.com/random/300×100/?fruit);
		background-size: cover;
	}
	details[open] summary ~ * {
		animation: sweep 0.5s ease-in-out;
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
		flex-direction: column;
		flex-wrap: wrap;
		position: relative;
	}

	.event-name {
		padding: 1rem;
		background-color: #232323;
		color: #eee;
		font-weight: 900;
		width: fit-content;
		font-size: 1.2rem;
	}
	.event-type {
		padding: 0.2rem;
		font-weight: 400;
		width: fit-content;
		font-size: 1.2rem;
		flex-basis: 1;
	}
	.event-date {
		position: absolute;
		right: 1rem;
		background-color: aquamarine;
		padding: 0.2rem;
		text-decoration: wavy;
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
