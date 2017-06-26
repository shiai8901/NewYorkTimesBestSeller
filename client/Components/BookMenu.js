import React from 'react';
import ReactDOM from 'react-dom';
import BookMenuItem from './BookMenuItem';

export default class BookMenu extends React.Component {
	constructor(props) {
		super(props);
	}	

	componentWillMount() {

	}

	render() {
		let sections = "Loading";
		if (this.props.books !== []) {
			sections = this.props.books.map((book) => {
				return <BookMenuItem 
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