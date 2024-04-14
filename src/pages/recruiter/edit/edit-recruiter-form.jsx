import { useRouteLoaderData } from 'react-router-dom';
import EditForm from '../../profile/edit/edit-form';
import EditInput from '../../profile/edit/edit-input';
import EditTextarea from '../../profile/edit/edit-textarea';

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
			<EditForm method='put' title='Data diri'>
				<EditInput
					label='Nama perusahaan'
					name='company'
					placeholder='Masukkan perusahaan'
					defaultValue={recruiter.company}
				/>
				<EditInput
					label='Jabatan'
					name='position'
					placeholder='Masukkan jabatan'
					defaultValue={recruiter.position}
				/>
				<EditInput
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
				<EditInput
					label='Nomor handphone'
					name='phone'
					placeholder='Masukkan nomor handphone'
					defaultValue={recruiter.phone}
				/>
				<EditInput
					label='Instagram'
					name='instagram'
					placeholder='Masukkan akun instagram'
					defaultValue={recruiter.instagram}
				/>
				<EditInput
					label='Linkedin'
					name='linkedin'
					placeholder='Masukkan akun linkedin'
					defaultValue={recruiter.linkedin}
				/>
				<EditInput
					label='Foto'
					name='photo'
					placeholder='Masukkan url photo'
					defaultValue={recruiter.photo}
				/>
				<button
					type='submit'
					className='text-base border border-primary-purple font-bold p-4 rounded text-white bg-primary-purple'
				>
					Simpan
				</button>
			</EditForm>
		</div>
	);
}
