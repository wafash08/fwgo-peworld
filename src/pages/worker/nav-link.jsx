import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function NavLink({ children, to, category }) {
	let currentPath = useCurrentPath();
	currentPath = currentPath ? currentPath : 'portfolio';
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

// function ini digunakan untuk menentukan path mana yang sedang aktif.
// path yang diperiksa di sini hanya ada dua, yaitu portfolio dan experience
// kedua path ini ada di dua url yang berbeda, yaitu
// 1. url profile: /profile/portfolio atau /profile/experience
// 2. url workers: /workers/:workerId/portfolio atau /workers/:workerId/experience
function useCurrentPath() {
	const { pathname } = useLocation();
	const inWorkersPath = pathname.includes('workers');
	const paths = pathname.split('/');
	const currentPath = inWorkersPath ? paths[3] : paths[2];
	return currentPath;
}
