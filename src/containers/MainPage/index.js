import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';

import { Mobile, Desktop, Tablet } from '../../components/Viewports';
import NewsItem from '../../components/NewsItem';
import TwitterItem from '../../components/TwitterItem';
import NewsItemPlaceholder from '../../components/NewsItemPlaceholder';
import Loading from '../../components/Loading';
import MainArticlesCarouel from '../MainArticlesCarouel';
import CategorySelectionItem from '../../containers/CategorySelectionItem';

import {
	fetchPaginatedNews,
} from '../../actions';

import './style.css';

const useRenderArticles = (sortedArticles, allCategories) => {
	if ( !Array.isArray(sortedArticles) || (sortedArticles.length === 0) ) {
		return [];
	}
	if ( !Array.isArray(allCategories) || (allCategories.length === 0) ) {
		return [];
	}

	/**
	 * differentiate news from social-media articles
	 * */
	return sortedArticles.map((a, index) => {
		if (!a.author) {
			const category = allCategories.find(cat => cat.name === a.category.name);
			return (
				<LazyLoad once={true} key={a._id} placeholder={<NewsItemPlaceholder />}>
					<NewsItem
						title={a.title}
						link={a.link}
						image={a.image ? a.image : undefined}
						description={a.description.length > 500 ? `${a.description.substring(0, 500)}...` : a.description}
						category={category.label && category.label['az'] ? category.label['az'] : a.category.name}
						_id={a._id}
						sourceOfficialName={a.source ? a.source.officialName : ''}
						sourceUrl={a.source ? a.source.url : ''}
						index={index}
						key={index}
						primaryColor={a.primaryColor}
					/>
				</LazyLoad>
			);
		}

		const categories = a.author.category.filter(c =>
			allCategories.filter(cat => cat.name === c.name)
		);
		switch(a.source.name) {
			case 'twitter': {
				return (
					<LazyLoad once={true} key={a._id} placeholder={<NewsItemPlaceholder />}>
						<TwitterItem 
							content={a.content}
							profileName={a.author.name}
							nickName={a.author.nickName}
							profileUrl={a.author.profileUrl}
							profileImage={a.author.profileImage}
							categories={categories}
							images={a.images}
							sourceLogo={a.source.logo}
							sourceName={a.source.name}
							_id={a._id}
							key={index}
							index={index}
						/>
					</LazyLoad>
				);
			}
			default: {
				return 'Unknown source';
			}
		}
	});


};

const MainPage = ({
	allCategories,
	articles,
	loadingArticles,
	hasMore,
	nextPage,
	loadingCategories,
	fetchArticles,
}) => {
	const [renderedNews, setRenderedNews] = useState([]);
	const [sortedArticles, setSortedArticles] = useState([]);

	useEffect(() => {
		if (loadingArticles && nextPage === 1) {
			fetchArticles();
		}
	}, [loadingArticles, nextPage]);

	useEffect(() => {
		if (articles.length > 0) {
			const chunk = 10;
			let sorted = [];
			for (let i = 0; i < articles.length; i += chunk) {
				let tempArray = articles.slice(i, i + chunk);
				tempArray.sort((cur, prev) => 
					new Date(prev.updatedAt) - new Date(cur.updatedAt));
				sorted = [...sorted, ...tempArray];
			}
			setSortedArticles(sorted);
		}
	}, [articles]);

	useEffect(() => {
		const renderedArticles = useRenderArticles(sortedArticles, allCategories);
		if (allCategories.length > 0 && renderedArticles.length > 0) {
			const renderedCategorySelectionItem =
				<CategorySelectionItem
					key='category-selection-item'
				/>;
			renderedArticles.splice(3, 0, renderedCategorySelectionItem);
			setRenderedNews(renderedArticles);
		}
	}, [articles, allCategories, nextPage]);


	return (
		(loadingArticles && nextPage === 1) || loadingCategories ? (
			<Loading />
		) : (
			<div>
				<InfiniteScroll
					pageStart={0}
					loadMore={nextPage !== 1 && fetchArticles}
					hasMore={hasMore}
					loader={<Loading key={600} />}
					threshold={1500}
				>
					{/* <MainArticlesCarouel /> */}

					<Tablet>
						{renderedNews}
					</Tablet>
					<Mobile>
						{renderedNews}
					</Mobile>
					<Desktop>
						<Masonry
							breakpointCols={3}
							className="my-masonry-grid"
							columnClassName="my-masonry-grid_column">
							{renderedNews}
						</Masonry>
					</Desktop>
				</InfiniteScroll>
			</div>
		)
	);
};

const mapDispatchToProps = {
	fetchArticles: fetchPaginatedNews,
};

const mapStateToProps = (state) => {
	return ({
		articles: state.articlesState.news,
		nextPage: state.articlesState.nextPage,
		loadingArticles: state.articlesState.loadingArticles,
		hasMore: state.articlesState.hasMore,
		allCategories: state.categories.allCategories,
		loadingCategories: state.categories.loadingCategories,
	});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPage);

