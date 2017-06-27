import React from 'react';
import ReactDOM from 'react-dom';


export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {

		let content = [];
		let context = this;
		if (this.props.options) {
			content = this.props.options.map((option) => {
				return <option 
							key={option.list_id} 
							value={option.list_name_encoded} >{option.display_name}</option>
			});
		}

		return (<div className="dropdown">
			<label htmlFor={this.props.name}>{this.props.name}</label><div className="arrow"><i className="down"></i></div>
				<select onChange={context.props.getBookListName} >
				<option id={this.props.name} name={this.props.name}>{this.props.name}</option>
				<option disabled>--</option>
				{content}
				</select>
			</div>)
	}
}
