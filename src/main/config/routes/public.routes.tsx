import React from 'react';
import { Home } from '@presentation/pages';
import { Navigate, Route, Routes } from 'react-router';
import { makeRemoteLoadAdvertisements } from '@main/factories/usecases';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home"/>} />
			<Route path="/home" element={
				<Home loadAdvertisements={makeRemoteLoadAdvertisements()}/>
			}/>
		</Routes>
	);
};

export { PublicRoutes };
