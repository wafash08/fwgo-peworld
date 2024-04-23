import PortfolioList from '../../../components/portfolio-list';
import PortfolioSkeleton from '../../../components/portfolio-skeleton';

export default function WorkerPortfolio({ portfolio, name, status }) {
	if (status === 'loading') {
		return <PortfolioSkeleton />;
	}
	return portfolio.length > 0 ? (
		<PortfolioList portfolio={portfolio} />
	) : (
		<p>{name} belum memiliki portofolio</p>
	);
}
