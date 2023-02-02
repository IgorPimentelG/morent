import { Navigate, Route, Routes } from 'react-router';

import { MakeHomePage, MakeSignUpPage } from '@main/factories/pages';
import { RecoverPassword, SignIn } from '@presentation/pages';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home"/>} />
			<Route path="/home" element={MakeHomePage()} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={MakeSignUpPage()} />
			<Route path="/recover-password" element={<RecoverPassword />} />
		</Routes>
	);
};

export { PublicRoutes };
