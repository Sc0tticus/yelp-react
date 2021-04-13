import React from 'react';
import { NavBar } from '../NavBar/NavBar';
// import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResults } from './SearchResults/SearchResults';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';

export function Search() {
	return (
		<div>
			<NavBar />
			{/* <SubNav /> */}
			<SearchResultsSummary />
			<SearchResults />
		</div>
	);
}
