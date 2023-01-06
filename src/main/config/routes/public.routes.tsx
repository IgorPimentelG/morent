import { Home } from '@presentation/pages';
import { Navigate, Route, Routes } from 'react-router';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home"/>} />
			<Route path="/home" element={<Home />} />
		</Routes>
	)
}

export { PublicRoutes };
