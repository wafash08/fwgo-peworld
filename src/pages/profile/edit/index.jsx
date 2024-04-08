import { useNavigate } from 'react-router-dom';
import typeFileUpload from '../../../assets/type-file-upload.png';
import sizeUpload from '../../../assets/size-upload.png';
import EditForm from './edit-form';
import EditInput from './edit-input';
import EditTextarea from './edit-textarea';
import EditSubmitButton from './edit-submit-button';

export default function EditProfile() {
	const navigate = useNavigate();
	return (
		<div class='space-y-10 md:flex-1'>
			<EditForm title='Data diri'>
				<EditInput
					label='Nama lengkap'
					name='name'
					placeholder='Masukkan nama lengkap'
				/>
				<EditInput
					label='Job title'
					name='job_desk'
					placeholder='Masukkan job title'
				/>
				<EditInput
					label='Domisili'
					name='domicile'
					placeholder='Masukkan domisili'
				/>
				<EditInput
					label='Tempat kerja'
					name='workplace'
					placeholder='Masukkan tempat kerja'
				/>
				<EditTextarea
					label='Deskripsi'
					name='description'
					placeholder='Tuliskan deskripsi singkat'
				/>
				<EditSubmitButton variant='ghost'>Simpan</EditSubmitButton>
			</EditForm>
			<EditForm title='Skill'>
				<div class='flex gap-[10px]'>
					<input
						class='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36] md:flex-1'
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
				<div class='flex flex-col md:flex-row gap-8 md:gap-5'>
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
					name='description'
					placeholder='Deskripsikan pekerjaan anda'
				/>
				<div class='h-[1px] bg-azureish-white my-2' />
				<EditSubmitButton variant='ghost'>
					Tambah pengalaman kerja
				</EditSubmitButton>
			</EditForm>
			<EditForm title='Portofolio'>
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
				<div class='h-[1px] bg-azureish-white my-2' />
				<EditSubmitButton variant='ghost'>Tambah portofolio</EditSubmitButton>
			</EditForm>
			{/* <section class='bg-white rounded-lg'>
				<header class='p-5 md:p-[30px]'>
					<h2 class='text-lg md:text-[22px] text-[#1F2A36] font-semibold'>
						Portofolio
					</h2>
				</header>
				<div class='bg-[#E2E5ED] h-[1px] mb-30px'></div>
				<div class='p-5 pt-8 md:p-[30px] grid gap-8'>
					<div class='flex flex-col gap-1'>
						<label class='text-xs text-[#9EA0A5]' for='namaAplikasi'>
							Nama aplikasi
						</label>
						<input
							class='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36]'
							type='text'
							name='namaAplikasi'
							id='namaAplikasi'
							placeholder='Masukan nama aplikasi'
						/>
					</div>
					<div class='flex flex-col gap-1'>
						<label class='text-xs text-[#9EA0A5]' for='deskripsiPortofolio'>
							Deskripsi singkat
						</label>
						<textarea
							class='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36]'
							name='deskripsiPortofolio'
							id='deskripsiPortofolio'
							cols='30'
							rows='5'
							placeholder='Deskripsikan aplikasi anda'
						></textarea>
					</div>
					<div class='flex flex-col gap-1'>
						<label class='text-xs text-[#9EA0A5]' for='linkPublikasi'>
							Link publikasi
						</label>
						<input
							class='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36]'
							type='text'
							name='linkPublikasi'
							id='linkPublikasi'
							placeholder='Masukan link publikasi'
						/>
					</div>
					<div class='flex flex-col gap-1'>
						<label class='text-xs text-[#9EA0A5]' for='linkRepository'>
							Link repository
						</label>
						<input
							class='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36]'
							type='text'
							name='linkRepository'
							id='linkRepository'
							placeholder='Masukan link repository'
						/>
					</div>
					<div class='flex flex-col gap-1'>
						<label class='text-xs text-[#9EA0A5]' for='tempatKerjaTerkait'>
							Tempat kerja terkait
						</label>
						<input
							class='p-4 border border-[#E2E5ED] placeholder:text-sm placeholder:text-[#858D96] rounded text-sm text-[#1F2A36]'
							type='text'
							name='tempatKerjaTerkait'
							id='tempatKerjaTerkait'
							placeholder='Masukan tempat kerja'
						/>
					</div>
					<div class='flex flex-col gap-1'>
						<p class='text-xs text-[#9EA0A5]'>Type portofolio</p>
						<div class='flex items-center gap-2'>
							<div class='relative flex items-center gap-3 p-3'>
								<input
									type='radio'
									name='typePortofolio'
									id='aplikasiMobile'
									checked
									class='peer'
								/>
								<label
									for='aplikasiMobile'
									class='text-sm font-semibold text-[#46505C]'
								>
									Aplikasi Mobile
								</label>
								<div class='absolute inset-0 bg-transparent pointer-events-none cursor-pointer transition-colors duration-300 border border-transparent peer-checked:border-[#E2E5ED] rounded'></div>
							</div>
							<div class='relative flex items-center gap-3 p-3'>
								<input
									type='radio'
									name='typePortofolio'
									id='aplikasiWeb'
									class='peer'
								/>
								<label
									for='aplikasiWeb'
									class='text-sm font-semibold text-[#46505C]'
								>
									Aplikasi Web
								</label>
								<div class='absolute inset-0 bg-transparent pointer-events-none cursor-pointer transition-colors duration-300 border border-transparent peer-checked:border-[#E2E5ED] rounded'></div>
							</div>
						</div>
					</div>
					<div class='flex flex-col gap-1'>
						<p class='text-xs text-[#9EA0A5]' for='gambarPortofolio'>
							Upload gambar
						</p>
						<div>
							<input
								class='upload-input'
								type='file'
								name='gambarPortofolio'
								id='gambarPortofolio'
							/>
							<label class='text-[#9EA0A5] upload-label' for='gambarPortofolio'>
								<div>
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
								<p>Upload file dari penyimpanan</p>
								<div>
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
							</label>
						</div>
					</div>
					<div class='h-[1px] bg-[#E2E5ED] my-2'></div>
					<button
						type='button'
						class='text-base text-[#FBB017] border border-[#FBB017] font-bold p-4 rounded'
					>
						Tambah pengalaman kerja
					</button>
				</div>
			</section> */}
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
