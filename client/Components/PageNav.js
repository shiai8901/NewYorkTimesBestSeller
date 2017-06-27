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

	render() {
				
		let fictions = [], nonfictions = [], children = [], monthly = [];
		console.log(this.props.viewBookLists);

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

		console.log("fictions: ", fictions);
		console.log("nonfictions: ", nonfictions);
		console.log("monthly: ", monthly);
		console.log("children: ", children);

		return (<div className="page_nav">
			<form className="dropdowns" >
				<Dropdown getBookListName={this.props.getBookListName} name="fiction" options={fictions} />
				<Dropdown getBookListName={this.props.getBookListName} name="nonfiction" options={nonfictions} />
				<Dropdown getBookListName={this.props.getBookListName} name="children's" options={children} />
				<Dropdown getBookListName={this.props.getBookListName} name="monthly list" options={monthly} />
			</form>
			<div className="select_dy_date">
				<div className="select_dy_date_prev arrow">
					<i className="left"></i>	
				</div>
				<div>{this.props.published_date}</div>
				<div className="select_dy_date_next arrow">
					<i className="right"></i>
				</div>
			</div>
			</div>)
	}
}
