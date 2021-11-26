import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './search.module.scss';

const Search = ({ handleSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(searchTerm);
	};
	return (
		<div className={styles.form_container}>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type='text'
					value={searchTerm}
					placeholder='search reviews'
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button type='submit'>
					<FiSearch />
				</button>
			</form>
		</div>
	);
};

export default Search;
