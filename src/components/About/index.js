import React, { Component } from 'react';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import TweenOne from 'rc-tween-one';
import ScrollAnim from 'rc-scroll-anim';
import  { List, Avatar } from 'antd';
import MetaTags from 'react-meta-tags';

import LogoGather from  './LogoGather';

import './style.css';

const design_element_1 = require('./../../public/assets/illustrations/design-element-1.png');

TweenOne.plugins.push(Children);
const ScrollParallax = ScrollAnim.Parallax;

export default class About extends Component {
	constructor (props) {
		super(props);
		this.state = {
			animation: null,
		}
	}

	render() {

		const features = [
			{
				title: 'Kateqoriyalar',
				description: 'Maraqlandığınız kateqoriyaları seçərək, siz yalnız öz marağ dairənizdə olan xəbərləri görəcksiniz'
			},
			{
				title: 'Ən son məlumat',
				description: 'MediaHub hər dəqiqə Azərbaycanın möxtəlif informasiya platformalarından xəbərləri və məqalələri toplayaraq oxuculara maraqlarından asılı olaraq keyfiyyətli məzmun təqdim edir'
			},
			{
				title: 'Bütün Azərbaycandan',
				description: 'İnformasiya həm Respublika səviyyəsində informasiya portallarından həm də müxtəlif bölgələrin yerli xəbər və informasiya saytlarından toplanır'
			},
			{
				title: 'Siz şəxsi informasiya pəncərəniz',
				description: 'Siz şəxsi informasiya pəncərəniz'
			},
		];

		return(
			<>
				<MetaTags>
					<meta charSet="utf-8" />
					<title>MediaHub | Haqqımızda</title>

					<meta name="description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta name="keywords" content="haqqımızda, about, news, xəbərlər, media, azərbaijan, azerbaijan, bakı, baku, jurnalistika, məqalə" />
					<meta property="og:url" content="https://mediahub.az/about" />
					<meta property="og:title" content="MediaHub | Haqqımızda" />
					<meta property="og:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta property="og:type" content="website" />
					<meta property="fb:app_id" content="131216174235846" />
					<meta property="og:image" content="https://api.mediahub.az/mh-color__middle.jpg" />
					<meta property="og:image:alt" content="MediaHub Haqqımızda" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@MediaHub17" />
					<meta name="twitter:title" content="MediaHub | Haqqımızda" />
					<meta name="twitter:description" content="MediaHub Azərbaycanın ən böyük xəbər, informasiya portallarından və bloqlarından xəbərləri, məqalələri və paylaşımları toplayaraq bir araya gətirir. Məqsədimiz insanları maralandıran keyfiyyətli xəbərlər və məqalələri rahatlıqla, çox vaxt sərf etmədən seçib və oxumasıdır." />
					<meta name="twitter:image" content="https://api.mediahub.az/mh-color__middle.jpg" />
				</MetaTags>

				<div className="mh-about">
					<LogoGather />
					<h1 className="mh-about-header">
						Haqqımızda
					</h1>
					<p>
						Biz inanırıq ki, böyük hekayələr bizi irəliləyə yönəldir.
					</p>
					<p>
						Biz Azərbaycanın ən böyük xəbər və informasiya portallarından açıq halda yerləşən xəbər və məqalələri toplayaraq MediaHub platformasını yaratdıq, harda ki insanlar keyfiyyətli və maraqlarına uyğun xəbərləri və məqalələri oxuya bilər.
					</p>
					<p>
						Bizim missiyamız insanları məlumatlandırmaqla kifayətlənmir, onlara vacib və faydalı informasiya təmin etməklə inkişaf etdirilməsidir, ilhamladırmaq və ruhlandırmaqdı.
					</p>
					<p>
						Biz inanırıq ki, böyük hekayələr bizi irəliləyə yönəldir.
					</p>
					<p>
						Biz Azərbaycanın ən böyük xəbər və informasiya portallarından açıq halda yerləşən xəbər və məqalələri toplayaraq MediaHub platformasını yaratdıq, harda ki insanlar keyfiyyətli və maraqlarına uyğun xəbərləri və məqalələri oxuya bilər.
					</p>
					<ScrollParallax
						animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
						style={{ transform: 'translateX(-100px)', opacity: 0 }}
					>
						<div className="mh-about__sources">
							<p className="mh-about__number-of-sources">
								46
							</p>
							<p className="mh-about__number-of-sources-text">
								saytla əməkdaşlıq
							</p>
						</div>
					</ScrollParallax>
					<List
						itemLayout="horizontal"
						dataSource={features}
						renderItem={item => (
							<List.Item>
								<List.Item.Meta
									avatar={<Avatar size="large" src={design_element_1} />}
									title={<p className="mh-about__feature-title">{item.title}</p>}
									description={<p className="mh-about__feature-description">{item.description}</p>}
								/>
							</List.Item>
						)}
					/>
					
				</div>
			</>
		)
	}
}
