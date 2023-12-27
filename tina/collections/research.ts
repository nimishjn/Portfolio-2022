import { Collection } from 'tinacms';

export const researchCollection: Collection = {
	label: 'Research',
	name: 'research',
	path: 'content/research',
	format: 'json',
	fields: [
		{
			label: 'Title',
			name: 'title',
			type: 'string',
			required: true,
			isTitle: true,
			searchable: true,
		},
		{
			label: 'Image',
			name: 'img',
			type: 'image',
			required: true,
		},
		{
			label: 'Abstract',
			name: 'abstract',
			type: 'string',
			required: true,
			ui: {
				component: 'textarea',
			},
		},
		{
			label: 'Link',
			name: 'link',
			type: 'string',
			required: true,
		},
		{
			label: 'Publisher',
			name: 'publisher',
			type: 'string',
			required: true,
		},
		{
			label: 'Date',
			name: 'date',
			type: 'string',
			required: true,
			description: 'Options: 01 Jan 2020, Jan 2020, 2020, Present',
		},
	],
};