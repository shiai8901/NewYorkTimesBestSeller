import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './PageHeader';
import PageNav from './PageNav';
import PageContent from './PageContent';
import PageIndex from './PageIndex';


export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {
		return (<div className="main">
			<PageHeader />
			<PageNav />
			<PageContent />
			<PageIndex />
			</div>)
	}
}