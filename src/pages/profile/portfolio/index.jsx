import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	portfolioFailed,
	portfolioLoaded,
} from '../../../redux/actions/portfolio.action';
import { getTokenFromLocalStorage } from '../../../utils';
import { PortfolioList } from '../../../components/portfolio-list';

export default function ProfilePortfolio() {
	const dispatch = useDispatch();
	const portfolio = useSelector(state => state.portfolio.portfolio);
	const status = useSelector(state => state.portfolio.status);
	const error = useSelector(state => state.portfolio.error);

	useEffect(() => {
		const token = getTokenFromLocalStorage();
		try {
			dispatch(portfolioLoaded(token));
		} catch (error) {
			dispatch(portfolioFailed(error.message));
		}
	}, []);

	if (status === 'failed') {
		return <p className='text-red-500'>{error}</p>;
	}

	return <PortfolioList name='Kamu' portfolio={portfolio} status={status} />;
}
