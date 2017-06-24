import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'


export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {
		return (<div className="branding-header">
			<div>
			<a href="http://www.nytimes.com/">
				<img id="branding-heading"
					href="https://a1.nyt.com/assets/misc/20170612-102536/images/foundation/logos/nyt-logo-185x26.svg" 
					src="https://a1.nyt.com/assets/misc/20170612-102536/images/foundation/logos/nyt-logo-185x26.png" 
					alt="The New York Times" />
			</a>
			</div>
			</div>)
	}
}