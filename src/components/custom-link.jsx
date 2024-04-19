import { Link } from 'react-router-dom';
import clsx from 'clsx';

function getVariantLink(variant) {
	switch (variant) {
		case 'purple': {
			return 'bg-primary-purple text-white';
		}
		case 'ghost': {
			return 'bg-transparent text-primary-purple';
		}
		case 'white': {
			return 'bg-white text-primary-purple';
		}
		default: {
			return 'bg-primary-purple text-white';
		}
	}
}

function getSizeLink(size) {
	switch (size) {
		case 'base': {
			return 'text-base py-5 px-6';
		}
		case 'sm': {
			return 'text-sm py-[10px] px-5';
		}
		default: {
			return 'text-base py-5 px-6';
		}
	}
}

export default function CustomLink({
	children,
	to,
	variant = 'purple',
	size = 'base',
	className,
}) {
	// variant: purple, ghost, white
	const variantStyles = getVariantLink(variant);
	// size: sm, base
	const sizeStyle = getSizeLink(size);

	return (
		<Link
			to={to}
			className={clsx(
				'inline-flex border border-primary-purple rounded font-bold',
				variantStyles,
				sizeStyle,
				className
			)}
		>
			{children}
		</Link>
	);
}
