import React from 'react';
import ReactDOM from 'react-dom';


export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {

		console.log('dropdown: ', this.props);
		let content = [];
		if (this.props.options) {
			content = this.props.options.map((option) => {
				return <a href="#" key={option.list_id}>{option.display_name}</a>
			});
		}

		return (<div className="dropdown">				
				<button className="dropbtn">{this.props.name}</button>
				<div className="dropdown-content">
					{content}
				</div>
			</div>)
	}
}