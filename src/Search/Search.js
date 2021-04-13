import React from 'react';
import { NavBar } from '../NavBar/NavBar';
// import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResults } from './SearchResults/SearchResults';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import useReactRouter from 'use-react-router';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

export function Search() {
	const { location } = useReactRouter();
	const params = new URLSearchParams(location.search);
	const term = params.get('find_desc');
	const locationParam = params.get('find_loc');
	const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);

	function search(term, location) {
		console.log('I am called');
		performSearch({ term, location });
	}

	return (
		<div>
			<NavBar term={term} location={locationParam} search={search} />
			{/* <SubNav /> */}
			<SearchResultsSummary
				term={term}
				location={locationParam}
				amountResults={amountResults}
				shownResults={businesses ? businesses.length : 0}
			/>
			<SearchResults businesses={businesses} />
		</div>
	);
}
