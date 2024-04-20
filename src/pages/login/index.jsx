import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/container';
import whitePeworldLogo from '../../assets/peworld-logo-white.webp';
import Input from '../../components/input';
import Button from '../../components/button';
import { userLoggedIn } from '../../redux/actions/user.actions';

export default function LoginPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const from = params.get('from') || '/';
	const dispatch = useDispatch();
	const status = useSelector(state => state.user.status);
	const error = useSelector(state => state.user.error);

	const handleLogin = async e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get('email');
		const password = formData.get('password');
		let redirectTo = formData.get('redirectTo');
		await dispatch(userLoggedIn({ email, password }));
		navigate(redirectTo);
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
						Temukan developer berbakat & terbaik di berbagai bidang keahlian
					</h1>
				</section>
				<section className='flex-1'>
					<h2 className='text-[32px] text-yankees-blue font-semibold mt-24 mb-4'>
						Halo, Pewpeople
					</h2>
					<p className='text-lg text-davys-gray mb-12'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
						ipsum et dui rhoncus auctor.
					</p>
					<form method='post' onSubmit={handleLogin}>
						<div className='grid gap-8 mb-12'>
							<input type='hidden' name='redirectTo' value={from} />
							<Input
								label='Email'
								name='email'
								type='email'
								placeholder='Masukan alamat email'
								required
							/>
							<Input
								label='Kata sandi'
								name='password'
								type='password'
								placeholder='Masukan kata sandi'
								required
								minLength={4}
							/>
							{status === 'failed' ? (
								<span className='text-sm text-red-500'>{error}</span>
							) : null}
						</div>
						<p className='text-yankees-blue text-right mb-6'>
							<Link to='/signup'>Lupa kata sandi?</Link>
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
									<span className='sr-only'>Submitting</span>
								</>
							) : (
								'Masuk'
							)}
						</Button>
					</form>
					<p className='mt-7 text-yankees-blue text-center'>
						Anda belum punya akun?{' '}
						<Link to='/signup' className='text-primary-yellow'>
							Daftar di sini
						</Link>
					</p>
				</section>
			</Container>
		</main>
	);
}
