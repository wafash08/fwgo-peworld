import { useRouteLoaderData, useLoaderData } from 'react-router-dom';
import NavLink from '../../worker/nav-link';
import PortfolioList from './portfolio-list';

export default function ProfilePortfolio() {
	const { profile } = useRouteLoaderData('profile');
	const { portfolio } = useLoaderData();

	return (
		<section className='flex-1 bg-white rounded-lg p-[30px] h-fit'>
			<nav className='mb-7'>
				<ul className='flex items-center gap-[30px]'>
					<NavLink to='/profile/portfolio' category='portfolio'>
						Portofolio
					</NavLink>
					<NavLink to='/profile/experience' category='portfolio'>
						Pengalaman Kerja
					</NavLink>
				</ul>
			</nav>

			{portfolio.length > 0 ? (
				portfolio.map(({ id, aplication_name, image }) => {
					return (
						<PortfolioList
							key={id}
							aplication_name={aplication_name}
							id={id}
							image={image}
						/>
					);
				})
			) : (
				<p>{profile.name} belum memiliki portofolio</p>
			)}
		</section>
	);
}
