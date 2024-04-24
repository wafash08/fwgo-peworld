import clsx from 'clsx';
import { useSelector } from 'react-redux';

function WorkerList({ children }) {
	const { status } = useSelector(state => state.home);
	return (
		<ul
			className={clsx(
				'bg-white shadow-[0px_1px_20px_0px] shadow-[#C5C5C5]/40 mt-[50px] rounded-md overflow-hidden mb-[50px]',
				status === 'loading' && 'animate-pulse'
			)}
		>
			{children}
		</ul>
	);
}

export default WorkerList;
