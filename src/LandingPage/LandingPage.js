import React from 'react';
import { TopNav } from './TopNav/TopNav';
import yelpLogo from '../assets/yelpLogo.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';

export function LandingPage() {
	return (
		<div className={styles.landing}>
			<div className={styles['search-area']}>
				<TopNav />
				<img src={yelpLogo} className={styles.yelpLogo} alt="logo" />
				<SearchBar />
				<SearchSuggestions />
			</div>
		</div>
	);
}
