import { getPortfolio, getToken } from '../profile.service';

export async function loader() {
	await getToken();
	const portfolio = await getPortfolio();
	return { portfolio: portfolio.data };
}
