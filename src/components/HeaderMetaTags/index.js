import React from 'react';
import MetaTags from 'react-meta-tags';

const HeaderMetaTags = ({
	title,
}) => (
	<MetaTags>
		<meta charSet="utf-8" />
		<title>MediaHub {title && `| ${title}`} </title>
		<link rel="canonical" href="https://mediahub.az" />
		<meta name="description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
		<meta name="keywords" content="news, xəbərlər, media, azərbaijan, azerbaijan, bakı, baku, jurnalistika, məqalə" />
		<meta property="og:url" content="https://mediahub.az" />
		<meta property="og:title" content={`MediaHub ${title && `| ${title}`}`} />
		<meta property="og:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
		<meta property="og:type" content="website" />
		<meta property="fb:app_id" content="131216174235846" />
		<meta property="og:image" content="https://api.mediahub.az/mh-color__middle.jpg" />
		<meta property="og:image:alt" content="MediaHub" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:site" content="@MediaHub17" />
		<meta name="twitter:title" content={`MediaHub ${title && `| ${title}`}`} />
		<meta name="twitter:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
		<meta name="twitter:image" content="https://api.mediahub.az/mh-color__middle.jpg" />
	</MetaTags>
);

export default HeaderMetaTags;
