import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root.jsx';
import ErrorPage from './pages/error-page.jsx';
import LandingPage from './pages/landing-page';
import HomePage, { loader as homeLoader } from './pages/home-page';
import HirePage from './pages/hire-page';
import CompanyProfilePage from './pages/profile-company-page';
import WorkerProfilePage from './pages/profile-worker-page';
import EditCompanyProfilePage from './pages/profile-company-page/edit.jsx';
import EditWorkerProfilePage from './pages/profile-worker-page/edit.jsx';
import LoginPage, { action as loginAction } from './pages/login-page';
import SignupPage, { action as signupAction } from './pages/signup';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <LandingPage /> },
			{ path: 'home', element: <HomePage />, loader: homeLoader },
			{ path: 'hire', element: <HirePage /> },
			{
				path: 'company-profile',
				element: <CompanyProfilePage />,
			},
			{ path: 'company-profile/edit', element: <EditCompanyProfilePage /> },
			{
				path: 'worker-profile',
				element: <WorkerProfilePage />,
			},
			{ path: 'worker-profile/edit', element: <EditWorkerProfilePage /> },
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
