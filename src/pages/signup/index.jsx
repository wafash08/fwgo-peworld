import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupWorkerForm from './signup-worker-form';
import SignupRecruiterForm from './signup-recruiter-form';
import Container from '../../components/container';
import whitePeworldLogo from '../../assets/peworld-logo-white.webp';
import { useDispatch } from 'react-redux';
import { authFailed, authSignedUp } from '../../redux/actions/auth.action';
import { createNewUser } from '../../utils';

export default function SignupPage() {
	const [role, setRole] = useState('worker');
	const [validationError, setValidationError] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChangeRole = role => {
		setRole(role);
	};

	const handleSignup = async e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const role = formData.get('role');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		if (confirmPassword !== password) {
			setValidationError(
				'Konfirmasi kata sandi tidak sesuai dengan kata sandi'
			);
			return;
		}

		const user = createNewUser(formData);
		try {
			await dispatch(authSignedUp(user, role));
			navigate('/login');
		} catch (error) {
			dispatch(authFailed(error.message));
		}
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
					<h2 className='text-[32px] text-yankees-blue font-semibold mt-8 mb-4'>
						Halo, Pewpeople
					</h2>
					<p className='text-lg text-davys-gray mb-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
						ipsum et dui rhoncus auctor.
					</p>
					<div className='mb-6'>
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
					<form method='post' onSubmit={handleSignup}>
						{role === 'worker' ? (
							<SignupWorkerForm role={role} validationError={validationError} />
						) : (
							<SignupRecruiterForm
								role={role}
								validationError={validationError}
							/>
						)}
					</form>
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
