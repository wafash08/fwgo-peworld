import { useLoaderData } from 'react-router-dom';
import NavLink from '../../worker/nav-link';
import ExperienceList from '../../worker/experience/experience-list';

export default function ProfileExperience() {
	const { experiences } = useLoaderData();
	return (
		<section className='flex-1 bg-white rounded-lg p-[30px]'>
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
				<p>Kamu belum memiliki pengalaman</p>
			)}
		</section>
	);
}
