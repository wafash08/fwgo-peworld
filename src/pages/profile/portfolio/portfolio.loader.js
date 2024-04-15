import { authProvider } from '../../../auth';
import { getPortfolio } from '../profile.service';

export async function loader() {
	const { token } = authProvider.getUser();
	const portfolio = await getPortfolio(token);
	return { portfolio };
}
