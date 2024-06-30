import { PortfolioList } from '../../../components/portfolio-list';

export default function WorkerPortfolio({ portfolio, name, status }) {
	return <PortfolioList name={name} portfolio={portfolio} status={status} />;
}
