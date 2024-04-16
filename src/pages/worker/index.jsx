import {
	useLoaderData,
	Outlet,
	useLocation,
	useSearchParams,
	useRouteLoaderData,
} from 'react-router-dom';
import clsx from 'clsx';
import Container from '../../components/container';
import WorkerProfile from './worker-profile';
import WorkerLayout from './worker-layout';
import WorkerPortfolio from './portfolio';
import WorkerExperience from './experience';

export default function WorkerPage() {
	const { role } = useRouteLoaderData('root');
	const { worker, skills, portfolio, experiences } = useLoaderData();
	const location = useLocation();
	const [searchParams, _] = useSearchParams();
	const currentCategory = searchParams.get('category') ?? 'portfolio';

	const inHirePage = location.pathname.split('/').includes('hire');

	return (
		<div className='bg-cultured pb-24'>
			<div className={clsx('h-[350px]', !inHirePage && 'bg-primary-purple')} />

			<Container className='flex flex-col lg:flex-row items-start gap-8 -mt-[280px]'>
				<WorkerProfile
					worker={worker}
					skills={skills}
					inHirePage={inHirePage}
					isRecruiter={role === 'recruiter'}
				/>
				{inHirePage ? (
					<Outlet />
				) : (
					<WorkerLayout>
						{currentCategory === 'portfolio' ? (
							<WorkerPortfolio name={worker.name} portfolio={portfolio} />
						) : (
							<WorkerExperience name={worker.name} experiences={experiences} />
						)}
					</WorkerLayout>
				)}
			</Container>
		</div>
	);
}
