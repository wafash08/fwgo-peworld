export default function EditTextarea({ label, name, ...props }) {
	return (
		<div className='flex flex-col gap-1'>
			<label className='text-xs text-[#9EA0A5]' htmlFor={name}>
				{label}
			</label>
			<textarea
				className='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36]'
				name={name}
				id={name}
				cols='30'
				rows='5'
				{...props}
			></textarea>
		</div>
	);
}
