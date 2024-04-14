import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import RecruiterProfile from './recruiter-profile';
import Container from '../../components/container';

export default function RecruiterPage() {
	const { recruiter } = useLoaderData();
	const { pathname } = useLocation();

	const paths = pathname.split('/');
	const inEditPage = paths.includes('edit');

	return (
		<div
			className={clsx('bg-cultured pb-48', inEditPage ? 'pt-0' : 'pt-[70px]')}
		>
			{inEditPage && <div className={'h-[350px] bg-primary-purple'} />}
			<Container>
				{inEditPage ? <Outlet /> : <RecruiterProfile recruiter={recruiter} />}
			</Container>
		</div>
	);
}
