import { writable } from 'svelte/store';

export const menuState = writable(false);

export const eventStore = writable([
	{
		id: 1,
		name: 'laut un leis',
		datum: '1-1-2023',
		description:
			'Reprehenderit deserunt do nisi esse in. Incididunt nisi eiusmod occaecat non consectetur id. Enim sint elit ipsum est dolor nisi aliquip ad reprehenderit amet ipsum pariatur aliquip.',
		tags: ['konzert', 'lul', 'test']
	},
	{
		id: 2,
		name: 'kellerparty',
		datum: '1-1-2023',
		description:
			'Aliquip occaecat consectetur Lorem eiusmod. Esse exercitation do commodo occaecat amet aliqua anim esse est. Minim dolor do ipsum aute anim nisi nostrud nulla.',
		tags: ['party', 'retro', 'geil']
	},
	{
		id: 3,
		name: 'kulturclub',
		datum: '1-1-2023',
		description:
			'Enim amet non minim aliquip esse. Ullamco laboris incididunt minim velit nostrud occaecat magna pariatur irure voluptate et Lorem. Exercitation duis fugiat incididunt ad nisi adipisicing veniam deserunt.',
		tags: ['kultur', 'politik', 'comedy']
	},
	{
		id: 4,
		name: 'mittwoch saufi',
		datum: '1-1-2023',
		description:
			'Enim amet non minim aliquip esse. Ullamco laboris incididunt minim velit nostrud occaecat magna pariatur irure voluptate et Lorem. Exercitation duis fugiat incididunt ad nisi adipisicing veniam deserunt.',
		tags: ['kneipe', 'chillen', 'social gathering']
	}
]);
