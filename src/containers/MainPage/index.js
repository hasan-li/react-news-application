import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import {
	BrowserView,
	MobileView,
} from 'react-device-detect';

import MasonryLayout from '../../components/MasonryLayout';
import NewsItem from '../../components/NewsItem';
import NewsItemPlaceholder from '../../components/NewsItemPlaceholder';
import Loading from '../../components/Loading';
import MainArticlesCarouel from '../MainArticlesCarouel';
import CategorySelectionItem from '../../containers/CategorySelectionItem';

import {
	fetchPaginatedNews,
	fetchSMContent,
} from '../../actions';

import './style.css';

const MainPage = ({
	allCategories,
	news,
	loadingArticles,
	hasMore,
	nextPage,
	loadingCategories,

	fetchPaginatedNews,
	fetchSMContent,
}) => {
	const [renderedNews, setRenderedNews] = useState([]);

	useEffect(() => {
		if (loadingArticles && nextPage === 1) {
			fetchPaginatedNews();
			fetchSMContent();
		}
	}, []);

	useEffect(() => {
		if (news.length > 0 && allCategories.length > 0) {
			const processedNewsData = getNews();

			const renderedCategorySelectionItem =
				<CategorySelectionItem
					key='category-selection-item'
				/>;
			processedNewsData.splice(3, 0, renderedCategorySelectionItem);
			setRenderedNews(processedNewsData);
		}
	}, [news, allCategories]);

	const getNews = () => {
		if ( !Array.isArray(news) || (news.length === 0) ) {
			return;
		}
		return news.map((newsItem, index) => {
			const category = allCategories.find(cat => cat.name === newsItem.category.name);
			return (
				<LazyLoad once={true} key={newsItem._id} placeholder={<NewsItemPlaceholder />}>
					<NewsItem 
						title={newsItem.title}
						link={newsItem.link}
						image={newsItem.image ? newsItem.image : undefined}
						description={newsItem.description}
						category={category.label ? category.label['az'] : newsItem.category.name}
						_id={newsItem._id}
						sourceName={newsItem.sourceName}
						sourceOfficialName={newsItem.source ? newsItem.source.officialName : ''}
						sourceUrl={newsItem.source ? newsItem.source.url : ''}
						index={index}
						key={index}
						primaryColor={newsItem.primaryColor}
					/>
				</LazyLoad>
			);
		});
	};

	return (
		(loadingArticles && nextPage === 1) || loadingCategories ? (
			<Loading />
		) : (
			<div>
				<InfiniteScroll
					pageStart={0}
					loadMore={fetchPaginatedNews}
					hasMore={hasMore}
					loader={<Loading key={0} />}
				>
					<MainArticlesCarouel />

					<BrowserView>
						<MasonryLayout columns={3} gap={20}>
							{renderedNews}
						</MasonryLayout>
					</BrowserView>
					<MobileView>
						{renderedNews}
					</MobileView>
				</InfiniteScroll>
			</div>
		)
	);
};

const mapDispatchToProps = {
	fetchPaginatedNews,
	fetchSMContent,
};

const mapStateToProps = (state) => {
	return ({
		news: state.articlesState.news,
		nextPage: state.articlesState.nextPage,
		loadingArticles: state.articlesState.loadingArticles,
		hasMore: state.articlesState.hasMore,
		allCategories: state.categoryState.allCategories,
		loadingCategories: state.categoryState.loadingCategories,
	});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPage);

