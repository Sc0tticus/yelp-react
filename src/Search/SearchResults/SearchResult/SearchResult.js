import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult(props) {
	const biz = props.business;

	if (!props.business) {
		return <div></div>;
	}

	return (
		<div>
			SearchResult
			<div className={styles['search-result']}>
				<img src={biz.image_url} alt="business" className={styles['business-image']} />
				<div className={styles['business-info']}>
					<h2 className="subtitle">{biz.name}</h2>
					<BusinessRating reviewCount={biz.review_count} rating={biz.rating} />
					<p>
						$$ <span className="tag">Burgers</span>
						<span className="tag">Fast Food</span>
					</p>
				</div>
				<div className={styles['contact-info']}>
					<p>+123-456-789</p>
					<p>Example Street 5</p>
					<p>12345 Berlin</p>
				</div>
			</div>
		</div>
	);
}
