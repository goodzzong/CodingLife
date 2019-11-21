import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const NewsList = ({ category }) => {
	const [loading, response, error] = usePromise(() => {
		const query = category === 'all' ? '' : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8b0f0ff05ff6496b8df6933732cbafde`
		)
	}, [category])


	if (loading) {
		return <div>...대기중</div>;
	}

	if (!response) {
		return null;
	}

	if (error) {
		return <NewsListBlock>에러발생</NewsListBlock>;
	}
	const { articles } = response.data;
	return (
		<NewsListBlock>
			{articles && articles.map(article => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
};

export default NewsList;