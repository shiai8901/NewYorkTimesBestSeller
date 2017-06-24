import React from 'react';
import ReactDOM from 'react-dom';


export default class PageHeader extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {
		return (<div className="page_header">
			<h1 className="page_heading">page heading</h1>
			<h2 className="page_subheading">page subheading</h2>
			</div>)
	}
}