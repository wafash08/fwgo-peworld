import clsx from 'clsx';

export default function Container({ children, className }) {
	return (
		<div className={clsx('max-w-[1172px] w-full mx-auto px-4', className)}>
			{children}
		</div>
	);
}
