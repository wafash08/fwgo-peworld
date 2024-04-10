import { useLoaderData, Outlet, useLocation } from 'react-router-dom';
import Container from '../../components/container';
import WorkerProfile from './worker-profile';
import clsx from 'clsx';

export default function WorkerPage() {
	const { worker, skills } = useLoaderData();
	const location = useLocation();

	const inHirePage = location.pathname.split('/').includes('hire');

	return (
		<div className='bg-cultured pb-24'>
			<div className={clsx('h-[350px]', !inHirePage && 'bg-primary-purple')} />

			<Container className='flex gap-8 -mt-[280px]'>
				<WorkerProfile
					worker={worker}
					skills={skills}
					notInHirePage={!inHirePage}
				/>
				<Outlet />
			</Container>
		</div>
	);
}
