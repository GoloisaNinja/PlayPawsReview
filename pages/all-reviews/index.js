import React, { useState } from 'react';
import Layout from '../../components/Layout/layout';
import ReviewHero from '../../components/ReviewHero/reveiw-hero';
import ReviewGrid from '../../components/ReviewGrid/review-grid';
import Search from '../../components/Search/search';
import styles from './index.module.scss';
import { SiDatadog } from 'react-icons/si';
import { RiSortAsc, RiSortDesc } from 'react-icons/ri';
import axios from 'axios';

function AllReviews({ reviews }) {
	const [visibleReviews, setVisibleReviews] = useState([
		...reviews.sort((a, b) => {
			const aFormatted = new Date(a.reviewed_on);
			const bFormatted = new Date(b.reviewed_on);
			if (aFormatted > bFormatted) {
				return 1;
			} else {
				return -1;
			}
		}),
	]);
	const [userSearchTerm, setUserSearchTerm] = useState('');
	const [sortAsc, setSortAsc] = useState(false);
	const handleSearch = (searchTerm) => {
		const cleanSearchTerm = searchTerm.toLowerCase().trim();
		setUserSearchTerm(cleanSearchTerm);
		setVisibleReviews(
			reviews.filter((review) =>
				review.tmdbData.title.toLowerCase().includes(cleanSearchTerm)
			)
		);
	};
	const handleSort = () => {
		setSortAsc(!sortAsc);
		let sortedReviews = [];
		if (!sortAsc) {
			sortedReviews = visibleReviews.sort((a, b) => {
				const aFormatted = new Date(a.reviewed_on);
				const bFormatted = new Date(b.reviewed_on);
				if (aFormatted < bFormatted) {
					return 1;
				} else {
					return -1;
				}
			});
		} else {
			sortedReviews = visibleReviews.sort((a, b) => {
				const aFormatted = new Date(a.reviewed_on);
				const bFormatted = new Date(b.reviewed_on);
				if (aFormatted > bFormatted) {
					return 1;
				} else {
					return -1;
				}
			});
		}

		setVisibleReviews(sortedReviews);
	};
	return (
		<Layout>
			<div>
				<ReviewHero />
			</div>
			<div style={{ padding: '10px 20px', margin: '0 auto' }}>
				<div className={styles.filters_container}>
					<Search handleSearch={handleSearch} />
					{visibleReviews.length ? (
						sortAsc ? (
							<>
								<button onClick={(e) => handleSort()}>
									<RiSortDesc />
								</button>
							</>
						) : (
							<>
								<button onClick={(e) => handleSort()}>
									<RiSortAsc />
								</button>
							</>
						)
					) : null}
				</div>
				{visibleReviews.length ? (
					<ReviewGrid reviews={visibleReviews} />
				) : (
					<div className={styles.container}>
						<SiDatadog />
						<p className={styles.not_found}>
							{`Heckin' Bamboozled! Search Term: `}{' '}
							<span className={styles.searched}>{`"${userSearchTerm}"`}</span>
							{` returned no reviews...maybe try another search term. If we haven't reviewed the movie or show
							you are looking for - please send us a request from the Requests Page!`}
						</p>
					</div>
				)}
			</div>
		</Layout>
	);
}
export async function getStaticProps() {
	const baseTMDBURL = `https://api.themoviedb.org/3/movie`;
	const apiKey = process.env.NEXT_PUBLIC_TMDB_APIKEY;
	const dbResponse = await axios.get(
		`https://paws-backend.herokuapp.com/reviews`
	);
	let reviewArray = dbResponse.data;
	for (let i = 0; i < reviewArray.length; i++) {
		const response = await axios.get(
			`${baseTMDBURL}/${reviewArray[i].media_id}?api_key=${apiKey}&language=en-US`
		);
		reviewArray[i]['tmdbData'] = response.data;
	}
	const reviews = reviewArray;
	return {
		props: { reviews },
	};
}
export default AllReviews;
