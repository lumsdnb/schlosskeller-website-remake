<script>
	export let name = 'test';
	export let description = 'hallo freunde bald gehts wieder los';
	export let date = '1/12/2033';
	export let tags = ['one', 'two'];
</script>

<span>{date}</span>
<details>
	<summary>{name}</summary>
	test
	{description}
	<p>
		tags:
		{#each tags as t}
			<span class="tag">{t}</span>
		{/each}
	</p>
</details>

<style>
	details {
		padding: 1rem;
		z-index: 10;
	}
	.tag {
		padding: 0.5rem;
	}
</style>
