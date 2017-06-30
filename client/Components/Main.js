import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './PageHeader';
import PageNav from './PageNav';
import PageContent from './PageContent';
import PageIndex from './PageIndex';
import https from 'https';
import http from 'http';

const options_config = {
	// hostname: "localhost",
	// port: 8080,
	path: '/api/',
	method: 'GET'
}

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			viewBookLists: [],
			categories: [],
			next_published_date: "",
			previous_published_date: "",
			published_date: "",
			published_date_description: "",
			page_heading_encoded: "",
			page_heading: "The New York Times Best Sellers",
			page_subheading: "Authoritatively ranked lists of books sold in the United States, sorted by format and genre."
		}
		this.getDataFromServer = this.getDataFromServer.bind(this);
		this.getOverviewWithDate = this.getOverviewWithDate.bind(this);
		this.updatePageHeading = this.updatePageHeading.bind(this);
		this.updatePublishDate = this.updatePublishDate.bind(this);
		this.getBookListfromServer = this.getBookListfromServer.bind(this);
		this.getPublishDate = this.getPublishDate.bind(this);
	}	

	/**
	* function to request data from server
	*/
	getDataFromServer(options, callback) {
		const req = http.request(options, (res) => {
			let data = "";
			res.on('data', (d) => {
				data += d;
			});
			res.on('end', () => {
				data = JSON.parse(data);
				callback(data);
			});
		});
		req.on('error', (e) => {
			console.error(e);
		});
		req.end();
	}

	getOverviewWithDate(bestSellerWeek) {
		let options = Object.assign({}, options_config);

		if (bestSellerWeek) {
			options.path += "/" + bestSellerWeek;
		}

		const cb = function(data) {
				let lists = [];
				data.results.lists.forEach((list) => {					
					lists.push({
						list_name: list.list_name,
						list_name_encoded: list.list_name_encoded
					});
				});

				this.setState({
					categories: lists,
					viewBookLists: data.results.lists,
					next_published_date: data.results.next_published_date,
					previous_published_date: data.results.previous_published_date,
					published_date: data.results.published_date,
					published_date_description: data.results.published_date_description
				});
		}.bind(this);
		this.getDataFromServer(options, cb);
	}

	getPublishDate(bestSellerWeek) {
		let options = Object.assign({}, options_config);

		if (bestSellerWeek) {
			options.path += "/" + bestSellerWeek;
		}

		const cb = function(data) {
				let lists = [];

				this.setState({
					next_published_date: data.results.next_published_date,
					previous_published_date: data.results.previous_published_date,
					published_date: data.results.published_date,
					published_date_description: data.results.published_date_description
				});
		}.bind(this);
		this.getDataFromServer(options, cb);
	}

	componentWillMount() {
		if (this.state.viewBookLists = []) {
		this.getOverviewWithDate(); 
		}
	}


	/**
	* function to update publish_date
	*/
	updatePublishDate(e) {
		let week = e.target.title;
		if (week && (this.state.page_heading === "The New York Times Best Sellers")) {
			this.getOverviewWithDate(week);
		} 
		if (week && (this.state.page_heading !== "The New York Times Best Sellers")) {
			console.log(this.state.page_heading_encoded, week);
			this.getBookListfromServer(this.state.page_heading_encoded, week);
		}
	}

	getBookListfromServer(listName, week) {
		let options = Object.assign({}, options_config);
		options.path += "list/" + listName;
		if (week) {
			options.path += "/" + week;
		} else if (this.props.published_date) {
			options.path += "/" + this.state.published_date;
		}
		const cb = function(data) {
			this.setState({
					page_heading: data.results.list_name,
					viewBookLists: data.results.books,
					next_published_date: data.results.next_published_date,
					previous_published_date: data.results.previous_published_date,
					published_date: data.results.published_date,
					published_date_description: data.results.published_date_description
				});
		}.bind(this);
		this.getDataFromServer(options, cb);
	}

	updatePageHeading(e) {
		let listName;
		if (e.target.value) {
			listName = e.target.value;
		} else if (e.target.title) {
			listName = e.target.title;
		}

		this.setState({
			page_heading_encoded: listName
		});
		this.getBookListfromServer(listName, this.state.published_date);
	}

	render() {
		return (<div className="main">
			<PageHeader 
				page_heading={this.state.page_heading} 
				page_subheading={this.state.page_subheading} />
			<PageNav 
				updatePageHeading={this.updatePageHeading}
				updatePublishDate={this.updatePublishDate}
				viewBookLists={this.state.categories}
				next_published_date={this.state.next_published_date}
				previous_published_date={this.state.previous_published_date}
				published_date={this.state.published_date} />
			<PageContent 
				updatePageHeading={this.updatePageHeading}
				viewBookLists={this.state.viewBookLists}
				page_heading={this.state.page_heading} 
				next_published_date={this.state.next_published_date}
				previous_published_date={this.state.previous_published_date}
				published_date={this.state.published_date}
				published_date_description={this.published_date_description} />
			<PageIndex />
			</div>)
	}
}