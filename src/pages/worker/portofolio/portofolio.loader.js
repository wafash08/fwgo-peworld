import { getPortofolioByWorkerId } from './portofolio.service';

export async function loader({ params }) {
	const portofolio = await getPortofolioByWorkerId(params.workerId);
	return { portofolio: portofolio.data };
}
