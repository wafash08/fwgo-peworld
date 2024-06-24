import { useDispatch, useSelector } from 'react-redux';
import UploadPhotoProfil from '../../../components/upload-photo-profil';
import { EditForm, EditTextarea } from '../../../components/edit';
import Input from '../../../components/input';
import { Button } from '../../../components/button';
import {
	recruiterFailed,
	recruiterUpdated,
} from '../../../redux/actions/recruiter.action';
import { getTokenFromLocalStorage } from '../../../utils';
/*
{
  "company": "PT. CDA",
  "position": "HRD",
  "city": "padang",
  "description": "description testing",
  "phone": "0812312333",
  "instagram": "@dodi2",
  "linkedin": "linkedin/test",
  "photo": "www.google.com"
}
*/

export default function EditRecruiterForm() {
	const token = getTokenFromLocalStorage();
	const { recruiter, status } = useSelector(state => state.recruiter);
	const dispatch = useDispatch();

	const handleUpdateRecruiter = e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);

		try {
			dispatch(recruiterUpdated(data, token));
		} catch (error) {
			dispatch(recruiterFailed(error.message));
		}
	};

	return (
		<div className='space-y-10 w-full md:flex-1'>
			<EditForm
				method='put'
				title='Data diri'
				uploadFile={true}
				onSubmit={handleUpdateRecruiter}
			>
				<Input
					label='Nama perusahaan'
					name='company'
					placeholder='Masukkan perusahaan'
					defaultValue={recruiter.company}
				/>
				<Input
					label='Jabatan'
					name='position'
					placeholder='Masukkan jabatan'
					defaultValue={recruiter.position}
				/>
				<Input
					label='Kota'
					name='city'
					placeholder='Masukkan kota'
					defaultValue={recruiter.city}
				/>
				<EditTextarea
					label='Deskripsi singkat'
					name='description'
					placeholder='Tuliskan deskripsi singkat'
					defaultValue={recruiter.description}
				/>
				<Input
					label='Nomor handphone'
					name='phone'
					placeholder='Masukkan nomor handphone'
					type='tel'
					defaultValue={recruiter.phone}
				/>
				<Input
					label='Instagram'
					name='instagram'
					placeholder='Masukkan akun instagram'
					type='url'
					defaultValue={recruiter.instagram}
				/>
				<Input
					label='Linkedin'
					name='linkedin'
					placeholder='Masukkan akun linkedin'
					type='url'
					defaultValue={recruiter.linkedin}
				/>
				<UploadPhotoProfil label='Ubah foto profil' name='photo' />
				<Button type='submit' variant='purple' fullWidth>
					{status === 'loading' ? (
						<>
							<svg
								width='20'
								height='20'
								fill='currentColor'
								className='mr-2 animate-spin'
								viewBox='0 0 1792 1792'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'
							>
								<path d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'></path>
							</svg>
							<span className='sr-only'>Menyimpan</span>
						</>
					) : (
						'Simpan'
					)}
				</Button>
			</EditForm>
		</div>
	);
}
