import React from 'react';
import { TopNav } from './TopNav/TopNav';
import yelpLogo from '../assets/yelpLogo.png';
import styles from './LandingPage.module.css';

export function LandingPage() {
	return (
		<div>
			<TopNav />
			<img src={yelpLogo} className={styles.yelpLogo} alt="logo" />
		</div>
	);
}
