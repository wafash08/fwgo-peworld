import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root.jsx';
import ErrorPage from './pages/error-page.jsx';
import LandingPage from './pages/landing-page';
import HomePage from './pages/home/index.jsx';
import { loader as homeLoader } from './pages/home/home.loader.js';
import HirePage from './pages/hire/index.jsx';
import LoginPage from './pages/login/index.jsx';
import { action as loginAction } from './pages/login/login.action.js';
import SignupPage from './pages/signup/index.jsx';
import { action as signupAction } from './pages/signup/signup.action.js';
import CompanyPage from './pages/company/index.jsx';
import EditCompanyPage from './pages/company/edit';
import WorkerPage from './pages/worker/index.jsx';
import { loader as workerLoader } from './pages/worker/worker.loader.js';
import EditWorkerPage from './pages/worker/edit';
import WorkerPortofolio from './pages/worker/portofolio';
import { loader as portofolioLoader } from './pages/worker/portofolio/portofolio.loader.js';
import WorkerExperience from './pages/worker/experience/index.jsx';
import { loader as experienceLoader } from './pages/worker/experience/experience.loader.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <LandingPage /> },
			{ path: 'home', element: <HomePage />, loader: homeLoader },
			{
				path: 'workers/:workerId',
				element: <WorkerPage />,
				loader: workerLoader,
				id: 'worker',
				children: [
					{
						path: 'portofolio',
						element: <WorkerPortofolio />,
						loader: portofolioLoader,
					},
					{
						path: 'experience',
						element: <WorkerExperience />,
						loader: experienceLoader,
					},
				],
			},
			{
				path: 'workers/:workerId/edit',
				element: <EditWorkerPage />,
			},
			{
				path: 'companies/:companyId',
				element: <CompanyPage />,
			},
			{ path: 'companies/:companyId/edit', element: <EditCompanyPage /> },
			{ path: 'hire', element: <HirePage /> },
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
		action: loginAction,
	},
	{
		path: '/signup',
		element: <SignupPage />,
		action: signupAction,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
