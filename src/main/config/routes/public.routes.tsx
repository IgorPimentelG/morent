import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { MakeHomePage } from '@main/factories/pages';
import { SignIn } from '@presentation/pages';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home"/>} />
			<Route path="/home" element={MakeHomePage()} />
			<Route path="/signin" element={<SignIn />} />
		</Routes>
	);
};

export { PublicRoutes };
