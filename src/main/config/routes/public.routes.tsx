import { Navigate, Route, Routes } from 'react-router';

import { RecoverPassword } from '@presentation/pages';
import {
	MakeHomePage,
	MakeUserAuthPage
} from '@main/factories/pages';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home"/>} />
			<Route path="/home" element={MakeHomePage()} />
			<Route path="/auth" element={MakeUserAuthPage()} />
			<Route path="/recover-password" element={<RecoverPassword />} />
		</Routes>
	);
};

export { PublicRoutes };
