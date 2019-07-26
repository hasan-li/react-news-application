import React, { Component } from 'react';

import './style.css';

// import NewsItemOptionsMenu from '../NewsItemOptionsMenu';

export default class NewsDetailsBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return(
			<div className="news-image-details-block">
				{this.props.image ? (
					<div>
						<img src={this.props.image} alt={this.props.title} className="newsImage" />
						{/* <NewsItemOptionsMenu /> */}
						<div className="news-details-block" style={{
							backgroundImage: `linear-gradient(to bottom, transparent, ${this.props.primaryColor})` 
						}}>
							<div className="gradient-content">
								<div className="row">
									<div className="col-md-6 news-item__category">
										#{this.props.category}
									</div>
									<div className="col-md-6" />
								</div>
								<div className="row">
									<div className="col-md-6">
										<a href={this.props.sourceUrl} className="source-name" target="_blank" rel='noreferrer noopener'>
											{this.props.sourceOfficialName}
										</a>
									</div>
									<div className="col-md-6">
										{this.props.date}
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div>
						{/* <NewsItemOptionsMenu /> */}
						<div className="news-details-block__without-image" style={{
							backgroundImage: `linear-gradient(to bottom, transparent, ${this.props.primaryColor})` 
						}}>
							<div className="gradient-content">
								<div className="row">
									<div className="col-md-6">
										#{this.props.category}
									</div>
									<div className="col-md-6" />
								</div>
								<div className="row">
									<div className="col-md-6">
										<a href={this.props.sourceUrl} className="source-name" target="_blank" rel='noreferrer noopener'>
											{this.props.sourceOfficialName}
										</a>
									</div>
									<div className="col-md-6">
										{this.props.date}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}	
};
