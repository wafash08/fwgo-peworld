import NavLink from '../worker/nav-link';

export default function ProfileLayout({ children }) {
	return (
		<section className='flex-1 bg-white rounded-lg p-[30px]'>
			<nav className='mb-7'>
				<ul className='flex items-center gap-[30px]'>
					<NavLink to='/profile/portfolio' category='portfolio'>
						Portofolio
					</NavLink>
					<NavLink to='/profile/experience' category='experience'>
						Pengalaman Kerja
					</NavLink>
				</ul>
			</nav>

			{children}
		</section>
	);
}
