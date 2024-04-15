import { Link } from 'react-router-dom';
import Container from './container';
import whitePeworldLogo from '../assets/peworld-logo-white.webp';

export default function Footer() {
	return (
		<footer className='bg-primary-purple pt-[70px] pb-10'>
			<Container className='text-white text-base md:text-lg'>
				<Link to='/' className='mb-[30px] inline-block'>
					<img
						src={whitePeworldLogo}
						alt='Logo peworld'
						width={178}
						height={50}
					/>
				</Link>

				<p className='mb-16 w-full max-w-96'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
					ipsum et dui rhoncus auctor.
				</p>

				<div className='bg-white w-full h-[1px] mb-[30px]' />

				<div className='flex flex-col-reverse gap-4 md:flex-row md:justify-between'>
					<p>{new Date().getFullYear()} Peworld. All right reserved</p>
					<div className='flex items-center gap-10 lg:gap-20'>
						<p>Telepon</p>
						<p>Email</p>
					</div>
				</div>
			</Container>
		</footer>
	);
}
