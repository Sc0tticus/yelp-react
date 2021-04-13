import React from 'react';
import styles from './SearchResult.module.css';

export function SearchResult() {
	return (
		<div>
			SearchResult
			<div className={styles['search-result']}>
				<img src="https://via.placeholder.com/210" alt="business" className={styles['business-image']} />
				<div className={styles['business-info']}>
					<h2 className="subtitle">Burger Place</h2>
					<p>Rating</p>
					<p>
						$$ <span class="tag">Burgers</span>
						<span class="tag">Fast Food</span>
					</p>
				</div>
				<div>
					<p>+123-456-789</p>
					<p>Example Street 5</p>
					<p>12345 Berlin</p>
				</div>
			</div>
		</div>
	);
}
