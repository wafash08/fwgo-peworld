import Container from '../../components/container';
import { CustomLink } from '../../components/custom-link';

export default function GetStartedSection({ authenticated }) {
	return (
		<section className='my-40'>
			<Container>
				<div className='flex flex-col md:flex-row justify-between items-center gap-10 py-14 px-8 md:px-16 bg-primary-purple rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg text-white bg-wave bg-no-repeat bg-left-bottom'>
					<h2 className='text-center md:text-left text-2xl md:text-4xl font-semibold max-w-xs md:leading-relaxed'>
						Find Your Tech Talent Now!
					</h2>
					<CustomLink to={authenticated ? '/home' : '/login'} variant='white'>
						Let's start now!
					</CustomLink>
				</div>
			</Container>
		</section>
	);
}
