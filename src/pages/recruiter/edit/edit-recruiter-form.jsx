import { useRouteLoaderData } from 'react-router-dom';
import UploadPhotoProfil from '../../../components/upload-photo-profil';
import { EditForm, EditTextarea } from '../../../components/edit';
import Input from '../../../components/input';
import Button from '../../../components/button';
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
	const { recruiter } = useRouteLoaderData('recruiter');

	return (
		<div className='space-y-10 w-full md:flex-1'>
			<EditForm method='put' title='Data diri' uploadFile={true}>
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
					Simpan
				</Button>
			</EditForm>
		</div>
	);
}
