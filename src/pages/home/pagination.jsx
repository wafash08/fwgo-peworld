import clsx from 'clsx';

export default function Pagination({ pagination, onNext, onPrev, onPage }) {
	const { totalPage, currentPage } = pagination;
	const range = Array.from({ length: totalPage }, (_, i) => i + 1);

	const isPreviousButtonDisabled = currentPage === 1;
	const isNextButtonDisabled = currentPage === range.length;

	return (
		<ul className='flex items-center justify-center gap-2 lg:gap-4 flex-wrap'>
			<li>
				<button
					type='button'
					className={clsx(
						'w-14 h-14 border text-lg flex items-center justify-center rounded',
						'bg-white text-quick-silver border-azureish-white hover:bg-primary-purple hover:text-white',
						'disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:hover:text-quick-silver'
					)}
					onClick={onPrev}
					disabled={isPreviousButtonDisabled}
				>
					<span className='sr-only'>Sebelumnya</span>
					<svg
						width='12'
						height='18'
						viewBox='0 0 12 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							d='M0.444198 10.7804L9.34445 19.6805C9.5503 19.8865 9.8251 20 10.1181 20C10.4111 20 10.6859 19.8865 10.8918 19.6805L11.5472 19.0252C11.9737 18.5982 11.9737 17.9042 11.5472 17.4779L4.07344 10.0041L11.5555 2.52209C11.7613 2.31608 11.875 2.04145 11.875 1.7486C11.875 1.45543 11.7613 1.1808 11.5555 0.974625L10.9001 0.319508C10.694 0.113495 10.4194 -1.27252e-07 10.1264 -1.52868e-07C9.83339 -1.78483e-07 9.5586 0.113495 9.35275 0.319507L0.444199 9.22773C0.237859 9.43439 0.124527 9.71033 0.125177 10.0037C0.124527 10.2981 0.237859 10.5739 0.444198 10.7804Z'
							fill='currentColor'
						/>
					</svg>
				</button>
			</li>
			{range.map(r => {
				return (
					<PaginationItem
						key={r}
						label={r}
						to={`?page=${r}`}
						current={String(r) === String(currentPage)}
						onPage={onPage}
					/>
				);
			})}
			<li>
				<button
					type='button'
					className={clsx(
						'w-14 h-14 border text-lg flex items-center justify-center rounded',
						'bg-white text-quick-silver border-azureish-white hover:bg-primary-purple hover:text-white',
						'disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:hover:text-quick-silver'
					)}
					onClick={onNext}
					disabled={isNextButtonDisabled}
				>
					<span className='sr-only'>Selanjutnya</span>
					<svg
						width='12'
						height='18'
						viewBox='0 0 12 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							d='M11.5558 9.2196L2.65555 0.31951C2.4497 0.113495 2.1749 0 1.8819 0C1.58889 0 1.3141 0.113495 1.10824 0.31951L0.452802 0.974789C0.0263017 1.40178 0.0263017 2.09576 0.452802 2.52209L7.92656 9.99585L0.44451 17.4779C0.238658 17.6839 0.125 17.9586 0.125 18.2514C0.125 18.5446 0.238658 18.8192 0.44451 19.0254L1.09995 19.6805C1.30597 19.8865 1.5806 20 1.8736 20C2.16661 20 2.4414 19.8865 2.64726 19.6805L11.5558 10.7723C11.7621 10.5656 11.8755 10.2897 11.8748 9.99634C11.8755 9.70187 11.7621 9.4261 11.5558 9.2196Z'
							fill='currentColor'
						/>
					</svg>
				</button>
			</li>
		</ul>
	);
}

function PaginationItem({ label, current, onPage }) {
	const handleToPage = to => {
		onPage(to);
	};
	return (
		<li>
			<button
				className={clsx(
					'w-14 h-14 border text-lg flex items-center justify-center rounded transition-colors duration-300',
					current
						? 'bg-primary-purple text-white border-primary-purple'
						: 'bg-white text-quick-silver border-azureish-white hover:bg-primary-purple hover:text-white'
				)}
				onClick={() => handleToPage(label)}
			>
				<span>{label}</span>
			</button>
		</li>
	);
}

function DisabledButton({ children, ...props }) {
	return (
		<button
			type='button'
			disabled
			className='w-14 h-14 border text-lg flex items-center justify-center rounded bg-white text-quick-silver border-azureish-white cursor-not-allowed disabled:bg-zinc-200'
			{...props}
		>
			{children}
		</button>
	);
}
