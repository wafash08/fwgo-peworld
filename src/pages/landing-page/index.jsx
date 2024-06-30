import { getTokenFromLocalStorage } from '../../utils';
import AdvantagesSection from './advantages-section';
import GetStartedSection from './get-started-section';
import HeroSection from './hero-section';
import SkillTalentSection from './skill-talent-section';
import TestimonySection from './testimony-section';

export default function LandingPage() {
	const token = getTokenFromLocalStorage();
	const authenticated = token !== null;
	return (
		<>
			<HeroSection authenticated={authenticated} />
			<AdvantagesSection />
			<SkillTalentSection />
			<TestimonySection />
			<GetStartedSection authenticated={authenticated} />
		</>
	);
}
