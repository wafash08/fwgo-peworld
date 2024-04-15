import { forwardRef, useRef } from 'react';
import Container from '../../components/container';
import harryStylesAvatar from '../../assets/harry-styles.png';
import louisTomlinsonAvatar from '../../assets/louis-tomlinson.png';
import niallHoranAvatar from '../../assets/niall-horan.png';

const TESTIMONY_LIST = [
	{
		id: 1,
		avatar: harryStylesAvatar,
		name: 'Harry Styles',
		position: 'Web Developer',
		testimony:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
	},
	{
		id: 2,
		avatar: niallHoranAvatar,
		name: 'Niall Horan',
		position: 'Web Developer',
		testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 3,
		avatar: louisTomlinsonAvatar,
		name: 'Louis Tomlinson',
		position: 'Web Developer',
		testimony: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		id: 4,
		avatar: harryStylesAvatar,
		name: 'Harry Styles',
		position: 'Web Developer',
		testimony:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
	},
	{
		id: 5,
		avatar: niallHoranAvatar,
		name: 'Niall Horan',
		position: 'Web Developer',
		testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 6,
		avatar: louisTomlinsonAvatar,
		name: 'Louis Tomlinson',
		position: 'Web Developer',
		testimony: 'Lorem ipsum dolor sit amet, consectetur.',
	},
];

export default function TestimonySection() {
	const carouselRef = useRef(null);

	const nextSlide = e => {
		e.preventDefault();
		carouselRef.current.scrollBy({
			left: carouselRef.current.clientWidth,
			top: 0,
			behavior: 'smooth',
		});
	};
	const prevSlide = e => {
		e.preventDefault();
		carouselRef.current.scrollBy({
			left: -carouselRef.current.clientWidth,
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<section className='mt-40 bg-azureish-white/40 py-20'>
			<Container>
				<h2 className='text-center text-4xl text-yankees-blue font-semibold mb-14'>
					Their opinion about peworld
				</h2>

				<div className='relative overflow-x-hidden'>
					<button
						type='button'
						onClick={prevSlide}
						className='absolute top-1/2 -translate-y-1/2 left-2 w-[50px] aspect-square rounded-full bg-primary-purple flex items-center justify-center shadow-[0px_8px_16px_0px] shadow-[#CCCCCC]/75'
					>
						<span className='sr-only'>Sebelumnya</span>
						<svg
							width='16'
							height='24'
							viewBox='0 0 16 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
						>
							<path
								d='M1.33382 12.9365L12.0141 23.6166C12.2611 23.8638 12.5909 24 12.9425 24C13.2941 24 13.6239 23.8638 13.8709 23.6166L14.6574 22.8303C15.1692 22.3179 15.1692 21.4851 14.6574 20.9735L5.68891 12.005L14.6674 3.02651C14.9144 2.77929 15.0508 2.44974 15.0508 2.09832C15.0508 1.74652 14.9144 1.41696 14.6674 1.16955L13.8808 0.383411C13.6336 0.136194 13.3041 -1.52703e-07 12.9525 -1.83441e-07C12.6009 -2.1418e-07 12.2711 0.136194 12.0241 0.383411L1.33382 11.0733C1.08621 11.3213 0.950215 11.6524 0.950996 12.0044C0.950214 12.3578 1.08621 12.6887 1.33382 12.9365Z'
								fill='white'
							/>
						</svg>
					</button>
					<button
						type='button'
						onClick={nextSlide}
						className='absolute top-1/2 -translate-y-1/2 right-2 w-[50px] aspect-square rounded-full bg-primary-purple flex items-center justify-center shadow-[0px_8px_16px_0px] shadow-[#CCCCCC]/75'
					>
						<span className='sr-only'>Selanjutnya</span>
						<svg
							width='16'
							height='24'
							viewBox='0 0 16 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
						>
							<path
								d='M14.6662 11.0635L3.98588 0.383412C3.73885 0.136194 3.4091 0 3.05749 0C2.70589 0 2.37613 0.136194 2.12911 0.383412L1.34258 1.16975C0.830781 1.68213 0.830781 2.51491 1.34258 3.02651L10.3111 11.995L1.33263 20.9735C1.08561 21.2207 0.949219 21.5503 0.949219 21.9017C0.949219 22.2535 1.08561 22.583 1.33263 22.8305L2.11916 23.6166C2.36638 23.8638 2.69594 24 3.04754 24C3.39915 24 3.7289 23.8638 3.97593 23.6166L14.6662 12.9267C14.9138 12.6787 15.0498 12.3476 15.049 11.9956C15.0498 11.6422 14.9138 11.3113 14.6662 11.0635Z'
								fill='white'
							/>
						</svg>
					</button>

					<TestimonyList testimonyList={TESTIMONY_LIST} ref={carouselRef} />
				</div>
			</Container>
		</section>
	);
}

const TestimonyList = forwardRef(function TestimonyList(
	{ testimonyList },
	ref
) {
	return (
		<ul
			id='testimony-list'
			className='overflow-x-scroll flex gap-7 snap-mandatory snap-x'
			ref={ref}
		>
			{testimonyList.map(testimony => (
				<TestimonyItem key={testimony.id} testimony={testimony} />
			))}
		</ul>
	);
});

function TestimonyItem({ testimony }) {
	return (
		<li className='flex-shrink-0 w-full md:basis-80 snap-start bg-white shadow-[0px_8px_16px_0px] shadow-[#c5c5c5]/40 rounded p-7 text-center'>
			<div className='border-debug w-[140px] aspect-square rounded-full mx-auto border-[10px] border-primary-yellow/40 flex items-center justify-center mb-4'>
				<img
					src={testimony.avatar}
					alt={testimony.name}
					width='120'
					height='120'
					className='w-full h-full object-cover'
				/>
			</div>
			<p className='text-[30px] text-yankees-blue font-semibold mb-2'>
				{testimony.name}
			</p>
			<p className='text-quick-silver mb-4 font-normal'>{testimony.position}</p>
			<p className='text-lg text-davys-gray'>{testimony.testimony}</p>
		</li>
	);
}
