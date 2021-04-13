import React from 'react';
import styles from './SearchResult.module.css';

export function SearchResult() {
	return (
		<div>
			SearchResult
			<div className={styles['search-result']}>
				<img src="https://via.placeholder.com/150" alt="business " />
				<p>General Info</p>
				<p>Adress Data</p>
			</div>
		</div>
	);
}
