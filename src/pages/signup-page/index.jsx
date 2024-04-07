import { Form, Link, redirect } from 'react-router-dom';
import Container from '../../components/container';
import whitePeworldLogo from '../../assets/peworld-logo-white.png';
import Input from '../../components/input';
import { signup } from '../../services/auth';

export async function action({ request }) {
	const formData = await request.formData();
	let newUser = {};
	for (const [key, value] of formData) {
		if (key === 'confirmPassword') {
			continue;
		}
		newUser[key] = value;
	}
	await signup(newUser);
	return redirect('/login');
}

export default function SignupPage() {
	return (
		<main className='pt-10 pb-16 bg-cultured'>
			<Container className='max-w-[1322px] flex gap-16'>
				<section className='flex-1 bg-login min-h-screen max-h-[830px] bg-primary-purple bg-no-repeat bg-cover bg-blend-overlay'>
					<Link to='/' className='ml-11 mt-11 inline-block'>
						<span className='sr-only'>to landing page</span>
						<img
							src={whitePeworldLogo}
							alt='logo peworld'
							width={86}
							height={24}
						/>
					</Link>
					<h1 className='mx-16 mt-44 max-w-[456px] text-white text-[44px] font-bold'>
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
					<Form method='post'>
						<div className='grid gap-8 mb-12'>
							<Input
								label='Nama'
								name='name'
								placeholder='Masukan nama panjang'
								required
							/>
							<Input
								label='Email'
								name='email'
								type='email'
								placeholder='Masukan alamat email'
								required
							/>
							<Input
								label='No handphone'
								name='phone'
								type='tel'
								placeholder='Masukan no handphone'
								required
							/>
							<Input
								label='Kata sandi'
								name='password'
								type='password'
								placeholder='Masukan kata sandi'
								required
							/>
							<Input
								label='Konfirmasi kata sandi'
								name='confirmPassword'
								type='password'
								placeholder='Masukan konfirmasi kata sandi'
								required
							/>
						</div>
						<button
							type='submit'
							className='w-full p-4 text-white bg-primary-yellow font-bold rounded'
						>
							Daftar
						</button>
					</Form>
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
