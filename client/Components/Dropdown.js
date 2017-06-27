import React from 'react';
import ReactDOM from 'react-dom';


export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {

		let content = [];

		if (this.props.options) {
			content = this.props.options.map((option) => {
				return <option key={option.list_id} value={option.display_name}>{option.display_name}</option>
			});
		}

		return (<div className="dropdown">
			<label htmlFor={this.props.name}>{this.props.name}</label><div className="arrow"><i className="down"></i></div>
				<select>
				<option id={this.props.name} name={this.props.name}>{this.props.name}</option>
				<option disabled>--</option>
				{content}
				</select>
			</div>)
	}
}
