export default function PortfolioList({ id, image, aplication_name }) {
	return (
		<ul className='grid grid-cols-3 gap-x-4 gap-y-[30px]'>
			{portofolio.map(({ id, image, aplication_name }) => {
				return <PortfolioItem key={id} src={image} name={aplication_name} />;
			})}
		</ul>
	);
}

function PortfolioItem({ src, name }) {
	<li>
		<div className='rounded overflow-hidden mb-3 h-40'>
			<img src={src} alt={name} className='h-full w-full object-cover' />
		</div>
		<p className='text-center text-sm text-yankees-blue'>{name}</p>
	</li>;
}
