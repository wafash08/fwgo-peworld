import { useEffect, useState } from 'react';
import {
	Form,
	Link,
	useLoaderData,
	useNavigation,
	useSubmit,
} from 'react-router-dom';
import clsx from 'clsx';
import Container from '../../components/container';
import WorkerItem from './worker-item';
import Pagination from './pagination';
import WorkerList from './worker-list';

export default function HomePage() {
	const { workers, pagination, params } = useLoaderData();
	const [openSort, setOpenSort] = useState(false);
	const submit = useSubmit();
	const navigation = useNavigation();
	const { search } = params;

	const searching =
		navigation.location &&
		new URLSearchParams(navigation.location.search).has('search');

	useEffect(() => {
		const searchInput = document.getElementById('search');
		searchInput.value = search;
	}, [search]);

	return (
		<div className='bg-cultured pb-[70px]'>
			<section className='bg-primary-purple'>
				<Container className='flex items-center h-20'>
					<h2 className='text-[28px] font-bold text-white'>Top Jobs</h2>
				</Container>
			</section>

			<section className='mt-[50px]'>
				<Container>
					<div className='relative bg-white'>
						<Form
							role='search'
							className='overflow-hidden rounded-md shadow-[0px_1px_20px_0px] shadow-[#C5C5C5]/40 p-2'
						>
							<div className='flex items-center h-12 md:h-[70px]'>
								<div className='flex-1 relative text-quick-silver'>
									<input
										type='text'
										name='search'
										id='search'
										aria-label='Search skill'
										placeholder='Search for any skill'
										defaultValue={search}
										onChange={event => {
											const isFirstSearch = search == null;
											submit(event.currentTarget.form, {
												replace: !isFirstSearch,
											});
										}}
										className={clsx(
											'px-5 w-full h-full focus:outline-none text-yankees-blue bg-transparent',
											searching ? 'loading' : ''
										)}
									/>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										aria-hidden='true'
										className={clsx(
											'absolute right-5 top-1/2 -translate-y-1/2 hidden md:block',
											searching && 'hidden md:hidden'
										)}
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
									<div id='search-spinner' aria-hidden hidden={!searching} />
								</div>
								{/* divider */}
								<div className='w-[1px] h-14 bg-quick-silver mx-1 hidden md:block' />
								<div className='mr-1 hidden md:block'>
									<button
										type='button'
										className='font-semibold text-quick-silver px-5 py-4 rounded flex items-center gap-2'
										onClick={() => setOpenSort(!openSort)}
									>
										<svg
											width='11'
											height='6'
											viewBox='0 0 11 6'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											aria-hidden='true'
											className={clsx(
												'transition-transform duration-200',
												openSort ? 'rotate-180' : 'rotate-0'
											)}
										>
											<path
												d='M5.65664 5.80268C5.57657 5.90355 5.42343 5.90355 5.34336 5.80268L0.994348 0.324351C0.890296 0.19328 0.983638 7.80161e-08 1.15099 9.26465e-08L9.84901 8.53052e-07C10.0164 8.67682e-07 10.1097 0.193281 10.0057 0.324352L5.65664 5.80268Z'
												fill='#9EA0A5'
											/>
										</svg>
										<span>Sort</span>
									</button>
								</div>
								<button
									type='submit'
									className='font-semibold text-white px-4 md:px-8 py-2 md:py-4 rounded bg-primary-purple'
								>
									Search
								</button>
							</div>
						</Form>

						{openSort && <SortList sortList={sortList} />}
					</div>

					{workers?.length > 0 ? (
						<WorkerList workers={workers} searching={searching} />
					) : (
						<p>Pekerja dengan nama {search} tidak ditemukan</p>
					)}

					<nav>
						<Pagination
							currentPage={pagination.currentPage}
							totalPage={pagination.totalPage}
							params={params}
						/>
					</nav>
				</Container>
			</section>
		</div>
	);
}

const sortList = [
	{
		label: 'nama',
		sort: 'name',
	},
	{
		label: 'waktu dibuat',
		sort: 'created_at',
	},
	{
		label: 'lokasi',
		sort: 'domicile',
	},
];

function SortList({ sortList }) {
	return (
		<ul className='sort-list z-50 bg-white rounded absolute top-[calc(100%+36px)] right-10 shadow-[0px_0px_20px_0px] shadow-[#afafaf]/25'>
			{sortList.map(({ label, sort }) => {
				return <SortItem key={sort} label={label} sort={sort} />;
			})}
		</ul>
	);
}

function SortItem({ label, sort }) {
	return (
		<li className='border-b border-b-[#F2F3F4] last:border-b-0'>
			<Link
				to={`?sort=${sort}`}
				className='block px-6 py-5 text-sm text-yankees-blue'
			>
				Sortir berdasarkan {label}
			</Link>
		</li>
	);
}
