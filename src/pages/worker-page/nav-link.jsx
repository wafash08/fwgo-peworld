import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function NavLink({ children, to, category }) {
	// const location = useLocation();

	// const [currentCategory, setCurrentCategory] = useState(
	// 	'?category=portofolio'
	// );

	// useEffect(() => {
	// 	const search = location.search;
	// 	if (search) {
	// 		setCurrentCategory(search);
	// 	}
	// }, [location]);

	// const current = currentCategory === to;

	const current = category
		? category === to.split('=')[1]
		: to.split('=')[1] === 'portofolio';

	return (
		<li>
			<Link
				to={to}
				className={clsx(
					'text-[22px] font-semibold py-2 relative inline-block',
					current ? 'text-yankees-blue' : 'text-quick-silver'
				)}
			>
				{children}
				<div
					className={clsx(
						'absolute bottom-0 left-0 w-full h-1 transition-transform scale-x-0 bg-primary-purple rounded-full origin-left duration-100',
						current ? 'scale-x-100' : 'scale-x-0'
					)}
				/>
			</Link>
		</li>
	);
}
