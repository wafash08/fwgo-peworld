import { useEffect } from 'react';
import clsx from 'clsx';

export default function Input({
	name,
	label,
	errors = null,
	children = null,
	className,
	...props
}) {
	const autoCompleteName =
		name === 'password' || name === 'confirmPassword'
			? 'current-password'
			: name;

	useEffect(() => {
		const confirmPasswordElement = document.getElementById('confirmPassword');
		if (errors?.confirmPassword) {
			confirmPasswordElement.focus();
		}
	}, [errors]);

	return (
		<div className={clsx(className)}>
			<label
				htmlFor={name}
				className='text-xs text-quick-silver block mb-1 ml-1'
			>
				{label}
			</label>
			<input
				id={name}
				name={name}
				className='w-full p-4 text-sm text-yankees-blue placeholder:text-roman-silver border border-azureish-white rounded'
				autoComplete={autoCompleteName}
				{...props}
			/>
			{children}
		</div>
	);
}
