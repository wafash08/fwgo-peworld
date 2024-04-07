import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import PortofolioItem from './portofolio-item';

export default function WorkerPortofolio() {
	const { portofolio } = useLoaderData();
	const { worker } = useRouteLoaderData('worker');

	return portofolio.length > 0 ? (
		<ul className='grid grid-cols-3 gap-x-4 gap-y-[30px]'>
			{portofolio.map(({ id, image, aplication_name }) => {
				return <PortofolioItem key={id} src={image} name={aplication_name} />;
			})}
		</ul>
	) : (
		<p>{worker.name} belum memiliki portofolio</p>
	);
}
