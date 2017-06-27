import React from 'react';
import ReactDOM from 'react-dom';
import PageContentSection from './PageContentSection';

export default class PageContent extends React.Component {	

	render() {
		let sections = "Loading";

		if (this.props.page_heading && this.props.page_heading !== "The New York Times Best Sellers") {
			sections = <PageContentSection 
								page_heading={this.props.page_heading}
								list={this.props.viewBookLists}  />
		} else {
			if (this.props.viewBookLists.length > 0 ) {
				sections = this.props.viewBookLists.map((list) => (
					<PageContentSection 
								page_heading={this.props.page_heading}
								getBookListName={this.props.getBookListName}
								list={list} 
								key={list.list_id} />
				));			
			} 

		}

		return (<div className="page_content">
			{sections}
			</div>)

	}
}