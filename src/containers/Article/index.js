import React, { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import * as moment from 'moment';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';

import 'moment/locale/az';
import 'moment/locale/ru';
import 'moment/locale/tr';

import 'react-notifications/lib/notifications.css';
import './style.css'

import {
	fetchArticle,
} from '../../actions';

const Article = ({ article, loadingArticles, fetchArticle, articleId }) => {
	const [date, setdate] = useState(null);

	useEffect(() => {
		moment.locale('az');
		fetchArticle(articleId);
	}, []);
	useEffect(() => {
		if (article && article._id) {
			const date = getDateFromObjectId(article._id);
			setdate(date);
		}
	}, [article]);

	const getDateFromObjectId = (objectId) => {
		let date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
		date = moment(date).format('DD MMMM YYYY');
		return date;
	}

	return(
		loadingArticles ? (
			<div className="loading-spinner" key={0}>
				<BeatLoader
					className=""
					sizeUnit={"px"}
					size={20}
					color={'#200F24'}
				/>
			</div>
		) : (
			<>
				<MetaTags>
					<meta charSet="utf-8" />
					<title>MediaHub | {article.title}</title>
					<meta name="description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta name="keywords" content="news, xəbərlər, media, azərbaijan, azerbaijan, bakı, baku, jurnalistika, məqalə" />
					<meta property="og:url" content={`https://mediahub.az/article/${articleId}`} />
					<meta property="og:title" content={`MediaHub | ${article.title}`} />
					<meta property="og:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta property="og:type" content="website" />
					<meta property="fb:app_id" content="131216174235846" />
					<meta property="og:image" content={article.image || 'https://api.mediahub.az/mh-color__middle.jpg'} />
					<meta property="og:image:alt" content={article.title} />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@MediaHub17" />
					<meta name="twitter:title" content={`MediaHub | ${article.title}`} />
					<meta name="twitter:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta name="twitter:image" content={article.image || 'https://api.mediahub.az/mh-color__middle.jpg'} />
				</MetaTags>

				<div className="mh-article__container container">
					{article.image && (
						<div className="mh-article__image-block">
							<img src={article.image} alt={article.title} className="mh-article__image" />
						</div>
					)}
					<a href={article.link} target="_blank" rel='noreferrer noopener' className="mh-article__title">
						<p>{article.title}</p>
					</a>
					
					<div className="row">
						<div className="col-md-5 mh-article__details category">
							#{article.category.name}
						</div>
						<div className="col-md-5 mh-article__details" />
					</div>

					<div className="row">
						<div className="col-md-5 mh-article__details">
							{date}
						</div>
						<div className="col-md-5 mh-article__details">
							<a href={article.source.sourceUrl} className="source-name" target="_blank" rel='noreferrer noopener'>
								{article.source.officialName}
							</a>
						</div>
					</div>

					<div className="mh-article__text">
						{article.description}
					</div>
				</div>
			</>
		)	
	)
}

const mapDispatchToProps = {
	fetchArticle,
};

const mapStateToProps = (state) => {
	return ({
		article: state.articlesState.singleArticle,
		loadingArticles: state.articlesState.loadingArticles,
	})
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Article);
