import React from 'react';
import ReactDOM from 'react-dom';

export default class BookMenuItem extends React.Component {

	showBuyLinkDropdown(e) {
		let dropdown = e.target.parentNode.nextSibling;

		document.querySelectorAll('.buy_link_dropdown').forEach((element) => {
			if (element === dropdown) {
				element.classList.toggle('hide');
			} else if (!element.classList.contains('hide')) {
				element.classList.add('hide');
			}
		});
	}

	render() {
		let context = this;
		let buyLinks = this.props.book.buy_links.map((link) => (<li key={link.url}><a href={link.url} >{link.name}</a></li>))
		let review = this.props.book.book_review_link ? <a href={this.props.book.book_review_link}>Read Review</a> : "";

		if (this.props.page_heading && this.props.page_heading !== "The New York Times Best Sellers" ) {
			return (<div className="book_menu_item detail_view">
			<p className="rank detail_view">{this.props.book.rank}</p>
			<article className="book detail_view">
				<div className="book_body detail_view">
					<p className="fressness detail_view">{this.props.book.weeks_on_list} weeks on the list</p>
					<p className="title">{this.props.book.title}</p>
					<p className="author">by {this.props.book.author}</p>
					<p className="description detail_view">{this.props.book.description}</p>
				</div>
				<div className="action detail_view">
					<button onClick={this.showBuyLinkDropdown}>Buy <i className="icon caret-icon"></i></button>
					{review}
				</div>
				<div className="buy_link_dropdown hide">
					<ul>
						{buyLinks}
					</ul>
				</div>
			</article>
				<div className="book_footer detail_view">
					<img className="book_image thumbnail detail_view" src={this.props.book.book_image || "https://s1.nyt.com/du/books/images/default-image.png"} ></img>
				</div>
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
			<div className="action">
				<button onClick={this.showBuyLinkDropdown}>Buy <i className="icon caret-icon"></i></button>
				{review}
			</div>
			<div className="buy_link_dropdown hide">
				<ul>
					{buyLinks}
				</ul>
			</div>
			</div>)
		

	}
}