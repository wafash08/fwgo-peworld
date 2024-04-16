import { Form, useNavigate, useRouteLoaderData } from 'react-router-dom';
import Input from '../../../components/input';
export default function HirePage() {
	const { worker } = useRouteLoaderData('worker');
	const navigate = useNavigate();
	return (
		<section>
			<h1 className='text-4xl font-semibold text-yankees-blue mb-5'>
				Hubungi {worker.name}
			</h1>
			<p className='text-lg text-davys-gray mb-10'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
				ipsum et dui rhoncus auctor.
			</p>

			<Form method='post'>
				<div className='grid gap-8'>
					<Input
						label='Tujuan tentang pesan ini'
						name='message_purpose'
						placeholder='Projek'
					/>
					<Input
						label='Nama lengkap'
						name='name'
						placeholder='Masukkan nama lengkap'
					/>
					<Input
						label='Email'
						name='email'
						placeholder='Masukkan email'
						type='email'
					/>
					<Input
						label='No handphone'
						name='phone'
						placeholder='Masukkan no handphone'
					/>
					<div className='relative'>
						<label
							htmlFor='description'
							className='text-xs text-quick-silver block mb-1 ml-1'
						>
							Deskripsi
						</label>
						<textarea
							name='description'
							id='description'
							rows='10'
							placeholder='Deskripsikan/jelaskan lebih detail'
							className='w-full p-4 text-sm placeholder:text-sm text-roman-silver placeholder:text-roman-silver border border-azureish-white rounded'
						/>
						<button
							type='button'
							className='absolute bottom-4 right-[10px] bg-[#C4C4C4] p-2 rounded text-white'
						>
							<span className='sr-only'>Lampirkan berkas</span>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M14.2948 7.36678L8.16816 13.4934C7.4176 14.244 6.39962 14.6657 5.33816 14.6657C4.27671 14.6657 3.25872 14.244 2.50816 13.4934C1.7576 12.7429 1.33594 11.7249 1.33594 10.6634C1.33594 9.60199 1.7576 8.58401 2.50816 7.83344L8.63483 1.70678C9.1352 1.2064 9.81386 0.925293 10.5215 0.925293C11.2291 0.925293 11.9078 1.2064 12.4082 1.70678C12.9085 2.20715 13.1896 2.88581 13.1896 3.59344C13.1896 4.30108 12.9085 4.97973 12.4082 5.48011L6.27483 11.6068C6.02464 11.857 5.68531 11.9975 5.3315 11.9975C4.97768 11.9975 4.63835 11.857 4.38816 11.6068C4.13797 11.3566 3.99742 11.0173 3.99742 10.6634C3.99742 10.3096 4.13797 9.9703 4.38816 9.72011L10.0482 4.06678'
									stroke='currentColor'
									strokeWidth='1.33333'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
					<button
						type='submit'
						className='text-base border border-primary-yellow font-bold p-4 rounded text-white bg-primary-yellow mt-5'
					>
						Hire
					</button>
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
			</Form>
		</section>
	);
}
