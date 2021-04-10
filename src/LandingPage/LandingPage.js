import React from 'react';
import { TopNav } from './TopNav/TopNav';
import yelpLogo from '../assets/yelpLogo.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function LandingPage() {
	return (
		<div>
			<TopNav />
			<img src={yelpLogo} className={styles.yelpLogo} alt="logo" />
			<SearchBar />
		</div>
	);
}
