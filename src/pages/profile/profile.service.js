import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

const profileUrl = `${baseUrl}/workers/profile`;

export async function getProfile(token) {
	const result = await axios.get(profileUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data;
}

export async function updateProfile(biodata, token) {
	const result = await axios.put(profileUrl, biodata, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data;
}

const photoProfileUrl = `${baseUrl}/workers/profile/photo`;
export async function updatePhotoProfile(photo, token) {
	const result = await axios.put(photoProfileUrl, photo, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type':
				'multipart/form-data; boundary=<calculated when request is sent>',
		},
	});
	return result.data.data.photo;
}

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

const experienceUrl = `${baseUrl}/experience`;

export async function getExperience(token) {
	const result = await axios.get(experienceUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data;
}

export async function addExperience(experience, token) {
	const result = await axios.post(experienceUrl, experience, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data;
}

const skillsUrl = `${baseUrl}/skills`;

export async function getSkills(token) {
	const result = await axios.get(skillsUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data;
}

export async function addSkills(skill_name, token) {
	const result = await axios.post(skillsUrl, skill_name, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data;
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
