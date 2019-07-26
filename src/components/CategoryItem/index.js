import React, { Component } from 'react';

import './style.css';

export default class CategoryItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryIsSelected: false
		}
	}

	setParentState = () => {
		if (this.state.categoryIsSelected) {
			this.props.addSelectedCategory(this.props.id);
		}
		else {
			this.props.removeSelectedCategory(this.props.id);
		}
	}

	selectCategory = () => {
		this.setState({ categoryIsSelected: !this.state.categoryIsSelected }, this.setParentState);
	}

	componentDidMount = () => {
		if (!this.props.userCategories) {
			return;
		}
		const userCategory =this.props.userCategories.find(category => 
			category === this.props.id
		);
		if (userCategory) {
			this.setState({
				categoryIsSelected: true
			});
		}
	}

	render() {
		const categoryStyle = this.state.categoryIsSelected ? 'category-item__selected' : 'category-item';
		const category = this.props.label ? this.props.label : this.props.name;
		return (
			<div className={categoryStyle} onClick={this.selectCategory}>
				#{category}
			</div>
		);
	}
}