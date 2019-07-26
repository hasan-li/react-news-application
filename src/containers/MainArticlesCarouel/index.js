import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slide from 'react-reveal/Slide';
import * as moment from 'moment';
import 'moment/locale/az';

import LeftCarouselArrow from './LeftCarouselArrow';
import RightCarouselArrow from './RightCarouselArrow';

import './style.css';

const lineChartIcon = require('../../public/assets/icon/line-chart.png');

const MainArticlesCarouel = ({
	mainNews,
}) => {

	const getRandomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const getDateFromObjectId = (objectId) => {
		let date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
		moment.locale('az');
		date = moment(date).format('DD MMMM YYYY');
		return date;
	};
	
	const settings = {
		infinite: true,
		draggable: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 0,
		className: 'mh-mainPage__article-slider',
		prevArrow: <RightCarouselArrow />,
		nextArrow: <LeftCarouselArrow />,
		
		responsive: [{breakpoint: 500, settings: {autoplay: true, slidesToShow: 1}}],
	};

	return (
		<Slider {...settings}>
			{mainNews.map(a => (
				<Slide left key={a._id}>
					<div className="mh-mainPage__article-slider__article">
						<div className="mh-mainPage__article-slider__image-wrapper">
							<img
								src={a.image ? a.image : undefined}
								alt={`MediaHub | ${a.title}`}
								className="mh-mainPage__article-slider__image"
							/>
						</div>
						<div className="title-wrapper">
							<a
								href={a.link}
								className="mh-mainPage__article-slider__title"
								target="_blank"
								rel='noreferrer noopener'
							>
								{a.title.length > 85 ? `${a.title.substring(0, 85)}...` : a.title}
							</a>
						</div>

						<div className="row mh-mainPage__article-slider__bottom">
							<div className="col-md-4">
								{a.source.officialName}
							</div>
							<div className="col-md-5">
								{getDateFromObjectId(a._id)}
							</div>
							<div className="col-md-3 row mh-mainPage__article-slider__bottom__stats">
								<img src={lineChartIcon} className="mh-mainPage__article-slider__icon" alt='MediaHub | chart icon' />
								<p className="mh-mainPage__article-slider__clickNum">
										+{getRandomInt(10, 40) + (a.clickNum ? a.clickNum : 0) }
								</p>
							</div>
						</div>
					</div>
				</Slide>
			))}
		</Slider>
	);
};

const mapStateToProps = (state) => {
	return ({
		mainNews: state.articlesState.mainNews,
	});
};

export default connect(
	mapStateToProps,
	null
)(MainArticlesCarouel);

