import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {
	// please introduce some state into our functional component.
	const [term, setTerm] = useState(props.term || '');
	const [location, setLocation] = useState(props.term || '');

	const sizeClass = props.small ? '' : 'is-medium';

	function onSubmit(e) {
		if (typeof props.search === 'function') {
			props.search(term, location);
		}
		e.preventDefault();
	}

	return (
		<form onSubmit={onSubmit}>
			<p className="control">
				<button className={`button is-static ${sizeClass}`}>Search</button>
			</p>
			<p className="control">
				<input
					onChange={e => setTerm(e.target.value)}
					className={`input ${sizeClass} ${styles['input-control']}`}
					type="text"
					placeholder="burgers, barbers, parking spots"
				/>
			</p>
			<div className="control">
				<button className={`button is-static ${sizeClass}`}>Near</button>
			</div>
			<p className="control">
				<input
					className={`input ${sizeClass} ${styles['input-control']}`}
					onChange={e => setLocation(e.target.value)}
					type="text"
					placeholder="Where"
				></input>
			</p>
			<div className={`button ${sizeClass} ${styles['search-button']}`} onClick={onSubmit}>
				<span className={`icon is-small ${styles['search-icon']}`}>
					<i className={`fas fa-search ${styles['search-icon']}`}></i>
				</span>
			</div>
		</form>
	);
}
