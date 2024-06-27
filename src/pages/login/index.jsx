import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/container';
import whitePeworldLogo from '../../assets/peworld-logo-white.webp';
import Input from '../../components/input';
import { Button } from '../../components/button';
import { authFailed, authLoggedIn } from '../../redux/actions/auth.action';
import toast from 'react-hot-toast';

export default function LoginPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const from = params.get('from') || '/';
	const dispatch = useDispatch();
	const status = useSelector(state => state.auth.status);
	const error = useSelector(state => state.auth.error);

	const handleLogin = async e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get('email');
		const password = formData.get('password');
		const redirectTo = formData.get('redirectTo');
		try {
			await dispatch(authLoggedIn({ email, password }));
			toast("You've successfully signed in", {
				icon: '🤗',
				style: { backgroundColor: '#4ade80', color: '#fff' },
			});
			navigate(redirectTo);
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
					<h1 className='md:mx-8 md:mt-20 md:text-4xl md:leading-relaxed lg:mx-16 lg:mt-44 max-w-[456px] text-white lg:text-[44px] font-bold'>
						Discover talented and top-notch developers in various fields of
						expertise.
					</h1>
				</section>
				<section className='flex-1'>
					<h2 className='text-[32px] text-yankees-blue font-semibold mt-24 mb-4'>
						Hi, Pewpeople
					</h2>
					<p className='text-lg text-davys-gray mb-12 max-w-lg'>
						Unlock access to a vibrant community of tech professionals and
						innovative employers. Your next career move awaits!
					</p>
					<form method='post' onSubmit={handleLogin}>
						<div className='grid gap-8 mb-12'>
							<input type='hidden' name='redirectTo' value={from} />
							<Input
								label='Email'
								name='email'
								type='email'
								placeholder='Enter your email'
								required
							/>
							<Input
								label='Password'
								name='password'
								type='password'
								placeholder='Enter your password'
								required
								minLength={4}
							/>
							{status === 'failed' ? (
								<span className='text-sm text-red-500'>{error}</span>
							) : null}
						</div>
						<p className='text-yankees-blue text-right mb-6'>
							<Link to='/signup'>Forgot password?</Link>
						</p>
						<Button type='submit' fullWidth>
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
									<span className='sr-only'>Sedang masuk</span>
								</>
							) : (
								'Sign In'
							)}
						</Button>
					</form>
					<p className='mt-7 text-yankees-blue text-center'>
						Don't have an account yet?{' '}
						<Link to='/signup' className='text-primary-yellow'>
							Sign up here.
						</Link>
					</p>
				</section>
			</Container>
		</main>
	);
}
