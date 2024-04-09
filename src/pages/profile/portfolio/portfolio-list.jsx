import { Link } from 'react-router-dom';

export default function PortfolioList({ portfolio }) {
	return (
		<ul className='grid grid-cols-3 gap-x-4 gap-y-[30px]'>
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
	return (
		<li>
			<Link to={to} target='_blank' className='rounded block'>
				<div className='rounded overflow-hidden mb-3 h-40'>
					<img src={src} alt={name} className='h-full w-full object-cover' />
				</div>
				<p className='text-center text-sm text-yankees-blue'>{name}</p>
			</Link>
		</li>
	);
}
