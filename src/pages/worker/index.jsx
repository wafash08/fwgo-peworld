import { useLoaderData, useSearchParams } from 'react-router-dom';
import Container from '../../components/container';
import NavLink from './nav-link';
import ProjectItem from './project-item';
import WorkerProfile from './worker-profile';
import ExperienceList from './experience-list';

export default function WorkerPage() {
	const { worker, skills, portofolio, experiences } = useLoaderData();
	const [searchParams, _] = useSearchParams();
	const search = searchParams.get('category');
	const category = search ? search : 'portofolio';

	return (
		<div className='bg-cultured pb-24'>
			<div className='h-[350px] bg-primary-purple' />

			<Container className='flex gap-8 -mt-[280px]'>
				<WorkerProfile worker={worker} skills={skills} />
				<section className='flex-1 bg-white rounded-lg p-[30px] h-fit'>
					<nav className='mb-7'>
						<ul className='flex items-center gap-[30px]'>
							<NavLink to='?category=portofolio' category={category}>
								Portofolio
							</NavLink>
							<NavLink to='?category=experience' category={category}>
								Pengalaman Kerja
							</NavLink>
						</ul>
					</nav>

					{category === 'portofolio' ? (
						portofolio.length > 0 ? (
							<ul className='grid grid-cols-3 gap-x-4 gap-y-[30px]'>
								{portofolio.map(({ id, image, aplication_name }) => {
									return (
										<ProjectItem key={id} src={image} name={aplication_name} />
									);
								})}
							</ul>
						) : (
							<p>{worker.name} belum memiliki portofolio</p>
						)
					) : experiences.length > 0 ? (
						<ExperienceList experiences={experiences} />
					) : (
						<p>{worker.name} belum memiliki pengalaman</p>
					)}
				</section>
			</Container>
		</div>
	);
}
