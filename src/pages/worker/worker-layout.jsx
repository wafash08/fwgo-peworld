import { useRouteLoaderData } from 'react-router-dom';
import NavLink from './nav-link';

export default function WorkerLayout({ children }) {
	const { worker } = useRouteLoaderData('worker');

	return (
		<section className='w-full bg-white rounded-lg p-[30px]'>
			<nav className='mb-7'>
				<ul className='flex flex-row items-center gap-[30px] overflow-auto'>
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
