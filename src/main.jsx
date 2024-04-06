import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root.jsx';
import ErrorPage from './pages/error-page.jsx';
import LandingPage from './pages/landing-page';
import HomePage, { loader as homeLoader } from './pages/home-page';
import HirePage from './pages/hire-page';
import LoginPage, { action as loginAction } from './pages/login-page';
import SignupPage, { action as signupAction } from './pages/signup';
import CompanyPage from './pages/company-page/index.jsx';
import EditCompanyPage from './pages/company-page/edit.jsx';
import WorkerPage from './pages/worker-page/index.jsx';
import EditWorkerPage from './pages/worker-page/edit.jsx';

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
