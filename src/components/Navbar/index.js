import React, {Component} from 'react';

import './style.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
	}

	render() {
		return (
			<div className="row navbar">
				<div className="col-md-2 navbar-item">Avtomobiller</div>
				<div className="col-md-2 navbar-item">Idman</div>
				<div className="col-md-2 navbar-item">Inkishaf</div>
				<div className="col-md-2 navbar-item">Inkishaf</div>
				<div className="col-md-2 navbar-item">Inkishaf</div>
				<div className="col-md-2 navbar-item">Inkishaf</div>
			</div>
		);
	}
};
