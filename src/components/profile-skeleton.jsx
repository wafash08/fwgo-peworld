export default function ProfileSkeleton() {
	return (
		<section className='w-full lg:w-[360px] lg:shrink-0 p-[30px] rounded-lg bg-white'>
			<div className='animate-pulse'>
				<div className='w-[150px] h-[150px] mx-auto rounded-full mb-4 bg-quick-silver/50' />

				<div className='flex justify-center mb-10'>
					<div className='h-8 w-16 bg-quick-silver/50 rounded' />
				</div>

				<div className='h-8 w-20 bg-quick-silver/50 rounded mb-2' />
				<div className='h-4 w-32 bg-quick-silver/50 rounded mb-3' />
				<div className='h-4 w-20 bg-quick-silver/50 rounded mb-3' />
				<div className='h-4 w-28 bg-quick-silver/50 rounded mb-4' />
				<div className='h-4 w-full bg-quick-silver/50 rounded mb-8' />
			</div>
		</section>
	);
}
