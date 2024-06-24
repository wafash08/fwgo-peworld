import clsx from 'clsx';
import PropTypes from 'prop-types';

const variantList = {
	yellow:
		'text-white bg-primary-yellow border-primary-yellow hover:ring-primary-yellow focus:ring-primary-yellow',
	'ghost-yellow':
		'text-primary-yellow bg-transparent border-primary-yellow hover:ring-primary-yellow focus:ring-primary-yellow',
	purple:
		'text-white bg-primary-purple border-primary-purple hover:ring-primary-purple focus:ring-primary-purple',
	'ghost-purple':
		'text-primary-purple bg-transparent border-primary-purple hover:ring-primary-purple focus:ring-primary-purple',
	white: 'text-primary-purple bg-white border-transparent',
};

function getVariantButton(variant) {
	return variantList[variant];
}

const fontSizeList = {
	base: 'text-base',
	small: 'text-sm',
};

const fontWeightList = {
	bold: 'font-bold',
	semibold: 'font-semibold',
};

export default function Button({
	children,
	variant = 'yellow',
	fullWidth = false,
	textSize = 'base',
	textWeight = 'bold',
	horizontalPaddingDoubled = false,
	type = 'button',
	onClick,
}) {
	const variantStyles = getVariantButton(variant);
	const fontSize = fontSizeList[textSize];
	const fontWeight = fontWeightList[textWeight];

	return (
		<button
			className={clsx(
				'py-4 font-bold rounded border inline-flex items-center justify-center ring-2 ring-offset-0 ring-transparent',
				'hover:ring-offset-2 focus:ring-offset-2 transition-all focus:outline-none',
				fullWidth && 'w-full',
				variantStyles,
				fontSize,
				fontWeight,
				horizontalPaddingDoubled ? 'px-8' : 'px-4'
			)}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	/**
	 * Button contents
	 */
	children: PropTypes.node.isRequired,
	/**
	 * What variant to use
	 */
	variant: PropTypes.oneOf([
		'yellow',
		'ghost-yellow',
		'purple',
		'ghost-purple',
		'white',
	]),
	/**
	 * Should the button takes the full width
	 */
	fullWidth: PropTypes.bool,
	/**
	 * How large should the text be?
	 */
	textSize: PropTypes.oneOf(['base', 'small']),
	/**
	 * How bold should the text be?
	 */
	textWeight: PropTypes.oneOf(['bold', 'semibold']),
	/**
	 * Should the padding be doubled?
	 */
	horizontalPaddingDoubled: PropTypes.bool,
	/**
	 * What type should the button be?
	 */
	type: PropTypes.oneOf(['button', 'submit']),
	onClick: PropTypes.func,
};
