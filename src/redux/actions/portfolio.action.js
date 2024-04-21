import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

// === portfolio services ===
const portfolioUrl = `${baseUrl}/portfolio`;
export async function getPortfolio(token) {
	const result = await axios.get(portfolioUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data.data;
}

// === portfolio action creators ===
export function portfolioLoaded(token) {
	return async dispatch => {
		try {
			dispatch(portfolioLoading());
			const portfolio = await getPortfolio(token);
			dispatch({ type: 'portfolio/portfolioLoaded', payload: portfolio });
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
