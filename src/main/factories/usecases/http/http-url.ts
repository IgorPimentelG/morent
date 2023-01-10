const makeHttpUrl = (url: string): string => {
	return `${import.meta.env.VITE_API_URL}${url}`;
};

export { makeHttpUrl };
