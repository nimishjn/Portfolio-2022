import { Collection } from 'tinacms';

export const certificateCollection: Collection = {
	label: 'Certificate',
	name: 'certificate',
	path: 'content/certificate',
	format: 'json',
	fields: [
		{
			label: 'From date',
			name: 'fromDate',
			type: 'string',
			required: true,
			description: 'Options: 01 Jan 2020, Jan 2020, 2020, Present',
		},
		{
			label: 'To date',
			name: 'toDate',
			type: 'string',
			required: true,
			description: 'Options: 01 Jan 2020, Jan 2020, 2020, Present',
		},
		{
			label: 'Title',
			name: 'title',
			type: 'string',
			required: true,
			isTitle: true,
			searchable: true,
		},
		{
			label: 'Organization name',
			name: 'orgName',
			type: 'string',
		},
		{
			label: 'Image',
			name: 'imageURL',
			type: 'image',
		},
		{
			label: 'Description',
			name: 'description',
			type: 'string',
			ui: {
				component: 'textarea',
			},
		},
		{
			label: 'Skills',
			name: 'skills',
			type: 'string',
			list: true,
		},
		{
			label: 'URL',
			name: 'url',
			type: 'string',
		},
		{
			label: 'Featured',
			name: 'featured',
			type: 'boolean',
		},
	],
	defaultItem: {
		featured: false,
	},
};
