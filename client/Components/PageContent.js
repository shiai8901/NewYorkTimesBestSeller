import React from 'react';
import ReactDOM from 'react-dom';
import PageContentSection from './PageContentSection';

export default class PageContent extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {
		// console.log("page_content: ", this.props);
		let sections = "Loading";
		if (this.props.viewBookLists.length > 0 ) {
			// console.log("oha", this.props);
			sections = this.props.viewBookLists.map((list) => {
				return <PageContentSection 
							list={list} 
							key={list.list_id} />
			});			
		} 

		return (<div className="page_content">
			{sections}
			</div>)
	}
}