import clsx from 'clsx';
import WorkerItem from './worker-item';

export default function WorkerList({ workers, searching }) {
	return (
		<ul
			className={clsx(
				'bg-white shadow-[0px_1px_20px_0px] shadow-[#C5C5C5]/40 mt-[50px] rounded-md overflow-hidden mb-[50px]',
				searching && 'animate-pulse'
			)}
		>
			{workers.map(worker => {
				return <WorkerItem key={worker.id} worker={worker} />;
			})}
		</ul>
	);
}
