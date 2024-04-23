import { useEffect, useState } from 'react';

export default function UploadPhotoProfil({ label, name }) {
	const [selectedFile, setSelectedFile] = useState(null);
	const [preview, setPreview] = useState(null);

	const onSelecFile = e => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(null);
			return;
		}

		setSelectedFile(e.target.files[0]);
	};

	useEffect(() => {
		if (!selectedFile) {
			setPreview(null);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	return (
		<div className='flex flex-col gap-2'>
			{selectedFile && (
				<div className='w-[150px] rounded-full overflow-hidden border border-quick-silver'>
					<img
						src={preview}
						alt='Uploaded image'
						className='w-full object-cover'
					/>
				</div>
			)}

			<div className='flex flex-col gap-2'>
				<label htmlFor={name} className='text-xs text-quick-silver'>
					{label}
				</label>
				<input
					type='file'
					name={name}
					id={name}
					onChange={onSelecFile}
					required={photo ? false : true}
				/>
			</div>
		</div>
	);
}
