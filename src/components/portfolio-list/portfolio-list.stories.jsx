import PortfolioList from './portfolio-list';

export default {
	title: 'Portfolio List',
	component: PortfolioList,
	decorators: [
		Story => <div className='mx-auto max-w-3xl mt-20'>{Story()}</div>,
	],
	tags: ['autodocs'],
};

const portfolio = [
	{
		id: 'bb9c4e52-7450-4168-b873-ced5f95dfab8',
		application_name: 'Mama Recipe',
		link_repository: 'https://github.com/wafash08/recipe-app',
		application: 'Aplikasi Web',
		image:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1718956282/ojh3vxo4gt68aef4u0zs.png',
		created_at: '2024-06-21T15:51:24.640Z',
		updated_at: null,
	},
	{
		id: 'a8c869e9-5540-473a-85bf-60d48ee5ccc9',
		application_name: 'Blanja',
		link_repository: 'https://github.com/echestratus/BlanjaWebsiteProject',
		application: 'Aplikasi Web',
		image:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1718956432/wpt64svxhhes7bnvin43.png',
		created_at: '2024-06-21T15:53:54.329Z',
		updated_at: null,
	},
	{
		id: 'eb15c3e1-65ba-4066-b43a-993ce9b6b24f',
		application_name: 'Manage landing page',
		link_repository: 'https://github.com/wafash08/manage-landing-page',
		application: 'Aplikasi Web',
		image:
			'https://res.cloudinary.com/dnsqhf9cr/image/upload/v1718956486/i4fr1wbvlfryaikfmuw2.jpg',
		created_at: '2024-06-21T15:54:48.873Z',
		updated_at: null,
	},
];

export const Default = {
	args: {
		portfolio,
		name: 'Kamu',
		status: 'succeed',
	},
};

export const LoadingState = {
	args: {
		...Default.args,
		portfolio: [],
		status: 'loading',
	},
};

export const EmptyState = {
	args: {
		...Default.args,
		portfolio: [],
	},
};
