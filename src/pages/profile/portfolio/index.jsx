import PortfolioList from '../../../components/portfolio-list';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	portfolioFailed,
	portfolioLoaded,
} from '../../../redux/actions/portfolio.action';
import PortfolioSkeleton from '../../../components/portfolio-skeleton';
import { getTokenFromLocalStorage } from '../../../utils';

export default function ProfilePortfolio() {
	const dispatch = useDispatch();
	const portfolio = useSelector(state => state.portfolio.portfolio);
	const status = useSelector(state => state.portfolio.status);

	useEffect(() => {
		const token = getTokenFromLocalStorage();
		try {
			dispatch(portfolioLoaded(token));
		} catch (error) {
			dispatch(portfolioFailed(error.message));
		}
	}, []);

	if (status === 'loading') {
		return <PortfolioSkeleton />;
	}

	return portfolio.length > 0 ? (
		<PortfolioList portfolio={portfolio} />
	) : (
		<p>Kamu belum memiliki portofolio</p>
	);
}
