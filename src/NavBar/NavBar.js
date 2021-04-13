import React from 'react';
import yelpLogo from '../assets/yelpLogo.png';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export function NavBar(props) {
	return (
		<div className={styles['nav-bar']}>
			<Link to="/">
				<img src={yelpLogo} className={styles['nav-bar']} alt="yelp logo" />
			</Link>
			<SearchBar small term={props.term} location={props.location} />
			<button className={`button ${styles['nav-button']}`}>Sign In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	);
}
