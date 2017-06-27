import React from 'react';
import ReactDOM from 'react-dom';


export default class PageHeader extends React.Component {

	render() {
		return (<div className="page_header">
			<h1 className="page_heading">{this.props.page_heading}</h1>
			<h2 className="page_subheading">{this.props.page_subheading}</h2>
			</div>)
	}
}