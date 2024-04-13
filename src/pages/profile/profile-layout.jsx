import NavLinkProfile from './nav-link-profile';

export default function ProfileLayout({ children }) {
	return (
		<section className='flex-1 bg-white rounded-lg p-[30px]'>
			<nav className='mb-7'>
				<ul className='flex items-center gap-[30px]'>
					<NavLinkProfile to='/profile/portfolio' category='portfolio'>
						Portofolio
					</NavLinkProfile>
					<NavLinkProfile to='/profile/experience' category='experience'>
						Pengalaman Kerja
					</NavLinkProfile>
				</ul>
			</nav>

			{children}
		</section>
	);
}
