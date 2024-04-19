import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import UploadPhotoProfil from '../../../components/upload-photo-profil';
import Button from '../../../components/button';
import Input from '../../../components/input';
import {
	EditForm,
	EditRadioButton,
	EditTextarea,
	EditUpload,
} from '../../../components/edit';

export default function EditProfile() {
	const { profile } = useRouteLoaderData('profile');
	const navigate = useNavigate();
	return (
		<div className='space-y-10 w-full'>
			<EditForm method='put' title='Foto profil' uploadFile={true}>
				<UploadPhotoProfil label='Ubah foto profil' name='photo' />
				<Button fullWidth variant='ghost-yellow' type='submit'>
					Simpan
				</Button>
			</EditForm>
			<EditForm method='put' title='Data diri'>
				<Input
					label='Nama lengkap'
					name='name'
					placeholder='Masukkan nama lengkap'
					defaultValue={profile.name}
					required
				/>
				<Input
					label='Job title'
					name='job_desk'
					placeholder='Masukkan job title'
					defaultValue={profile.job_desk}
					required
				/>
				<Input
					label='Domisili'
					name='domicile'
					placeholder='Masukkan domisili'
					defaultValue={profile.domicile}
					required
				/>
				<Input
					label='Tempat kerja'
					name='workplace'
					placeholder='Masukkan tempat kerja'
					defaultValue={profile.workplace}
					required
				/>
				<EditTextarea
					label='Deskripsi'
					name='description'
					placeholder='Tuliskan deskripsi singkat'
					defaultValue={profile.description}
				/>
				<Button fullWidth variant='ghost-yellow' type='submit'>
					Simpan
				</Button>
			</EditForm>
			<EditForm title='Skill'>
				<div className='flex flex-col md:flex-row gap-[10px]'>
					<input
						className='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36] md:flex-1'
						type='text'
						name='skill_name'
						id='skill_name'
						placeholder='Java'
						required
					/>
					<Button variant='yellow' type='submit'>
						Simpan
					</Button>
					{/* 
						1. tampilkan list skill
						2. menambahkan skill tidak mentrigger redirect
						3. tambahkan fungsionalitas delete
					*/}
				</div>
			</EditForm>
			<EditForm title='Pengalaman Kerja'>
				<Input label='Posisi' name='position' placeholder='Web Developer' />
				<div className='flex flex-col md:flex-row gap-8 md:gap-5'>
					<Input
						label='Nama perusahaan'
						name='company'
						placeholder='PT. Harus Bisa'
						className='md:flex-1'
					/>
					<Input
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
				<Button fullWidth variant='ghost-yellow' type='submit'>
					Tambah pengalaman kerja
				</Button>
			</EditForm>
			<EditForm title='Portofolio' uploadFile={true}>
				<Input
					label='Nama aplikasi'
					name='application_name'
					placeholder='Masukkan nama aplikasi'
				/>
				<Input
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
				<Button fullWidth variant='ghost-yellow' type='submit'>
					Tambah portofolio
				</Button>
			</EditForm>
			<div className='grid gap-4'>
				<Button
					type='button'
					variant='ghost-purple'
					onClick={() => {
						navigate(-1);
					}}
				>
					Batal
				</Button>
			</div>
		</div>
	);
}
