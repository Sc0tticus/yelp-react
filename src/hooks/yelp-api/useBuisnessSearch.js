import { useState, useEffect } from 'react';
import * as api from './api';

// any time you want to do an async network request, useEffect hook must be used

export function useBuisnessSearch(term, location) {
	const [businesses, setBuisnesses] = useState([]);
	const [amountResults, setAmountResults] = useState([]);
	const [searchParams, setSearchParams] = useState({ term, location });

	useEffect(() => {
		setBuisnesses([]);
		const fetchData = async () => {
			try {
				const rawData = await api.get('/businesses/search', searchParams);
				const resp = await rawData.json();
				setBuisnesses(resp.businesses);
				setAmountResults(resp.total);
			} catch (e) {
				console.error(e);
			}
		};
		fetchData();
	}, [searchParams]);
	return [businesses, amountResults, searchParams, setSearchParams];
}
