import PortfolioList from '../../../components/portfolio-list';

export default function WorkerPortfolio({ portfolio, name }) {
	return portfolio.length > 0 ? (
		<PortfolioList portfolio={portfolio} />
	) : (
		<p>{name} belum memiliki portofolio</p>
	);
}
