import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MetaTags from 'react-meta-tags';

import Root from '../Root';
import About from '../../components/About';
import UserCabinet from './../UserCabinet';
import Article from './../Article';
import Contact from '../../components/Contact';
import BurgerMenu from './../BurgerMenu';
import Header from './../Header';
import Footer from '../../components/Footer';

import {
	getUser,
	getAllCategories,
	displayInitAuthModal,
} from '../../actions';

const Application = ({
	getUser,
	getAllCategories,
	selectedCategories,
	user,
	displayInitAuthModal,
	initAuthModalVisible,
	loginModalOpen,
}) => {
	useEffect(() => {
		getUser();
		getAllCategories();
	}, []);

	useEffect(() => {
		displayInitAuthModal(
			!(user && user.categories && user.categories.length > 0)
			&& !(selectedCategories.length > 0)
			&& !loginModalOpen
		);
	}, [user, loginModalOpen]);

	return (
		<div id="App" className="App">
			<MetaTags>
				<meta charSet="utf-8" />
				<title>MediaHub</title>
				<link rel="canonical" href="https://mediahub.az" />

				<meta name="description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
				<meta name="keywords" content="news, xəbərlər, media, azərbaijan, azerbaijan, bakı, baku, jurnalistika, məqalə" />
				<meta property="og:url" content="https://mediahub.az" />
				<meta property="og:title" content="MediaHub | İnformasiyanın toplam məkanı" />
				<meta property="og:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
				<meta property="og:type" content="website" />
				<meta property="fb:app_id" content="131216174235846" />
				<meta property="og:image" content="https://api.mediahub.az/mh-color__middle.jpg" />
				<meta property="og:image:alt" content="MediaHub" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@MediaHub17" />
				<meta name="twitter:title" content="MediaHub | İnformasiyanın toplam məkanı" />
				<meta name="twitter:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
				<meta name="twitter:image" content="https://api.mediahub.az/mh-color__middle.jpg" />
			</MetaTags>
			<BurgerMenu />

			<div className="container">
				<Header />

				<Route path="/" exact render={
					() =>
						<Root
							initAuthModalVisible={initAuthModalVisible}
							loginModalOpen={loginModalOpen}
						/>
				} />
				<Route path="/about/" component={About} />
				<Route path="/user-cabinet/" render={() => <UserCabinet /> } />
				<Route path="/article/:articleId" render={(props) => <Article articleId={props.match.params.articleId} />} />
				<Route path="/contact/" component={Contact} />

				<Footer />
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	getUser,
	getAllCategories,
	displayInitAuthModal,
};

const mapStateToProps = (state) => {
	return ({
		selectedCategories: state.auth.selectedCategories,
		user: state.auth.user,
		initAuthModalVisible: state.app.initAuthModalVisible,
		loginModalOpen: state.app.loginModalOpen,
	});
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Application));
