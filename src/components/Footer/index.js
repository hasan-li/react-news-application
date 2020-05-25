import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../public/assets/logo_web.png';
import fb from '../../public/assets/social_media/fb.png';
import instagram from '../../public/assets/social_media/instagram.png';
import twitter from '../../public/assets/social_media/twitter.png';
import './style.scss';

const Footer = () => (
	<>
		{/* <div className="footer container">
			<div className="row">
				<div className="col-md-1">
					<Link to="/">
						<img src={logo} alt="MediaHub loqo" className="logo-footer" />
					</Link>
				</div>
				<div className="col-md-7">
					<p className="mh-footer_description">
						Biz Azərbaycanın ən böyük xəbər və informasiya portallarından xəbərləri,
						məqalələri və bloq paylaşımlarını toplayaraq MediaHub platformunu yaratdıq.
						Məqsədimiz insanların keyfiyyətli xəbərlərləri və məqalələri 
						rahatlıqla oxumasıdır.
						Xəbərlər, məqalələr, bloqlar, vloqlar - hamısı bir arada: MediaHub-da!
					</p>
					<p>
						Bütün hüquqlar qorunur © 2019
					</p>
				</div>
				<div className="col-md-1">
					<a href="https://www.facebook.com/mediahub.az/" target="blank">
						<img src={fb} alt="Facebook logo" className="mh-footer__sm-icon" />
					</a>
				</div>
				<div className="col-md-1">
					<a href="https://twitter.com/MediaHub17" target="blank">
						<img src={twitter} alt="Twitter logo" className="mh-footer__sm-icon" />
					</a>
				</div>
				<div className="col-md-1">
					<a href="https://instagram.com/mediaHub.az" target="blank">
						<img src={instagram} alt="Instagram logo" className="mh-footer__sm-icon" />
					</a>
				</div>
				<div className="col-md-1">
					<p>
						<Link to="/contact">
							Əlaqə
						</Link>
					</p>
					<p>
						<Link to="/about">
							Haqqımızda
						</Link>
					</p>
				</div>
		
			</div>
		</div> */}
		<div className="footer">
			<Link to="/" className="footer__logo">
				<img src={logo} alt="MediaHub loqo" className="footer__logo" />
			</Link>
			<div className="footer__description">
				Biz Azərbaycanın ən böyük xəbər və informasiya portallarından xəbərləri,
				məqalələri və bloq paylaşımlarını toplayaraq MediaHub platformunu yaratdıq.
				Məqsədimiz insanların keyfiyyətli xəbərlərləri və məqalələri 
				rahatlıqla oxumasıdır.
				Xəbərlər, məqalələr, bloqlar, vloqlar - hamısı bir arada: MediaHub-da!
			</div>
			<div className="footer__social-media">
				<div className="footer__social-media__item">
					<a href="https://www.facebook.com/mediahub.az/" target="blank">
						<img src={fb} alt="Facebook logo" className="footer__social-media__item__icon" />
					</a>
				</div>
				<div className="footer__social-media__item">
					<a href="https://twitter.com/MediaHub17" target="blank">
						<img src={twitter} alt="Twitter logo" className="footer__social-media__item__icon" />
					</a>
				</div>
				<div className="footer__social-media__item">
					<a href="https://instagram.com/mediaHub.az" target="blank">
						<img src={instagram} alt="Instagram logo" className="footer__social-media__item__icon" />
					</a>
				</div>
			</div>
			<div className="footer__nav">
				<p>
					<Link to="/">
						Əsas səhifə
					</Link>
				</p>
				<p>
					<Link to="/contact">
						Əlaqə
					</Link>
				</p>
				<p>
					<Link to="/about">
						Haqqımızda
					</Link>
				</p>
			</div>
		</div>
	</>
);

export default Footer;