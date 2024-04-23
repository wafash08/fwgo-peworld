import { Outlet, ScrollRestoration } from 'react-router-dom';
import Container from '../components/container';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Root() {
	return (
		<>
			<header className='fixed top-0 left-0 w-full z-[1000] bg-white/70 backdrop-blur'>
				<Container>
					<Navbar />
				</Container>
			</header>
			<main className='pt-20 overflow-x-hidden'>
				<Outlet />
				<ScrollRestoration />
			</main>
			<Footer />
		</>
	);
}
