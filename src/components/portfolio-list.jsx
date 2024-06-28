export default function PortfolioList({ portfolio }) {
	return (
		<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[30px]'>
			{portfolio.map(({ id, image, application_name, link_repository }) => {
				return (
					<PortfolioItem
						key={id}
						src={image}
						name={application_name}
						to={link_repository}
					/>
				);
			})}
		</ul>
	);
}

function PortfolioItem({ src, name, to }) {
	const startWithHttp = to.startsWith('http');
	return (
		<li>
			<a
				href={startWithHttp ? to : 'https://' + to}
				target='_blank'
				rel='noopener noreferrer'
				className='rounded block'
			>
				<div className='rounded overflow-hidden mb-3 h-40'>
					<img src={src} alt={name} className='h-full w-full object-cover' />
				</div>
				<p className='text-center text-sm text-yankees-blue'>{name}</p>
			</a>
		</li>
	);
}
