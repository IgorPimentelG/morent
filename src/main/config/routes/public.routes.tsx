import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { MakeHomePage } from '@main/factories/pages';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home"/>} />
			<Route path="/home" element={MakeHomePage()} />
		</Routes>
	);
};

export { PublicRoutes };
