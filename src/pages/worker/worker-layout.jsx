import { useRouteLoaderData } from 'react-router-dom';
import NavLink from './nav-link';

export default function WorkerLayout({ children }) {
	const { worker } = useRouteLoaderData('worker');

	return (
		<section className='flex-1 bg-white rounded-lg p-[30px]'>
			<nav className='mb-7'>
				<ul className='flex items-center gap-[30px]'>
					<NavLink
						to={`/workers/${worker.id}?category=portfolio`}
						category='portfolio'
					>
						Portofolio
					</NavLink>
					<NavLink
						to={`/workers/${worker.id}?category=experience`}
						category='experience'
					>
						Pengalaman Kerja
					</NavLink>
				</ul>
			</nav>

			{children}
		</section>
	);
}
