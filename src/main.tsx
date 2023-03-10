import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './main/App';
import '@presentation/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
