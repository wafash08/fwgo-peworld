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
