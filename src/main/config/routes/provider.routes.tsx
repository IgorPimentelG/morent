import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './public.routes';

const ProviderRoutes = () => {
	return (
		<BrowserRouter>
			<PublicRoutes />
		</BrowserRouter>
	);
}

export { ProviderRoutes };
