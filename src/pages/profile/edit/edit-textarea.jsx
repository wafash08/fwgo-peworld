export default function EditTextarea({
	label,
	name,
	placeholder,
	required = true,
}) {
	return (
		<div class='flex flex-col gap-1'>
			<label class='text-xs text-[#9EA0A5]' htmlFor='deskripsi'>
				{label}
			</label>
			<textarea
				class='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36]'
				name={name}
				id={name}
				cols='30'
				rows='5'
				placeholder={placeholder}
				required={required}
			></textarea>
		</div>
	);
}
