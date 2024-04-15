import typeFileUpload from '../../../assets/type-file-upload.png';
import sizeUpload from '../../../assets/size-upload.png';
import { useEffect, useState } from 'react';

export default function EditUpload({ name }) {
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
		<div className='relative'>
			<input
				className='w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute -z-10'
				type='file'
				name={name}
				id={name}
				accept='image/*'
				onChange={onSelecFile}
				required
			/>
			<label
				className='block cursor-pointer rounded-lg py-16 px-6 border border-quick-silver border-dashed text-center'
				htmlFor={name}
			>
				{selectedFile ? (
					<img src={preview} alt='Uploaded image' />
				) : (
					<>
						<div className='flex justify-center mb-8 text-quick-silver'>
							<svg
								width='114'
								height='64'
								viewBox='0 0 114 64'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M90.1186 15.8057C88.1801 15.8057 86.2978 16.0424 84.4931 16.4783C79.073 6.89834 68.7923 0.431519 57 0.431519C45.2077 0.431519 34.927 6.89857 29.5069 16.4783C27.7022 16.0424 25.8199 15.8057 23.8814 15.8057C10.692 15.8057 0 26.4977 0 39.6871C0 52.8766 10.692 63.5686 23.8814 63.5686H49.9046V49.3778H38.0477V49.2257L56.7751 29.6683H57.2251L75.9525 49.2257V49.3778H64.0956V63.5686H90.1188C103.308 63.5686 114 52.8766 114 39.6871C114 26.4977 103.308 15.8057 90.1186 15.8057Z'
									fill='#9EA0A5'
								/>
							</svg>
						</div>
						<p className='text-sm text-yankees-blue mb-3'>
							Drag & Drop untuk Upload Gambar Aplikasi Mobile
						</p>
						<p className='text-xs text-yankees-blue mb-10'>
							Atau cari untuk mengupload file dari direktorimu.
						</p>
						<div className='flex justify-center gap-10'>
							<img
								src={typeFileUpload}
								alt='Type file supported to upload'
								width='103'
								height='28'
							/>
							<img
								src={sizeUpload}
								alt='range of sizes of file to upload'
								width='136'
								height='28'
							/>
						</div>
					</>
				)}
			</label>
		</div>
	);
}
