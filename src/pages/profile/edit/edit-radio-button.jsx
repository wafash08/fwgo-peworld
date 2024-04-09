export default function EditRadioButton({ label, name, value }) {
	return (
		<div className='relative flex items-center gap-3 p-3'>
			<input
				type='radio'
				name={name}
				id={value}
				className='peer'
				value={value}
			/>
			<div className='absolute inset-0 bg-transparent pointer-events-none transition-colors duration-300 border border-transparent peer-checked:border-[#E2E5ED] rounded' />
			<label
				htmlFor={value}
				className='text-sm font-semibold text-[#46505C] cursor-pointer'
			>
				{label}
			</label>
		</div>
	);
}
