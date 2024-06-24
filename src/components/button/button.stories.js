import Button from './button';

export default {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
};

export const Default = {
	args: {
		children: 'Test button',
		variant: 'yellow',
		fullWidth: false,
		textSize: 'base',
		textWeight: 'bold',
		horizontalPaddingDoubled: false,
		type: 'button',
	},
};

export const GhostYellow = {
	args: {
		...Default.args,
		variant: 'ghost-yellow',
	},
};

export const Purple = {
	args: {
		...Default.args,
		variant: 'purple',
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

export const FullWidth = {
	args: {
		...Default.args,
		fullWidth: true,
	},
};

export const TextSmall = {
	args: {
		...Default.args,
		textSize: 'small',
	},
};

export const Semibold = {
	args: {
		...Default.args,
		textWeight: 'semibold',
	},
};

export const HorizontalPaddingDoubled = {
	args: {
		...Default.args,
		horizontalPaddingDoubled: true,
	},
};
