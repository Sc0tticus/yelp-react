import React from 'react';
import styles from './SearchResultsSummary.module.css';
// Finshed produc

export function SearchResultsSummary(props) {
	let resultStats = null;
	if (props.amountResults && props.shownResults) {
		resultStats = (
			<p>
				Showing 1-{props.shownReults} out of {props.amountResults} results
			</p>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles['search-summary']}>
				<h1 className="subtitle">
					<strong>{props.term}</strong>
				</h1>
				<p>{resultStats}</p>
			</div>
			<div className={styles.filters}>
				<button className="button">
					<span className="icon">
						<i className="fas fa-sliders-h"></i>
					</span>
					<span>All Filters</span>
				</button>
				<div className="buttons has-addons">
					<button className="button">$</button>
					<button className="button">$$</button>
					<button className="button">$$$</button>
					<button className="button">$$$$</button>
				</div>
				<button className="button">
					<span className="icon">
						<i className="fas fa-clock"></i>
					</span>
					<span>Open Now</span>
				</button>
				<button className="button">
					<span className="icon">
						<i className="fas fa-dollar-sign"></i>
					</span>
					<span>Cash Back</span>
				</button>
			</div>
		</div>
	);
}
