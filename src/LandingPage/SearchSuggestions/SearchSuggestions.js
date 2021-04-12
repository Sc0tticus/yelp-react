import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions() {
	return (
		<div className={styles.suggestions}>
			<span className="icon is-small">
				<i className={`fas fa-utensils ${styles['search-icon']}`}></i>
			</span>
			<span className={styles.suggestion}>Restaurants</span>
			<span className="icon is-small">
				<i className={`fas fa-cocktail ${styles['search-icon']}`}></i>
			</span>
			<span className={styles.suggestion}>Nightlife</span>
			<span className="icon is-small">
				<i className={`fas fa-concierge-bell ${styles['search-icon']}`}></i>
			</span>
			<span className={styles.suggestion}>Services</span>
			<span className="icon is-small">
				<i className={`fas fa-truck ${styles['search-icon']}`}></i>
			</span>
			<span className={styles.suggestion}>Delivery Services</span>
		</div>
	);
}
