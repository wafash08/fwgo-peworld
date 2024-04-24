import axios from 'axios';
import { sortPortfolioByName } from '../../utils';

const baseUrl = import.meta.env.VITE_API_URL_V1;

// === portfolio services ===
const portfolioUrl = `${baseUrl}/portfolio`;
export async function getPortfolio(token) {
	const result = await axios.get(portfolioUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data.data;
}

export async function addPortfolio(portfolio, token) {
	const image = await uploadImage(portfolio.image);
	portfolio = { ...portfolio, image };
	// const portfolioObj = { ...result.data.data, photo: image };
	const result = await axios.post(portfolioUrl, portfolio, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data.data;
}

const uploadUrl = `${baseUrl}/upload`;

export async function uploadImage(image) {
	const result = await axios.post(
		uploadUrl,
		{ file: image },
		{
			headers: {
				'Content-Type':
					'multipart/form-data; boundary=<calculated when request is sent>',
			},
		}
	);
	return result.data.data.file_url;
}

// === portfolio action creators ===
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
