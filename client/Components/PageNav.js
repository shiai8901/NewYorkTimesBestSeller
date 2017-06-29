import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';

export default class PageNav extends React.Component {

	render() {
				
		let fictions = [], nonfictions = [], children = [], monthly = [];
		if (this.props.viewBookLists) {			
			fictions = this.props.viewBookLists.filter((list) => (list.list_name.includes('Fiction')));
			nonfictions = this.props.viewBookLists.filter((list) => (list.list_name.includes('Nonfiction') || list.list_name.includes("Advice How-To and Miscellaneous")));
			monthly = this.props.viewBookLists.filter((list) => (list.list_name.includes("Business") || list.list_name.includes("Science") || list.list_name.includes("Sports")));
			children = this.props.viewBookLists.filter((list) => (!fictions.includes(list) && !nonfictions.includes(list) && !monthly.includes(list)));
		}

		return (<div className="page_nav">
			<form className="dropdowns" >
				<Dropdown updatePageHeading={this.props.updatePageHeading} name="fiction" options={fictions} />
				<Dropdown updatePageHeading={this.props.updatePageHeading} name="nonfiction" options={nonfictions} />
				<Dropdown updatePageHeading={this.props.updatePageHeading} name="children's" options={children} />
				<Dropdown name="monthly list" options={monthly} />
			</form>
			<div className="select_dy_date" onClick={this.props.updatePublishDate}>
				<div className="select_dy_date_prev arrow" title={this.props.previous_published_date}>
					<i className="left" ></i>	
				</div>
				<div>{this.props.published_date}</div>
				<div className="select_dy_date_next arrow" title={this.props.next_published_date}>
					<i className="right" ></i>
				</div>
			</div>
			</div>)
	}
}
				// <Dropdown updatePageHeading={this.props.updatePageHeading} name="monthly list" options={monthly} />
