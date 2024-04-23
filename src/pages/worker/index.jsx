import {
	Outlet,
	useLocation,
	useSearchParams,
	useParams,
} from 'react-router-dom';
import clsx from 'clsx';
import Container from '../../components/container';
import WorkerProfile from './worker-profile';
import WorkerLayout from './worker-layout';
import WorkerPortfolio from './portfolio';
import WorkerExperience from './experience';
import { getRoleFromLocalStorage } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { workerLoaded } from '../../redux/actions/worker.action';

export default function WorkerPage() {
	const role = getRoleFromLocalStorage();
	const { workerId } = useParams();
	const { data, status } = useSelector(state => state.worker);
	const { profile, portfolio, experiences, skills } = data;
	const location = useLocation();
	const dispatch = useDispatch();
	const [searchParams, _] = useSearchParams();
	const currentCategory = searchParams.get('category') ?? 'portfolio';

	const inHirePage = location.pathname.split('/').includes('hire');

	useEffect(() => {
		dispatch(workerLoaded(workerId));
	}, []);

	return (
		<div className='bg-cultured pb-24'>
			<div className={clsx('h-[350px]', !inHirePage && 'bg-primary-purple')} />

			<Container className='flex flex-col lg:flex-row items-start gap-8 -mt-[280px]'>
				<WorkerProfile
					status={status}
					worker={profile}
					skills={skills}
					inHirePage={inHirePage}
					isRecruiter={role === 'recruiter'}
				/>
				{inHirePage ? (
					<Outlet />
				) : (
					<WorkerLayout>
						{currentCategory === 'portfolio' ? (
							<WorkerPortfolio
								name={profile.name}
								portfolio={portfolio}
								status={status}
							/>
						) : (
							<WorkerExperience
								name={profile.name}
								experiences={experiences}
								status={status}
							/>
						)}
					</WorkerLayout>
				)}
			</Container>
		</div>
	);
}
