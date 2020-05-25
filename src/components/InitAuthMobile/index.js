import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cx from 'classnames';

import InitAuth from 'src/components/InitAuth';
import InitAuthCategories from 'src/components/InitAuthCategories';

import './style.scss';
import 'react-tabs/style/react-tabs.scss';

const InitAuthMobile = () => {

	return (
		<Tabs className="init-auth-mobile__tabs">
			<TabList className="init-auth-mobile__tablist">
				<Tab
					className="init-auth-mobile__tab"
					selectedClassName="init-auth-mobile__tab--selected"
				>
					Daxil ol
				</Tab>
				<Tab
					className="init-auth-mobile__tab"
					selectedClassName="init-auth-mobile__tab--selected"
				>
					Kateqoriya seçimi
				</Tab>
			</TabList>

			<TabPanel
				className="init-auth-mobile__tab-panel"
				selectedClassName="init-auth-mobile__tab-panel--selected"
			>
				<InitAuth />
			</TabPanel>
			<TabPanel
				className="init-auth-mobile__tab-panel"
				selectedClassName="init-auth-mobile__tab-panel--selected"
			>
				<InitAuthCategories />
			</TabPanel>
		</Tabs>
	);
};

export default InitAuthMobile;