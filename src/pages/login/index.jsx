import { Form, Link, useActionData, useLocation } from 'react-router-dom';
import Container from '../../components/container';
import whitePeworldLogo from '../../assets/peworld-logo-white.webp';
import Input from '../../components/input';
import Button from '../../components/button';

export default function LoginPage() {
	let location = useLocation();
	let params = new URLSearchParams(location.search);
	let from = params.get('from') || '/';

	const error = useActionData();
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
					<Form method='post' replace>
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
							{error ? (
								<span className='text-sm text-red-500'>{error.message}</span>
							) : null}
						</div>
						<p className='text-yankees-blue text-right mb-6'>
							<Link to='/signup'>Lupa kata sandi?</Link>
						</p>
						<Button type='submit' fullWidth>
							Masuk
						</Button>
					</Form>
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
