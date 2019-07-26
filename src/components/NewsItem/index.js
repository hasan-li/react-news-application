import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import * as moment from 'moment';

import 'moment/locale/az';
import 'moment/locale/ru';
import 'moment/locale/tr';
import './style.css';

import NewsDetailsBlock from '../NewsDetailsBlock'

export default class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            primaryColor: '#333333',
            date: moment().format('DD/MM/YYYY'),
        };
        moment.locale('az');
    }

    componentWillMount() {
        let description = this.props.description;
        const check = description.includes('<p>The post') && description.includes('appeared first on <a rel="nofollow" href="https://infocity.az">InfoCity</a>.</p>');
        if (check) {
            let start = description.indexOf('<p>The post');
            description = description.substring(0, start - 1);
            this.setState({ description });
        }

        this.getDateFromObjectId(this.props._id);
    }

    async getDateFromObjectId(objectId) {
        let date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
        date = await moment(date).format('DD MMMM YYYY');
        this.setState({ date });
    };

    incrementClickNumber = () => {
        const url = `${process.env.REACT_APP_API}news/increment/click?id=${this.props._id}`;
		fetch(url, {
			method: 'GET',
			cache: 'default',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json; charset=utf-8',
			}
		})
		.then(r => {
			if (r.status !== 200) {
				console.log('failed while fetching data from api');
				return;
			}
        });
    }

    render() {
        const primaryColor = '#111111';
        return(
            <div className="newsItem">
                <NewsDetailsBlock
                    image={this.props.image}
                    title={this.props.title}
                    primaryColor={this.props.primaryColor ? this.props.primaryColor : primaryColor}
                    date={this.state.date}
                    sourceUrl={this.props.sourceUrl}
                    sourceOfficialName={this.props.sourceOfficialName}
                    category={this.props.category}
                />
                <a
                    href={this.props.link}
                    target="_blank"
                    rel='noreferrer noopener'
                    className="news-header"
                    onClick={this.incrementClickNumber}
                >
                    {this.props.title}
                </a>
                <div className="news-description">
                    {ReactHtmlParser(this.state.description)}
                </div>
            </div>
        );
    }
}
