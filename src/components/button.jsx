import clsx from 'clsx';

function getVariantButton(variant) {
	switch (variant) {
		case 'yellow': {
			return 'text-white bg-primary-yellow border-primary-yellow';
		}
		case 'ghost-yellow': {
			return 'text-primary-yellow bg-transparent border-primary-yellow';
		}
		case 'ghost-purple': {
			return 'text-primary-purple bg-transparent border-primary-purple';
		}
		case 'purple': {
			return 'border-primary-purple text-white bg-primary-purple';
		}
		default: {
			return 'text-white bg-primary-yellow border-primary-yellow';
		}
	}
}

export default function Button({
	children,
	variant = 'yellow',
	fullWidth = false,
	...props
}) {
	// variant: purple, ghost-purple, yellow, ghost-yellow
	const variantStyles = getVariantButton(variant);
	return (
		<button
			className={clsx(
				'w-full p-4 font-bold rounded border inline-flex items-center justify-center',
				fullWidth ? 'md:w-full' : 'md:max-w-40',
				variantStyles
			)}
			{...props}
		>
			{children}
		</button>
	);
}
