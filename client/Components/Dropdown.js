import React from 'react';
import ReactDOM from 'react-dom';


export default class Dropdown extends React.Component {
	render() {

		let content = [];
		let context = this;

		if (this.props.options) {
			content = this.props.options.map((option) => (<option 
							key={option.list_id} 
							value={option.list_name_encoded} >{option.list_name}</option>));
		}

		return (<div className="dropdown">
			<label htmlFor={this.props.name}>{this.props.name}</label><div className="arrow"><i className="down"></i></div>
				<select onChange={context.props.updatePageHeading} >
				<option id={this.props.name} name={this.props.name}>{this.props.name}</option>
				<option disabled>--</option>
				{content}
				</select>
			</div>)
	}
}
