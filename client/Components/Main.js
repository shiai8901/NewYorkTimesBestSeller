import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './PageHeader';
import PageNav from './PageNav';
import PageContent from './PageContent';
import PageIndex from './PageIndex';
import https from 'https';
import http from 'http';

const options_config = {
	hostname: "localhost",
	port: 8080,
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
			page_heading: "The New York Times Best Sellers",
			page_subheading: "Authoritatively ranked lists of books sold in the United States, sorted by format and genre."
		}
		this.getDataFromServer = this.getDataFromServer.bind(this);
		this.getViewBookList = this.getViewBookList.bind(this);
		this.getBookListName = this.getBookListName.bind(this);
		this.getDataFromAPI = this.getDataFromAPI.bind(this);
		this.getBestsellerWeek = this.getBestsellerWeek.bind(this);
	}	


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

	getDataFromAPI(options, api_key, callback) {
		const req = https.request(options, (res) => {
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

	getViewBookList(bestSellerWeek) {
		let options = Object.assign({}, options_config);

		if (bestSellerWeek) {
			options.path += "date/" + bestSellerWeek;
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

	componentWillMount() {
		this.getViewBookList(); 
	}

	getBestsellerWeek(e) {
		let week = e.target.title;
		if (week) {
			this.getViewBookList(week);
		}
	}

	getBookListName(e) {
		let listName;
		if (e.target.value) {
			listName = e.target.value;
		} else if (e.target.title) {
			listName = e.target.title;
		}

		let options = Object.assign({}, options_config);
		options.path += "list/" + listName;

		const cb = function(data) {
			this.setState({
					page_heading: data.results[0].list_name,
					viewBookLists: data.results
				});
		}.bind(this);
		this.getDataFromServer(options, cb);
	}

	render() {
		return (<div className="main">
			<PageHeader 
				page_heading={this.state.page_heading} 
				page_subheading={this.state.page_subheading} />
			<PageNav 
				getBookListName={this.getBookListName}
				getBestsellerWeek={this.getBestsellerWeek}
				viewBookLists={this.state.categories}
				next_published_date={this.state.next_published_date}
				previous_published_date={this.state.previous_published_date}
				published_date={this.state.published_date} />
			<PageContent 
				getBookListName={this.getBookListName}
				page_heading={this.state.page_heading} 
				viewBookLists={this.state.viewBookLists}
				next_published_date={this.state.next_published_date}
				previous_published_date={this.state.previous_published_date}
				published_date={this.state.published_date}
				published_date_description={this.published_date_description} />
			<PageIndex />
			</div>)
	}
}