import { getPortfolioByWorkerId } from './portfolio.service';

export async function loader({ params }) {
	const portfolio = await getPortfolioByWorkerId(params.workerId);
	return { portfolio: portfolio.data };
}
