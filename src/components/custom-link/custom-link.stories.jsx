import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CustomLink from './custom-link';

export default {
	title: 'Custom Link',
	component: CustomLink,
	decorators: [
		Story => {
			const router = createBrowserRouter([
				{
					path: '*',
					element: <Story />,
				},
			]);

			return <RouterProvider router={router} />;
		},
	],
	tags: ['autodocs'],
	args: {
		children: 'Custom Link',
		to: '/',
	},
};

export const Default = {
	args: {
		variant: 'purple',
		size: 'base',
		fullWidth: false,
	},
};

export const GhostPurple = {
	args: {
		...Default.args,
		variant: 'ghost-purple',
	},
};

export const White = {
	args: {
		...Default.args,
		variant: 'white',
	},
};

export const Yellow = {
	args: {
		...Default.args,
		variant: 'yellow',
	},
};

export const FullWidth = {
	args: {
		...Default.args,
		fullWidth: true,
	},
};

export const Small = {
	args: {
		...Default.args,
		size: 'sm',
	},
};
