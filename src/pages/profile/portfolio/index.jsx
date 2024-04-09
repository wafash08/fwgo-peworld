import { useLoaderData } from 'react-router-dom';
import NavLink from '../../worker/nav-link';
import PortfolioList from './portfolio-list';

export default function ProfilePortfolio() {
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
				<PortfolioList portfolio={portfolio} />
			) : (
				<p>Kamu belum memiliki portofolio</p>
			)}
		</section>
	);
}
