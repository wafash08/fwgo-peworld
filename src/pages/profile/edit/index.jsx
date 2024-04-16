import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import EditForm from './edit-form';
import EditInput from './edit-input';
import EditTextarea from './edit-textarea';
import EditSubmitButton from './edit-submit-button';
import EditRadioButton from './edit-radio-button';
import EditUpload from './edit-upload';
import UploadPhotoProfil from '../../../components/upload-photo-profil';

export default function EditProfile() {
	const { profile } = useRouteLoaderData('profile');
	const navigate = useNavigate();
	return (
		<div className='space-y-10 w-full'>
			<EditForm method='put' title='Foto profil' uploadFile={true}>
				<UploadPhotoProfil label='Ubah foto profil' name='photo' />
				<EditSubmitButton variant='ghost'>Simpan</EditSubmitButton>
			</EditForm>
			<EditForm method='put' title='Data diri'>
				<EditInput
					label='Nama lengkap'
					name='name'
					placeholder='Masukkan nama lengkap'
					defaultValue={profile.name}
				/>
				<EditInput
					label='Job title'
					name='job_desk'
					placeholder='Masukkan job title'
					defaultValue={profile.job_desk}
				/>
				<EditInput
					label='Domisili'
					name='domicile'
					placeholder='Masukkan domisili'
					defaultValue={profile.domicile}
				/>
				<EditInput
					label='Tempat kerja'
					name='workplace'
					placeholder='Masukkan tempat kerja'
					defaultValue={profile.workplace}
				/>
				<EditTextarea
					label='Deskripsi'
					name='description'
					placeholder='Tuliskan deskripsi singkat'
					defaultValue={profile.description}
				/>
				<EditSubmitButton variant='ghost'>Simpan</EditSubmitButton>
			</EditForm>
			<EditForm title='Skill'>
				<div className='flex gap-[10px]'>
					<input
						className='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36] md:flex-1'
						type='text'
						name='skill_name'
						id='skill_name'
						placeholder='Java'
					/>
					<EditSubmitButton variant='yellow'>Simpan</EditSubmitButton>
				</div>
			</EditForm>
			<EditForm title='Pengalaman Kerja'>
				<EditInput label='Posisi' name='position' placeholder='Web Developer' />
				<div className='flex flex-col md:flex-row gap-8 md:gap-5'>
					<EditInput
						label='Nama perusahaan'
						name='company'
						placeholder='PT. Harus Bisa'
						className='md:flex-1'
					/>
					<EditInput
						label='Bulan/Tahun'
						name='work_year'
						placeholder='Januari 2018'
						className='md:flex-1'
					/>
				</div>
				<EditTextarea
					label='Deskripsi singkat'
					name='experience_description'
					placeholder='Deskripsikan pekerjaan anda'
				/>
				<div className='h-[1px] bg-azureish-white my-2' />
				<EditSubmitButton variant='ghost'>
					Tambah pengalaman kerja
				</EditSubmitButton>
			</EditForm>
			<EditForm title='Portofolio' uploadFile={true}>
				<EditInput
					label='Nama aplikasi'
					name='application_name'
					placeholder='Masukkan nama aplikasi'
				/>
				<EditInput
					label='Link repository'
					name='link_repository'
					placeholder='Masukkan link repository'
				/>
				<div className='flex flex-col gap-1'>
					<p className='text-xs text-[#9EA0A5]'>Type portofolio</p>
					<div className='flex items-center gap-2'>
						<EditRadioButton
							label='Aplikasi Mobile'
							name='application'
							value='Aplikasi Mobile'
						/>
						<EditRadioButton
							label='Aplikasi Web'
							name='application'
							value='Aplikasi Web'
						/>
					</div>
				</div>

				<div className='flex flex-col gap-1'>
					<p className='text-xs text-[#9EA0A5]'>Upload gambar</p>
					<EditUpload name='image' />
				</div>

				<div className='h-[1px] bg-azureish-white my-2' />
				<EditSubmitButton variant='ghost'>Tambah portofolio</EditSubmitButton>
			</EditForm>
			<div className='grid gap-4'>
				<button
					type='button'
					className='font-bold text-primary-purple p-3 bg-transparent border border-primary-purple rounded max-w-32 w-full'
					onClick={() => {
						navigate(-1);
					}}
				>
					Batal
				</button>
			</div>
		</div>
	);
}
