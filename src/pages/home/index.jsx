import { useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import clsx from 'clsx';
import Container from '../../components/container';
import Pagination from './pagination';
import WorkerList from './worker-list';
import WorkerItem from './worker-item';
import { useDispatch, useSelector } from 'react-redux';
import { homeLoaded } from '../../redux/actions/home.action';
import { WorkerSkeleton } from '../../components';
import { useDebounce } from '../../hooks';

export default function HomePage() {
	const [params, setParams] = useState({
		limit: 10,
		page: 1,
		search: '',
		sort: '',
		sortBy: 'DESC',
	});
	const debouncedSearch = useDebounce(params.search, 500);
	const { workers, pagination, status } = useSelector(state => state.home);
	const dispatch = useDispatch();
	const [openSort, setOpenSort] = useState(false);

	useEffect(() => {
		dispatch(homeLoaded(params));
	}, [params.page, params.sort, params.sortBy, debouncedSearch]);

	const handlePrev = () => {
		setParams({
			...params,
			page: params.page - 1,
		});
	};
	const handleNext = () => {
		setParams({
			...params,
			page: params.page + 1,
		});
	};
	const handleToPage = to => {
		setParams({
			...params,
			page: to,
		});
	};
	const handleSearch = e => {
		setParams({
			...params,
			search: e.target.value,
		});
	};
	const handleSort = sort => {
		setParams({
			...params,
			sort,
		});
	};
	const handleSortBy = order => {
		setParams({
			...params,
			sortBy: order,
		});
	};

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
										onChange={handleSearch}
										className={clsx(
											'px-5 w-full h-full focus:outline-none text-yankees-blue bg-transparent'
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
											'absolute right-5 top-1/2 -translate-y-1/2 hidden md:block'
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
								</div>
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

						{openSort && (
							<SortList
								sortList={sortList}
								onSort={handleSort}
								onSortBy={handleSortBy}
								sortCategory={params.sort}
								sortByCategory={params.sortBy}
							/>
						)}
					</div>

					<WorkerList>
						{status === 'loading' ? (
							<>
								<WorkerSkeleton />
								<WorkerSkeleton />
								<WorkerSkeleton />
								<WorkerSkeleton />
								<WorkerSkeleton />
								<WorkerSkeleton />
								<WorkerSkeleton />
								<WorkerSkeleton />
								<WorkerSkeleton />
								<WorkerSkeleton />
							</>
						) : workers?.length > 0 ? (
							workers.map(worker => {
								return <WorkerItem key={worker.id} worker={worker} />;
							})
						) : (
							<p>Pekerja dengan nama {params.search} tidak ditemukan</p>
						)}
					</WorkerList>

					<nav>
						<Pagination
							onNext={handleNext}
							onPrev={handlePrev}
							onPage={handleToPage}
							pagination={pagination}
						/>
					</nav>
				</Container>
			</section>
		</div>
	);
}

const sortList = [
	{
		label: 'name',
		sort: 'name',
	},
	{
		label: 'created at',
		sort: 'created_at',
	},
	{
		label: 'domicile',
		sort: 'domicile',
	},
];

function SortList({
	sortList,
	onSort,
	onSortBy,
	sortCategory,
	sortByCategory,
}) {
	return (
		<ul className='sort-list z-50 bg-white rounded absolute top-[calc(100%+36px)] right-10 shadow-[0px_0px_20px_0px] shadow-[#afafaf]/25'>
			<li className='flex justify-evenly gap-2 border-b border-b-[#F2F3F4] py-2 px-6'>
				<button
					type='button'
					onClick={() => onSortBy('ASC')}
					className={clsx(
						'text-sm rounded border border-yankees-blue px-3 py-1',
						sortByCategory === 'ASC'
							? 'text-white bg-yankees-blue'
							: 'text-yankees-blue bg-transparent'
					)}
				>
					ASC
				</button>
				<button
					type='button'
					onClick={() => onSortBy('DESC')}
					className={clsx(
						'text-sm rounded border border-yankees-blue px-3 py-1 transition-colors duration-300',
						sortByCategory === 'DESC'
							? 'text-white bg-yankees-blue'
							: 'text-yankees-blue bg-transparent'
					)}
				>
					DESC
				</button>
			</li>
			{sortList.map(({ label, sort }) => {
				return (
					<SortItem
						key={sort}
						label={label}
						sort={sort}
						onSort={onSort}
						sortCategory={sortCategory}
					/>
				);
			})}
		</ul>
	);
}

function SortItem({ label, sort, onSort, sortCategory }) {
	return (
		<li className='border-b border-b-[#F2F3F4] last:border-b-0'>
			<button
				type='button'
				className='flex justify-between gap-2 px-6 py-5 text-sm text-yankees-blue'
				onClick={() => onSort(sort)}
			>
				<span>Sort by {label}</span>
				{sort === sortCategory && <span>✔️</span>}
			</button>
		</li>
	);
}
