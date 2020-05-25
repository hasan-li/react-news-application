import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import * as moment from 'moment';

import 'moment/locale/az';
import './style.css';

const TwitterItem = ({
	content,
	profileName,
	nickName,
	profileUrl,
	profileImage,
	categories,
	images,
	_id,
	sourceLogo,
	sourceName,
}) => {
	const [galleryImages, setGalleryImages] = useState(null);
	const [renderedCategories, setRenderedCategories] = useState(null);
	const [date, setDate] = useState(moment().format('DD/MM/YYYY'));

	useEffect(() => {
		if (!images || images.length === 0) {
			return;
		}
		const galleryLength = images.length < 5 ? images.length : 4;
		const columnLeft = [];
		const columnRight = [];
		const singleImage = [];
		for (let i = 0; i < galleryLength; i++) {
			const imageBlock = <div key={i} className={`mh-image-gallery__column__image_block ${galleryLength === 1 && 'visible'}`}>
				<img src={images[i]} alt="Mediahub.az | image gallery image" className="mh-image-gallery__column__image" />
			</div>;
			if (galleryLength === 3 || galleryLength === 4) {
				columnLeft.length < 2 ? columnLeft.push(imageBlock) : columnRight.push(imageBlock);
			} else if (galleryLength === 2) {
				columnLeft.length < 1 ? columnLeft.push(imageBlock) : columnRight.push(imageBlock);
			} else {
				singleImage.push(
					imageBlock
				);
			}
		}
		const gallery = <div className="mh-twit-item__image-gallery">
			{galleryLength === 1 ? (
				<div className="mh-image-gallery__single__image">
					{singleImage}
				</div>
			) : (
				<>
					<div className="mh-image-gallery__column">
						{columnLeft}
					</div>
					<div className="mh-image-gallery__column">
						{columnRight}
					</div>
				</>
				
			)}
		</div>;

		setGalleryImages(gallery);
	}, [images]);

	useEffect(() => {
		if (!categories || categories.length === 0) {
			return;
		}
		const categoryLabels = [];
		for (let i = 0; i < categories.length; i++) {
			categoryLabels.push(
				<div key={i} className="news-item__category mh-twit__category">
					#{categories[i].label && categories[i].label['az']
						? categories[i].label['az']
						: categories[i].name}
				</div>
			);
		}
		setRenderedCategories(categoryLabels);
	}, [categories]);

	useEffect(() => {
		const date = new Date(parseInt(_id.substring(0, 8), 16) * 1000);
		setDate(moment(date).format('DD MMMM YYYY'));
	});

	return(
		<div className="newsItem mh-twit-item">
			<div className="mh-twit-item__user">
				<a href={profileUrl} target="_blank" rel="noopener noreferrer">
					<img src={profileImage} alt="MediaHub | user profile image" className="mh-twit-item__user-image" />
				</a>
				<div className="mh-twit-item__user-name" >
					<a href={profileUrl} target="_blank" rel="noopener noreferrer">
						<p className="mh-twit-item__user-name__display-name">{profileName}</p>
					</a>
					<a href={profileUrl} target="_blank" rel="noopener noreferrer">
						<p className="mh-twit-item__user-name__nick-name">{nickName}</p>
					</a>
				</div>

			</div>
			{ReactHtmlParser(content)}
			{
				(galleryImages) && (
					galleryImages
				)
			}

			<div className="row mh-twit-item__bottom" >
				<div className="col-md-6">
					<div className="row ">
						<div className="col-md-6 mh-twit-item__source">
							<a href={profileUrl} target="_blank" className="mh-twit-item__source__url" rel="noopener noreferrer" >
								<img src={sourceLogo} className="mh-twit-item__source__logo" alt="MediaHub | Twitter logo" />
								<p className="mh-twit-item__source__name">{sourceName}</p>
							</a>
						</div>
					</div>
					<div className="row">
						{date}
					</div>
				</div>

				<div className="col-md-6">
					{
						(categories && categories.length > 0) && (
							renderedCategories
						)
					}
				</div>
			</div>
		</div>
	);
};

export default TwitterItem;
