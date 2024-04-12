import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root.jsx';
import { loader as rootLoader } from './pages/root.loader.js';
import ErrorPage from './pages/error-page.jsx';
import LandingPage from './pages/landing-page';
import HomePage from './pages/home';
import { loader as homeLoader } from './pages/home/home.loader.js';
import HirePage from './pages/worker/hire/index.jsx';
import LoginPage from './pages/login';
import { action as loginAction } from './pages/login/login.action.js';
import SignupPage from './pages/signup';
import { action as signupAction } from './pages/signup/signup.action.js';
import CompanyPage from './pages/company';
import EditCompanyPage from './pages/company/edit';
import WorkerPage from './pages/worker';
import WorkerLayout from './pages/worker/worker-layout.jsx';
import { loader as workerLoader } from './pages/worker/worker.loader.js';
import WorkerPortfolio from './pages/worker/portfolio/index.jsx';
import { loader as portfolioLoader } from './pages/worker/portfolio/portfolio.loader.js';
import WorkerExperience from './pages/worker/experience';
import { loader as experienceLoader } from './pages/worker/experience/experience.loader.js';
import { action as hireAction } from './pages/worker/hire/hire.action.js';
import ProfilePage from './pages/profile';
import ProfileLayout from './pages/profile/profile-layout.jsx';
import { loader as profileLoader } from './pages/profile/profile.loader.js';
import ProfilePortfolio from './pages/profile/portfolio';
import { loader as profilePortfolioLoader } from './pages/profile/portfolio/portfolio.loader.js';
import ProfileExperience from './pages/profile/experience';
import { loader as profileExperienceLoader } from './pages/profile/experience/experience.loader.js';
import EditProfile from './pages/profile/edit';
import { action as editProfileAction } from './pages/profile/edit/edit.action.js';
import { loader as editProfileLoader } from './pages/profile/edit/edit.loader.js';
import { loader as loginLoader } from './pages/login/login.loader.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		loader: rootLoader,
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
						index: true,
						element: (
							<WorkerLayout>
								<WorkerPortfolio />
							</WorkerLayout>
						),
						loader: portfolioLoader,
					},
					{
						path: 'portfolio',
						element: (
							<WorkerLayout>
								<WorkerPortfolio />
							</WorkerLayout>
						),
						loader: portfolioLoader,
					},
					{
						path: 'experience',
						element: (
							<WorkerLayout>
								<WorkerExperience />
							</WorkerLayout>
						),
						loader: experienceLoader,
					},
					{ path: 'hire', element: <HirePage />, action: hireAction },
				],
			},
			{
				path: 'profile',
				element: <ProfilePage />,
				loader: profileLoader,
				id: 'profile',
				children: [
					{
						index: true,
						element: (
							<ProfileLayout>
								<ProfilePortfolio />
							</ProfileLayout>
						),
						loader: profilePortfolioLoader,
					},
					{
						path: 'portfolio',
						element: (
							<ProfileLayout>
								<ProfilePortfolio />
							</ProfileLayout>
						),
						loader: profilePortfolioLoader,
					},
					{
						path: 'experience',
						element: (
							<ProfileLayout>
								<ProfileExperience />
							</ProfileLayout>
						),
						loader: profileExperienceLoader,
					},
					{
						path: 'edit',
						element: <EditProfile />,
						action: editProfileAction,
						loader: editProfileLoader,
					},
				],
			},
			{
				path: 'companies/:companyId',
				element: <CompanyPage />,
			},
			{ path: 'companies/:companyId/edit', element: <EditCompanyPage /> },
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
		action: loginAction,
		loader: loginLoader,
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
