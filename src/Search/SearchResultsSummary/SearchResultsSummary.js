import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary() {
	return (
		<div className={styles.container}>
			<div className={styles['search-summary']}>
				<h1 className="subtitle">
					<strong>Parking Spots</strong>Los Angeles
				</h1>
				<p>Showing 1-20 results out of 534 results</p>
			</div>
		</div>
	);
}
