import { useRouteLoaderData, useLoaderData } from 'react-router-dom';
import NavLink from '../../worker/nav-link';
import ExperienceList from '../../worker/experience/experience-list';

// const EXPERIENCES = [
// 	{
// 		position: 'Frontend Developer',
// 		company: 'PT. ABCD',
// 		work_month: 'Desember',
// 		work_year: '2020',
// 		description: 'testing description',
// 	},
// 	{
// 		position: 'Frontend Developer',
// 		company: 'PT. ABCD',
// 		work_month: 'Desember',
// 		work_year: '2020',
// 		description: 'testing description',
// 	},
// ];

export default function ProfileExperience() {
	const { profile } = useRouteLoaderData('profile');
	const { experiences } = useLoaderData();
	return (
		<section className='flex-1 bg-white rounded-lg p-[30px] h-fit'>
			<nav className='mb-7'>
				<ul className='flex items-center gap-[30px]'>
					<NavLink to='/profile/portfolio' category='experience'>
						Portofolio
					</NavLink>
					<NavLink to='/profile/experience' category='experience'>
						Pengalaman Kerja
					</NavLink>
				</ul>
			</nav>

			{experiences.length > 0 ? (
				<ExperienceList experiences={experiences} />
			) : (
				<p>{profile.name} belum memiliki pengalaman</p>
			)}
		</section>
	);
}
