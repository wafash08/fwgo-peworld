import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root.jsx';
import ErrorPage from './pages/error-page.jsx';
import LandingPage from './pages/landing-page';
import HomePage from './pages/home';
import { loader as homeLoader } from './pages/home/home.loader.js';
import HirePage from './pages/hire';
import LoginPage from './pages/login';
import { action as loginAction } from './pages/login/login.action.js';
import SignupPage from './pages/signup';
import { action as signupAction } from './pages/signup/signup.action.js';
import CompanyPage from './pages/company';
import EditCompanyPage from './pages/company/edit';
import WorkerPage from './pages/worker';
import { loader as workerLoader } from './pages/worker/worker.loader.js';
import WorkerPortofolio from './pages/worker/portofolio';
import { loader as portofolioLoader } from './pages/worker/portofolio/portofolio.loader.js';
import WorkerExperience from './pages/worker/experience';
import { loader as experienceLoader } from './pages/worker/experience/experience.loader.js';
import ProfilePage from './pages/profile';
import { loader as profileLoader } from './pages/profile/profile.loader.js';
import ProfilePortofolio from './pages/profile/portfolio';
import { loader as profilePortfolioLoader } from './pages/profile/portfolio/portfolio.loader.js';
import ProfileExperience from './pages/profile/experience';
import { loader as profileExperienceLoader } from './pages/profile/experience/experience.loader.js';
import EditProfile from './pages/profile/edit';
import { action as editProfileAction } from './pages/profile/edit/edit.action.js';
import { loader as editProfileLoader } from './pages/profile/edit/edit.loader.js';

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
						index: true,
						element: <WorkerPortofolio />,
						loader: portofolioLoader,
					},
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
				path: 'profile',
				element: <ProfilePage />,
				loader: profileLoader,
				id: 'profile',
				children: [
					{
						index: true,
						element: <ProfilePortofolio />,
						loader: profilePortfolioLoader,
					},
					{
						path: 'portfolio',
						element: <ProfilePortofolio />,
						loader: profilePortfolioLoader,
					},
					{
						path: 'experience',
						element: <ProfileExperience />,
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
