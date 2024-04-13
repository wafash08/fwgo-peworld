import { Outlet, useLoaderData } from 'react-router-dom';
import Container from '../components/container';
import NavbarDesktop from '../components/navbar-desktop';
import Footer from '../components/footer';

export default function Root() {
	const { user, role, isAuthenticated } = useLoaderData();

	return (
		<>
			<header className='fixed top-0 left-0 w-full z-[1000] bg-white/70 backdrop-blur'>
				<Container>
					<NavbarDesktop
						isAuthenticated={isAuthenticated}
						role={role}
						user={user}
					/>
				</Container>
			</header>
			<main className='pt-20'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
