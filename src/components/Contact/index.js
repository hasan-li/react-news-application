import React, { Component } from 'react';
import { FacebookLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import MetaTags from 'react-meta-tags';

import './style.css';

const design_element_1 = require('./../../public/assets/illustrations/design-element-1.png');

export default class Contact extends Component {

	handleSocial = (loginSource) => {
		switch(loginSource) {
			case 'facebook':
				window.open('https://www.facebook.com/mediahub.az/', '_blank');
				break;
			case 'twitter':
				window.open('https://twitter.com/MediaHub17', '_blank');
				break;
			case 'instagram':
				window.open('https://instagram.com/mediaHub.az', '_blank');
				break;
			default:
				break;
		}
	}

	render() {
		return(
			<>
				<MetaTags>
					<meta charSet="utf-8" />
					<title>MediaHub | Əlaqə</title>

					<meta name="description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta name="keywords" content="haqqımızda, about, news, xəbərlər, media, azərbaijan, azerbaijan, bakı, baku, jurnalistika, məqalə" />
					<meta property="og:url" content="https://mediahub.az/contact" />
					<meta property="og:title" content="MediaHub | Əlaqə" />
					<meta property="og:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta property="og:type" content="website" />
					<meta property="fb:app_id" content="131216174235846" />
					<meta property="og:image" content="https://api.mediahub.az/mh-color__middle.jpg" />
					<meta property="og:image:alt" content="MediaHub Əlaqə" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@MediaHub17" />
					<meta name="twitter:title" content="MediaHub | Əlaqə" />
					<meta name="twitter:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta name="twitter:image" content="https://api.mediahub.az/mh-color__middle.jpg" />
				</MetaTags>

				<div className="mh-contact container">
					<h1 className="mh-contact__header">
						Bizimlə əlaqə saxlayın
					</h1>
					<div className="row mh-contact__content" >
						<div className="col-md-4 col-sm-12">
							<img src={design_element_1} className="mh-contact__design-element" alt="MediaHub design item" />
						</div>
						<div className="col-md-8 col-sm-12">
							<div className="mh-contact__block">
								<a className="mh-contact__email-link" href="mailto:mediahub.az@gmail.com">mediahub.az@gmail.com</a>
								<hr />
								<p className="mh-contact__email">Sosial şəbəkələr</p>
								<FacebookLoginButton className="mh-contact__social-media-btn" onClick={() => this.handleSocial('facebook')}>
									<span>MediaHub</span>
								</FacebookLoginButton>
								<TwitterLoginButton className="mh-contact__social-media-btn" onClick={() => this.handleSocial('twitter')}>
									<span>MediaHub</span>
								</TwitterLoginButton>
								<InstagramLoginButton className="mh-contact__social-media-btn" onClick={() => this.handleSocial('instagram')}>
									<span>MediaHub</span>
								</InstagramLoginButton>
							</div>
						</div>
					</div>

				</div>
			</>
		)
	}
}