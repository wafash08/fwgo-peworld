export function EditRecruiterProfileSkeleton() {
	return (
		<div>
			<div className='w-[150px] h-[150px] mx-auto rounded-full bg-quick-silver/50 mb-4' />
			<div className='w-10 h-8 mx-auto rounded bg-quick-silver/50 mb-10' />
			<div className='w-full max-w-40 h-8 rounded bg-quick-silver/50 mb-2' />
			<div className='w-full max-w-20 h-6 rounded bg-quick-silver/50 mb-3' />
			<div className='w-full max-w-40 h-6 rounded bg-quick-silver/50' />
		</div>
	);
}

export function WorkerSkeleton() {
	return (
		<div className='flex flex-col md:flex-row items-center gap-7 px-5 py-10 border-b-2 border-b-cultured last:border-b-0'>
			<div className='w-[100px] h-[100px] rounded-full bg-quick-silver/50' />
			<div className='flex-1'>
				<div className='w-32 h-8 rounded bg-quick-silver/50 mb-1' />
				<div className='w-16 h-6 rounded bg-quick-silver/50 mb-2' />
				<div className='w-28 h-6 rounded bg-quick-silver/50 mb-4' />
				<div className='flex gap-3 justify-center md:justify-start items-center flex-wrap'>
					<div className='w-20 h-6 rounded bg-quick-silver/50' />
					<div className='w-20 h-6 rounded bg-quick-silver/50' />
					<div className='w-20 h-6 rounded bg-quick-silver/50' />
				</div>
			</div>
			<div className='w-40 h-10 rounded bg-quick-silver/50' />
		</div>
	);
}
