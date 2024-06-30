import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const variantList = {
	purple:
		'bg-primary-purple text-white border-primary-purple hover:ring-primary-purple focus:ring-primary-purple',
	'ghost-purple':
		'bg-transparent text-primary-purple border-primary-purple hover:ring-primary-purple focus:ring-primary-purple',
	white:
		'bg-white text-primary-purple border-primary-purple hover:ring-primary-purple focus:ring-primary-purple',
	yellow:
		'bg-primary-yellow text-white border-primary-yellow hover:ring-primary-yellow focus:ring-primary-yellow',
};

const sizeList = {
	base: 'text-base py-5 px-6',
	sm: 'text-sm py-[10px] px-5',
};

export default function CustomLink({
	children,
	to,
	variant = 'purple',
	size = 'base',
	className,
	fullWidth = false,
}) {
	const variantStyles = variantList[variant];
	const sizeStyle = sizeList[size];

	return (
		<Link
			to={to}
			className={clsx(
				'inline-flex items-center justify-center border rounded font-bold',
				'ring-1 ring-transparent ring-offset-0',
				'focus:outline-none hover:ring-offset-2 focus:ring-offset-2 transition-all',
				variantStyles,
				sizeStyle,
				className,
				fullWidth && 'w-full'
			)}
		>
			{children}
		</Link>
	);
}

CustomLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(['purple', 'ghost-purple', 'white', 'yellow']),
	size: PropTypes.oneOf(['base', 'sm']),
	className: PropTypes.string,
	fullWidth: PropTypes.bool,
};
