import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import * as moment from 'moment';

import 'moment/locale/az';
import {
	checkArticleContent,
	getDateFromObjectId,
} from './services';
import { incrementArticleClick } from '../../actions';
import './style.scss';

const NewsItem = ({
	_id,
	description,
	image,
	title,
	primaryColor,
	sourceUrl,
	sourceOfficialName,
	category,
	link,
}) => {
	const [text, setText] = useState('');
	const [articleDate, setArticleDate] = useState(moment().format('DD/MM/YYYY'));
	const dispatch = useDispatch();
	moment.locale('az');

	useEffect(() => {
		const content = checkArticleContent(description);
		setText(content);
		const date = getDateFromObjectId(_id);
		setArticleDate(date);
	});

	return(
		<div className="article">
			{image && <img src={image} alt={title} className="article__image" />}
			<div className="article__details">
				<div className="article__details__category">
					#{category.toUpperCase()}
				</div>
				<a
					href={link}
					target="_blank"
					rel='noreferrer noopener'
					className="article__details__header"
					onClick={() => dispatch(incrementArticleClick(_id))}
				>
					{title}
				</a>
				<div className="article__details__description">
					{ReactHtmlParser(text)}
				</div>
				<div className="article__details__bottom">
					<a href={sourceUrl} className="article__details__bottom__source" target="_blank" rel='noreferrer noopener'>
						{sourceOfficialName}
					</a>
					<p className="article__details__bottom__date">
						{articleDate}
					</p>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;