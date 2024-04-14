import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function NavLinkProfile({ children, to, category, className }) {
	let currentPath = useCurrentPath();
	currentPath = currentPath ? currentPath : 'portfolio';
	const currentCategory = currentPath === category;

	return (
		<li>
			<Link
				to={to}
				className={clsx(
					'text-[22px] font-semibold py-2 relative inline-block',
					currentCategory ? 'text-yankees-blue' : 'text-quick-silver',
					className
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
// khusus digunakan untuk memeriksa profile path
function useCurrentPath() {
	const { pathname } = useLocation();
	const paths = pathname.split('/');
	const currentPath = paths[2];
	return currentPath;
}
