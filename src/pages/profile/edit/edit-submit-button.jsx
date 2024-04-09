import clsx from 'clsx';

export default function EditSubmitButton({ variant, children }) {
	return (
		<button
			type='submit'
			className={clsx(
				'text-base border border-primary-yellow font-bold p-4 rounded',
				variant === 'ghost' && 'text-primary-yellow bg-white',
				variant === 'yellow' && 'text-white bg-primary-yellow'
			)}
		>
			{children}
		</button>
	);
}
