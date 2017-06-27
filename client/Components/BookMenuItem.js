import React from 'react';
import ReactDOM from 'react-dom';

export default class BookMenuItem extends React.Component {

	render() {
		let context = this;
		let style = {
				height: context.props.book.book_image_height,
				width: context.props.book.book_image_width 
			}

		if (this.props.page_heading && this.props.page_heading !== "The New York Times Best Sellers" ) {
			return (<div className="book_menu_item detai_view">
			<p className="rank">{this.props.book.rank}</p>
			<article className="book">
				<img className="book_image thumbnail" src={this.props.book.book_image} ></img>
				<div className="book_body">
				<p className="fressness">{this.props.book.weeks_on_list} weeks on the list</p>
				<p className="title">{this.props.book.title}</p>
				<p className="author">by {this.props.book.author}</p>
				<p className="description">{this.props.book.description}</p>
				</div>
			</article>
			</div>)

		} 

		return (<div className="book_menu_item">
			<p className="rank">{this.props.book.rank}</p>
			<article className="book">
				<img className="book_image thumbnail" src={this.props.book.book_image} ></img>
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