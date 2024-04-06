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
			<header>
				<Container classNames=''>
					<NavbarDesktop hasLoggedIn={hasUserLoggedIn} />
				</Container>
			</header>
			<Outlet />
			<Footer />
		</>
	);
}
