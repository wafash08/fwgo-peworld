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
			toast("You've successfully registered", {
				icon: '🤗',
				style: { backgroundColor: '#4ade80', color: '#fff' },
			});
			navigate('/login');
		} catch (error) {
			toast('Failed to create your account due to ' + error.message, {
				icon: '🤗',
				style: { backgroundColor: '#ef4444', color: '#fff' },
			});
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
						Discover talented and top-notch developers in various fields of
						expertise.
					</h1>
				</section>
				<section className='flex-1'>
					<h2 className='text-[32px] text-yankees-blue font-semibold mt-8 mb-4'>
						Hi, Pewpeople
					</h2>
					<p className='text-lg text-davys-gray mb-4'>
						Create your Peworld account to connect with leading tech
						professionals and explore exciting career opportunities. Join us
						today!
					</p>
					<div className='mb-6'>
						<p>Sign up as:</p>
						<div className='flex justify-start gap-8'>
							<div className='flex items-center gap-2'>
								<label htmlFor='worker'>Worker</label>
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
								<label htmlFor='recruiter'>Recruiter</label>
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
						Do you already have an account?{' '}
						<Link to='/login' className='text-primary-yellow'>
							Sign in here.
						</Link>
					</p>
				</section>
			</Container>
		</main>
	);
}
