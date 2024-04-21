export default function PortfolioSkeleton() {
	return (
		<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[30px] animate-pulse'>
			<li className='rounded bg-white'>
				<div className='mb-3 h-40 rounded bg-quick-silver' />
				<div className='h-5 bg-quick-silver' />
			</li>
			<li className='rounded bg-white'>
				<div className='mb-3 h-40 rounded bg-quick-silver' />
				<div className='h-5 bg-quick-silver' />
			</li>
			<li className='rounded bg-white'>
				<div className='mb-3 h-40 rounded bg-quick-silver' />
				<div className='h-5 bg-quick-silver' />
			</li>
		</ul>
	);
}
