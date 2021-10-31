// test of building my own hook - this will not be needed in final build as getStaticProps will be used to pass
// review data from CMS and couple it with TMDB data - saved only for custom hook reminder

import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
const apiKey = process.env.NEXT_PUBLIC_TMDB_APIKEY;
const baseURL = 'https://api.themoviedb.org/3';

export const useTmdbApi = (type, media_id) => {
	const [details, setDetails] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const getMedia = useCallback(async () => {
		const response = await axios.get(
			`${baseURL}/${type}/${media_id}?api_key=${apiKey}&language=en-US`
		);
		setDetails(response.data);
		setIsLoading(false);
	}, [media_id, type]);
	useEffect(() => {
		getMedia();
	}, [getMedia]);
	return { isLoading, details };
};
