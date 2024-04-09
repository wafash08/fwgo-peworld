import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../components/container';
import NavbarDesktop from '../components/navbar-desktop';
import Footer from '../components/footer';

export default function Root() {
	const [hasUserLoggedIn, setHasUserLoggedIn] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem('peworld_user');
		if (user) {
			setHasUserLoggedIn(true);
		}
	});

	return (
		<>
			<header className='fixed top-0 left-0 w-full z-[1000] bg-white/70 backdrop-blur'>
				<Container>
					<NavbarDesktop hasLoggedIn={hasUserLoggedIn} />
				</Container>
			</header>
			<main className='pt-20'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
