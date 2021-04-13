import React from 'react';
import styles from './BuisnessRating.module.css';
import Rating from 'react-rating';

export function BusinessRating() {
	return (
		<div className={styles.rating}>
			<Rating emptySymbol="far fa-star" fullSymbol="fas fa-star" fractions={2} readonly initialRating={3} />
			BuisnessRating
		</div>
	);
}
