import { addPortfolio, getPortfolio } from '../../services';
import { sortPortfolioByName } from '../../utils';

export function portfolioLoaded(token) {
	return async dispatch => {
		try {
			dispatch(portfolioLoading());
			const portfolio = await getPortfolio(token);
			const portfolioSorted = sortPortfolioByName(portfolio);
			dispatch({ type: 'portfolio/portfolioLoaded', payload: portfolioSorted });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function portfolioAdded(data, token) {
	return async dispatch => {
		try {
			dispatch(portfolioLoading());
			const portfolio = await addPortfolio(data, token);
			dispatch({ type: 'portfolio/portfolioAdded', payload: portfolio });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function portfolioLoading() {
	return {
		type: 'portfolio/portfolioLoading',
	};
}

export function portfolioFailed(errorMessage) {
	return {
		type: 'portfolio/portfolioFailed',
		payload: errorMessage,
	};
}
