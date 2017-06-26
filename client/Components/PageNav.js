import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';

export default class PageNav extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			viewBookLists: [],
			previous_published_date: "",
			published_date: "",
			next_published_date: ""
		}
	}	

	componentWillMount() {
		// this.setState({
		// 	viewBookLists: this.props.viewBookLists,
		// 	previous_published_date: this.state.previous_published_date,
		// 	published_date: this.state.published_date,
		// 	next_published_date: this.props.next_published_date
		// })
	}

	render() {
				// getViewBookList={this.getViewBookList}
				
		let fictions = [], nonfictions = [], children = [], monthly = [];

		if (this.props.viewBookLists) {
			
			fictions = this.props.viewBookLists.filter((list) => {
				return list.list_name.includes('Fiction');
			});
			nonfictions = this.props.viewBookLists.filter((list) => {
				return list.list_name.includes('Nonfiction') || list.list_name.includes("Advice How-To and Miscellaneous");
			});
			monthly = this.props.viewBookLists.filter((list) => {
				return list.list_name.includes("Business") || list.list_name.includes("Science") || list.list_name.includes("Sports");
			});
			children = this.props.viewBookLists.filter((list) => {
				return !fictions.includes(list) && !nonfictions.includes(list) && !monthly.includes(list);
			});

		}

		return (<div className="page_nav">
			<div className="dropdowns">
				<Dropdown name="fiction" options={fictions} />
				<Dropdown name="nonfiction" options={nonfictions} />
				<Dropdown name="children's" options={children} />
				<Dropdown name="monthly list" options={monthly} />
			</div>
			<div className="select_dy_date">
			<div className="select_dy_date_prev">{this.props.previous_published_date}</div>
			<div>{this.props.published_date}</div>
			<div className="select_dy_date_next">{this.props.next_published_date}</div>
			</div>
			</div>)
	}
}