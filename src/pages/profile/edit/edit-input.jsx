import clsx from 'clsx';

export default function EditInput({
	label,
	name,
	type = 'text',
	placeholder,
	required = true,
	className,
	defaultValue,
}) {
	return (
		<div className={clsx('flex flex-col gap-1', className)}>
			<label className='text-xs text-[#9EA0A5]' htmlFor={name}>
				{label}
			</label>
			<input
				className='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36]'
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				required={required}
				defaultValue={defaultValue}
			/>
		</div>
	);
}
