import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult(props) {
	const biz = props.business;

	if (!props.business) {
		return <div></div>;
	}

	const tags = biz.categories.map(category => (
		<span className={`tag ${styles['business-tag']}`} key={biz.id + category.title}>
			{category.title}
		</span>
	));
	const adressLines = biz.location.display_address.map(adressLine => <p key={biz.id + adressLine}>{adressLine}</p>);

	return (
		<div>
			SearchResult
			<div className={styles['search-result']}>
				<img src={biz.image_url} alt="business" className={styles['business-image']} />
				<div className={styles['business-info']}>
					<h2 className="subtitle">{biz.name}</h2>
					<BusinessRating reviewCount={biz.review_count} rating={biz.rating} />
					<p>
						{biz.price} {tags}
					</p>
				</div>
				<div className={styles['contact-info']}>
					<p>{biz.phone}</p>
					{adressLines}
				</div>
			</div>
		</div>
	);
}
