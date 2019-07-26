import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import './style.css';

export default class NewsItemOptionsMenu extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu = (event) => {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
  }

  render() {
    return (
      <div className="news-item-options">
        <button onClick={this.showMenu} className="news-item-options__button">
		  <FontAwesomeIcon icon={faEllipsisH} size="lg" color="white" />
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="news-item-options__menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className="news-item-options__menu-item" onClick={this.closeMenu}> Don't show </button>
                <button className="news-item-options__menu-item"> Test value Test Value </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
