import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadPhotoProfil from '../../../components/upload-photo-profil';
import Button from '../../../components/button';
import Input from '../../../components/input';
import {
	EditForm,
	EditRadioButton,
	EditTextarea,
	EditUpload,
} from '../../../components/edit';
import { useDispatch, useSelector } from 'react-redux';
import {
	profileBiodataEdited,
	profileFailed,
	profilePhotoUpdated,
} from '../../../redux/actions/profile.action';
import { getTokenFromLocalStorage } from '../../../utils';
import { skillAdded, skillsFailed } from '../../../redux/actions/skills.action';
import SkillItemWithDelete from '../../../components/skill-item-with-delete';
import {
	experienceAdded,
	experienceFailed,
	experienceLoaded,
} from '../../../redux/actions/experience.action';
import ExperienceList from '../../../components/experience-list';
import ExperienceSkeleton from '../../../components/experience-loader';
import {
	portfolioAdded,
	portfolioFailed,
	portfolioLoaded,
} from '../../../redux/actions/portfolio.action';
import PortfolioSkeleton from '../../../components/portfolio-skeleton';
import PortfolioList from '../../../components/portfolio-list';

export default function EditProfile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { profile } = useSelector(state => state.profile);
	const { skills, status: skillsStatus } = useSelector(state => state.skills);
	const { experiences, status: experiencesStatus } = useSelector(
		state => state.experiences
	);
	const { portfolio, status: portfolioStatus } = useSelector(
		state => state.portfolio
	);

	useEffect(() => {
		const token = getTokenFromLocalStorage();
		dispatch(experienceLoaded(token));
		dispatch(portfolioLoaded(token));
	}, []);

	const handleUpdatePhoto = async e => {
		e.preventDefault();
		const token = getTokenFromLocalStorage();
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);

		try {
			dispatch(profilePhotoUpdated(data, token));
			form.reset();
		} catch (error) {
			dispatch(profileFailed(error.message));
		}
	};

	const handleSubmitBiodata = e => {
		e.preventDefault();
		const token = getTokenFromLocalStorage();
		const formData = new FormData(e.target);
		const biodata = Object.fromEntries(formData);
		try {
			dispatch(profileBiodataEdited(biodata, token));
		} catch (error) {
			dispatch(profileFailed(error.message));
		}
	};

	const handleAddSkill = async e => {
		e.preventDefault();
		const form = e.target;
		const token = getTokenFromLocalStorage();
		const formData = new FormData(form);
		const skill = Object.fromEntries(formData);
		try {
			await dispatch(skillAdded(skill, token));
			form.reset();
		} catch (error) {
			dispatch(skillsFailed(error.message));
		}
	};

	const handleAddExperience = async e => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const token = getTokenFromLocalStorage();
		const experience = {};
		for (let [key, value] of formData) {
			if (key === 'work_year') {
				value = value.split(' ');
				experience['work_month'] = value[0];
				experience[key] = value[1];
				continue;
			} else if (key === 'experience_description') {
				experience['description'] = value;
				continue;
			}
			experience[key] = value;
		}
		try {
			await dispatch(experienceAdded(experience, token));
			form.reset();
		} catch (error) {
			dispatch(experienceFailed(error.message));
		}
	};

	const handleAddPortfolio = async e => {
		e.preventDefault();
		const form = e.target;
		const token = getTokenFromLocalStorage();
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		try {
			dispatch(portfolioAdded(data, token));
			form.reset();
		} catch (error) {
			dispatch(portfolioFailed(error.message));
		}
	};

	return (
		<div className='space-y-10 w-full'>
			<EditForm
				method='put'
				title='Foto profil'
				uploadFile={true}
				onSubmit={handleUpdatePhoto}
			>
				<UploadPhotoProfil label='Ubah foto profil' name='photo' />
				<Button fullWidth variant='ghost-yellow' type='submit'>
					Simpan
				</Button>
			</EditForm>
			<EditForm method='put' title='Data diri' onSubmit={handleSubmitBiodata}>
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
							<span>Menyimpan</span>
						</>
					) : (
						'Simpan'
					)}
				</Button>
			</EditForm>
			<EditForm title='Skill' onSubmit={handleAddSkill}>
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
						{skillsStatus === 'loading' ? (
							<>
								<svg
									width='20'
									height='20'
									fill='currentColor'
									className='animate-spin'
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
					{/* 
						1. tampilkan list skill
						2. menambahkan skill tidak mentrigger redirect
						3. tambahkan fungsionalitas delete
					*/}
				</div>
				{skills.length > 0 ? (
					<ul className='flex flex-wrap justify-start items-center gap-x-[10px] gap-y-5'>
						{skills.map(({ skill_name, id }) => {
							return (
								<SkillItemWithDelete key={id} skill={skill_name} id={id} />
							);
						})}
					</ul>
				) : (
					<p>Ayo tambahkan skill kamu</p>
				)}
			</EditForm>
			<EditForm title='Pengalaman Kerja' onSubmit={handleAddExperience}>
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
				{experiencesStatus === 'loading' ? (
					<ExperienceSkeleton />
				) : experiences.length > 0 ? (
					<ExperienceList experiences={experiences} />
				) : (
					<p>Kamu belum memiliki pengalaman</p>
				)}
			</EditForm>
			<EditForm
				title='Portofolio'
				uploadFile={true}
				onSubmit={handleAddPortfolio}
			>
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

				{portfolioStatus === 'loading' ? (
					<PortfolioSkeleton />
				) : portfolio.length > 0 ? (
					<PortfolioList portfolio={portfolio} />
				) : (
					<p>Kamu belum memiliki portofolio</p>
				)}
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
