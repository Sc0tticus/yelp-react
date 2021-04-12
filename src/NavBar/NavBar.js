import React from 'react';
import yelpLogo from '../assets/yelpLogo.png';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

export function NavBar() {
	return (
		<div className={styles['nav-bar']}>
			<img src={yelpLogo} className={styles['nav-bar']} alt="yelp logo" />
			<SearchBar small />
			<button className={`button ${styles['nav-button']}`}>Sign In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	);
}
