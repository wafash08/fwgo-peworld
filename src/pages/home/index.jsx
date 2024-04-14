import { Form, useLoaderData } from 'react-router-dom';
import Container from '../../components/container';
import WorkerItem from './worker-item';
import Pagination from './pagination';

export default function HomePage() {
	const { workers, pagination } = useLoaderData();

	return (
		<>
			<section className='bg-primary-purple'>
				<Container className='flex items-center h-20'>
					<h2 className='text-[28px] font-bold text-white'>Top Jobs</h2>
				</Container>
			</section>

			<section className='mt-[50px] mb-[70px]'>
				<Container>
					<Form className='overflow-hidden rounded-md shadow-[0px_1px_20px_0px] shadow-[#C5C5C5]/40 p-2'>
						<div className='flex items-center h-12 md:h-[70px]'>
							<div className='flex-1 relative text-quick-silver'>
								<input
									type='text'
									name='q'
									id='q'
									aria-label='Search skill'
									placeholder='Search for any skill'
									className='px-5 w-full h-full focus:outline-none text-yankees-blue'
								/>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden='true'
									className='absolute right-5 top-1/2 -translate-y-1/2 hidden md:block'
								>
									<path
										d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M20.9984 20.9999L16.6484 16.6499'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
							{/* divider */}
							<div className='w-[1px] h-14 bg-quick-silver mx-1 hidden md:block' />
							<button
								type='button'
								className='font-semibold text-quick-silver px-5 py-4 rounded mr-1 hidden md:block'
							>
								Kategori
							</button>
							<button
								type='submit'
								className='font-semibold text-white px-4 md:px-8 py-2 md:py-4 rounded bg-primary-purple'
							>
								Search
							</button>
						</div>
					</Form>

					<ul className='shadow-[0px_1px_20px_0px] shadow-[#C5C5C5]/40 mt-[50px] rounded-md overflow-hidden mb-[50px]'>
						{workers.map(({ id, domicile, photo, name, skills, job_desk }) => {
							return (
								<WorkerItem
									key={id}
									domicile={domicile}
									photo={photo}
									name={name}
									skills={skills}
									job={job_desk}
									id={id}
								/>
							);
						})}
					</ul>

					<nav>
						<Pagination
							currentPage={pagination.currentPage}
							totalData={pagination.totalData}
							totalPage={pagination.totalPage}
						/>
					</nav>
				</Container>
			</section>
		</>
	);
}
