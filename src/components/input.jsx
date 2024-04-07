export default function Input({
	type = 'text',
	name,
	placeholder,
	label,
	...props
}) {
	const autoCompleteName =
		name === 'password' || 'confirmPassword' ? 'current-password' : name;
	return (
		<div>
			<label
				htmlFor={name}
				className='text-xs text-quick-silver block mb-1 ml-1'
			>
				{label}
			</label>
			<input
				type={type}
				id={name}
				placeholder={placeholder}
				name={name}
				className='w-full p-4 text-sm text-yankees-blue placeholder:text-roman-silver border border-azureish-white rounded'
				autoComplete={autoCompleteName}
				{...props}
			/>
		</div>
	);
}
