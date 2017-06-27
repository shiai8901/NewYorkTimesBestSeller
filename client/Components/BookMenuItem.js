import React from 'react';
import ReactDOM from 'react-dom';

export default class BookMenuItem extends React.Component {
	constructor(props) {
		super(props);
	}	

	componentWillMount() {
	// 	this.setState( {
	// 		age_group: this.props.book.age_group,
	// 		amazon_product_url: this.props.book.amazon_product_url,
	// 		article_chapter_link: this.props.book.article_chapter_link,
	// 		author: this.props.book.author,
	// 		book_image: this.props.book.book_image,
	// 		book_image_height: this.props.book.book_image_height,
	// 		book_image_width: this.props.book.book_image_width,
	// 		book_review_link: this.props.book.book_review_link,
	// 		buy_links: this.props.book.buy_links,
	// 		contributor: this.props.book.contributor,
	// 		contributor_note: this.props.book.contributor_note,
	// 		created_date: this.props.book.created_date,
	// 		description: this.props.book.description,
	// 		first_chapter_link: this.props.book.first_chapter_link,
	// 		price: this.props.book.price,
	// 		primary_isbn10: this.props.book.primary_isbn10,
	// 		primary_isbn13: this.props.book.primary_isbn13,
	// 		publisher: this.props.book.publisher,
	// 		rank: this.props.book.rank,
	// 		rank_last_week: this.props.book.rank_last_week,
	// 		sunday_review_link: this.props.book.sunday_review_link,
	// 		title: this.props.book.title,
	// 		updated_date: this.props.book.updated_date,
	// 		weeks_on_list: this.props.book.weeks_on_list
	// 	})
	}
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

		} else {

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
}