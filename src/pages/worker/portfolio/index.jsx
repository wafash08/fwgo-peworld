import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import PortfolioItem from './portfolio-item';

export default function WorkerPortfolio() {
	const { portfolio } = useLoaderData();
	const { worker } = useRouteLoaderData('worker');

	return portfolio.length > 0 ? (
		<ul className='grid grid-cols-3 gap-x-4 gap-y-[30px]'>
			{portfolio.map(({ id, image, application_name }) => {
				return <PortfolioItem key={id} src={image} name={application_name} />;
			})}
		</ul>
	) : (
		<p>{worker.name} belum memiliki portofolio</p>
	);
}
