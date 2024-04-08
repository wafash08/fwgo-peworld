import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function NavLink({ children, to, category }) {
	const paths = to.split('/');

	let currentPath = null;
	if (paths.length === 1) {
		currentPath = paths[0];
	} else {
		currentPath = paths[2];
	}

	const currentCategory = currentPath === category;

	return (
		<li>
			<Link
				to={to}
				className={clsx(
					'text-[22px] font-semibold py-2 relative inline-block',
					currentCategory ? 'text-yankees-blue' : 'text-quick-silver'
				)}
			>
				{children}
				<div
					className={clsx(
						'absolute bottom-0 left-0 w-full h-1 transition-transform scale-x-0 bg-primary-purple rounded-full origin-left duration-100',
						currentCategory ? 'scale-x-100' : 'scale-x-0'
					)}
				/>
			</Link>
		</li>
	);
}
