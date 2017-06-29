import React from 'react';
import ReactDOM from 'react-dom';

export default class BookMenuItem extends React.Component {

				// <img className="book_image thumbnail" src={this.props.book.book_image} ></img>
	render() {
		let context = this;


		if (this.props.page_heading && this.props.page_heading !== "The New York Times Best Sellers" ) {
			return (<div className="book_menu_item detai_view">
			<p className="rank">{this.props.rank}</p>
			<article className="book">
				<img className="book_image thumbnail" src={this.props.book.book_image || "https://s1.nyt.com/du/books/images/default-image.png"} ></img>
				<div className="book_body">
				<p className="fressness">{this.props.book.weeks_on_list} weeks on the list</p>
				<p className="title">{this.props.book.title}</p>
				<p className="author">by {this.props.book.author}</p>
				<p className="description">{this.props.book.description}</p>
				</div>
			</article>
			</div>)

		} else {
			let style = {
				height: context.props.book.book_image_height,
				width: context.props.book.book_image_width 
			}
		}

		return (<div className="book_menu_item">
			<p className="rank">{this.props.book.rank}</p>
			<article className="book">
				<img className="book_image thumbnail" src={this.props.book.book_image || "https://s1.nyt.com/du/books/images/default-image.png"} ></img>
				<div className="book_body">
				<p className="fressness">{this.props.book.weeks_on_list} weeks on the list</p>
				<p className="title">{this.props.book.title}</p>
				<p className="author">by {this.props.book.author}</p>
				<p className="description">{this.props.book.description}</p>
				</div>
			</article>
			</div>)
		

	}
}