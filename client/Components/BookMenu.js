import React from 'react';
import ReactDOM from 'react-dom';
import BookMenuItem from './BookMenuItem';

export default class BookMenu extends React.Component {
	constructor(props) {
		super(props);
	}	

	componentDidMount() {

	}

	render() {
		let sections = "Loading";
		console.log(this.props);



		if (this.props.page_heading && this.props.page_heading !== "The New York Times Best Sellers" ) {
			console.log(this.props);

			if (this.props.books !== []) {
				sections = this.props.books.map((book) => {
					return <BookMenuItem 
								page_heading={this.props.page_heading}
								book={book.book_details[0]}
								key={book.rank} />
				})
			}

			return (<div>
			<ol className="book_menu detai_view">
			{sections}
			</ol>
			</div>)

		} else {

		if (this.props.books !== []) {
			sections = this.props.books.map((book) => {
				return <BookMenuItem 
							page_heading={this.props.page_heading}
							book={book}
							key={book.rank} />
			})
		}

		return (<div>
			<ol className="book_menu">
			{sections}
			</ol>
			</div>)
		}

	}
}