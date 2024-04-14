import { useState } from 'react';
import { Link, useActionData } from 'react-router-dom';
import SignupWorkerForm from './signup-worker-form';
import SignupRecruiterForm from './signup-recruiter-form';
import Container from '../../components/container';
import whitePeworldLogo from '../../assets/peworld-logo-white.png';

export default function SignupPage() {
	const errors = useActionData();
	const [role, setRole] = useState('worker');

	const handleChangeRole = role => {
		setRole(role);
	};

	return (
		<main className='pt-10 pb-16 bg-cultured'>
			<Container className='max-w-[1322px] flex md:gap-8 lg:gap-16'>
				<section className='hidden md:block flex-1 bg-login min-h-screen max-h-[830px] bg-primary-purple bg-no-repeat bg-cover bg-blend-overlay'>
					<Link
						to='/'
						className='md:ml-5 md:mt-5 lg:ml-11 lg:mt-11 inline-block'
					>
						<span className='sr-only'>to landing page</span>
						<img
							src={whitePeworldLogo}
							alt='logo peworld'
							width={86}
							height={24}
						/>
					</Link>
					<h1 className='md:mx-8 lg:mx-16 md:mt-20 lg:mt-44 max-w-[456px] text-white md:text-4xl md:leading-relaxed lg:text-[44px] font-bold'>
						Temukan developer berbakat & terbaik di berbagai bidang keahlian
					</h1>
				</section>
				<section className='flex-1'>
					<div className='mt-8'>
						<p>Daftar sebagai:</p>
						<div className='flex justify-start gap-8'>
							<div className='flex items-center gap-2'>
								<label htmlFor='worker'>Pekerja</label>
								<input
									type='radio'
									name='role'
									id='worker'
									value='worker'
									checked={role === 'worker'}
									onChange={() => handleChangeRole('worker')}
								/>
							</div>
							<div className='flex items-center gap-2'>
								<label htmlFor='recruiter'>Perekrut</label>
								<input
									type='radio'
									name='role'
									id='recruiter'
									value='recruiter'
									checked={role === 'recruiter'}
									onChange={() => handleChangeRole('recruiter')}
								/>
							</div>
						</div>
					</div>
					<h2 className='text-[32px] text-yankees-blue font-semibold mt-2 mb-4'>
						Halo, Pewpeople
					</h2>
					<p className='text-lg text-davys-gray mb-12'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
						ipsum et dui rhoncus auctor.
					</p>
					{role === 'worker' ? (
						<SignupWorkerForm role={role} errors={errors} />
					) : (
						<SignupRecruiterForm role={role} errors={errors} />
					)}
					<p className='mt-7 text-yankees-blue text-center'>
						Anda sudah punya akun?{' '}
						<Link to='/login' className='text-primary-yellow'>
							Masuk di sini
						</Link>
					</p>
				</section>
			</Container>
		</main>
	);
}
