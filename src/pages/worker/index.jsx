import { useLoaderData, Outlet, useLocation } from 'react-router-dom';
import Container from '../../components/container';
import NavLink from './nav-link';
import WorkerProfile from './worker-profile';

export default function WorkerPage() {
	const { worker, skills } = useLoaderData();
	const { pathname } = useLocation();
	const currentPathname = pathname.split('/')[3];
	// memecah pathname url: ['', 'workers', 'e42b682b-3029-4cc3-98fb-f14c8fdad379', 'portofolio'];
	const category = currentPathname ? currentPathname : 'portfolio';

	return (
		<div className='bg-cultured pb-24'>
			<div className='h-[350px] bg-primary-purple' />

			<Container className='flex gap-8 -mt-[280px]'>
				<WorkerProfile worker={worker} skills={skills} />
				<section className='flex-1 bg-white rounded-lg p-[30px] h-fit'>
					<nav className='mb-7'>
						<ul className='flex items-center gap-[30px]'>
							<NavLink to='portfolio' category={category}>
								Portofolio
							</NavLink>
							<NavLink to='experience' category={category}>
								Pengalaman Kerja
							</NavLink>
						</ul>
					</nav>

					<Outlet />
				</section>
			</Container>
		</div>
	);
}
