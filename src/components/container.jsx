import clsx from 'clsx';

export default function Container({ children, classNames }) {
	return (
		<div className={clsx('max-w-[1172px] w-full mx-auto px-4', classNames)}>
			{children}
		</div>
	);
}
