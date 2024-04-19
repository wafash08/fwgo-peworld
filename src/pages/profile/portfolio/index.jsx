import { useLoaderData } from 'react-router-dom';
import PortfolioList from '../../../components/portfolio-list';

export default function ProfilePortfolio() {
	const { portfolio } = useLoaderData();

	return portfolio.length > 0 ? (
		<PortfolioList portfolio={portfolio} />
	) : (
		<p>Kamu belum memiliki portofolio</p>
	);
}
