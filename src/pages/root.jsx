import { Outlet } from 'react-router-dom';
import Container from '../components/container';
import NavbarDesktop from '../components/navbar-desktop';
import Footer from '../components/footer';

export default function Root() {
	return (
		<>
			<header>
				<Container classNames=''>
					<NavbarDesktop />
				</Container>
			</header>
			<Outlet />
			<Footer />
		</>
	);
}
