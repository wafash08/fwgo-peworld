import AdvantagesSection from './advantages-section';
import GetStartedSection from './get-started-section';
import HeroSection from './hero-section';
import SkillTalentSection from './skill-talent-section';
import TestimonySection from './testimony-section';

export default function LandingPage() {
	return (
		<>
			<HeroSection />
			<AdvantagesSection />
			<SkillTalentSection />
			<TestimonySection />
			<GetStartedSection />
		</>
	);
}
