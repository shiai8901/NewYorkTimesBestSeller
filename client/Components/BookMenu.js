import React from 'react';
import ReactDOM from 'react-dom';
import BookMenuItem from './BookMenuItem';

export default class BookMenu extends React.Component {

	render() {
		let sections = "Loading";

		if (this.props.page_heading && this.props.page_heading !== "The New York Times Best Sellers" ) {
			if (this.props.books) {

				sections = this.props.books.map((book) =>  (<BookMenuItem 
								page_heading={this.props.page_heading}
								page_heading_encoded={this.props.page_heading_encoded}
								weeks_on_list={book.weeks_on_list}
								author={book.book_details[0].author}
								title={book.book_details[0].title}
								description={book.book_details[0].description}
								key={book.rank} />));
			}

			return (<div>
			<ol className="book_menu detai_view">
			{sections}
			</ol>
			</div>)

		} 

		if (this.props.books) {
			console.log('BookMenu', this.props);
			sections = this.props.books.map((book) => (<BookMenuItem 
							page_heading={this.props.page_heading}
							page_heading_encoded={this.props.page_heading_encoded}
							book={book}
							key={book.rank} />));
		}

		return (<div>
			<ol className="book_menu">
			{sections}
			</ol>
			</div>)
		

	}
}