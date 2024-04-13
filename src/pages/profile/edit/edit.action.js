import { redirect } from 'react-router-dom';
import {
	addExperience,
	addPortfolio,
	addSkills,
	updateProfile,
} from '../profile.service';
import { isEmpty } from '../../../utils';
import { authProvider } from '../../../auth';

export async function action({ request }) {
	const formData = await request.formData();
	const { role, token } = authProvider.getUser();
	let biodata = {};
	let skills = {};
	let experience = {};
	let portfolio = {};
	for (let [key, value] of formData) {
		if (key === 'skill_name') {
			skills[key] = value;
			continue;
		} else if (
			key === 'position' ||
			key === 'company' ||
			key === 'work_year' ||
			key === 'experience_description'
		) {
			if (key === 'work_year') {
				value = value.split(' ');
				experience['work_month'] = value[0];
				experience[key] = value[1];
				continue;
			} else if (key === 'experience_description') {
				experience['description'] = value;
				continue;
			}
			experience[key] = value;
			continue;
		} else if (
			key === 'application_name' ||
			key === 'link_repository' ||
			key === 'application' ||
			key === 'image'
		) {
			if (key === 'image') {
				portfolio[key] =
					'https://indonesiabaik.id/public/uploads/post/5399/5399-1635873823-211101_PP_Tampilan-Baru-Aplikasi-PeduliLindungi_AB3.jpg';
				continue;
			}
			portfolio[key] = value;
			continue;
		}
		biodata[key] = value;
	}

	if (!isEmpty(biodata)) {
		await updateProfile(biodata, token);
	} else if (!isEmpty(skills)) {
		await addSkills(skills, token);
	} else if (!isEmpty(experience)) {
		await addExperience(experience, token);
	} else if (!isEmpty(portfolio)) {
		await addPortfolio(portfolio, token);
	}

	return redirect('/profile');
}
