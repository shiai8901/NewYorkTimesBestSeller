import React from 'react';
import ReactDOM from 'react-dom';
import BookMenu from './BookMenu';

export default class PageContentSection extends React.Component {

	render() {		

	if (this.props.page_heading && this.props.page_heading !== "The New York Times Best Sellers") {

		return (<div className="page_content_section">
			<BookMenu className="book_menu detail_view" 
				books={this.props.list}
				page_heading={this.props.page_heading} />
			</div>)

	} 

		return (<div className="page_content_section">
			<div className="page_content_section_listName" onClick={this.props.getBookListName}>
				<div className="heading" title={this.props.list.list_name_encoded}>{this.props.list.list_name}</div>
				<div className="arrow"><i className="right"></i></div>
			</div>
			<BookMenu className="book_menu" 
				books={this.props.list.books} />
			</div>)

	}
}