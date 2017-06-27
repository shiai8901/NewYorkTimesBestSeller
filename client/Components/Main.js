import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './PageHeader';
import PageNav from './PageNav';
import PageContent from './PageContent';
import PageIndex from './PageIndex';
import https from 'https';


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
		this.getViewBookList = this.getViewBookList.bind(this);
		this.getBookListName = this.getBookListName.bind(this);
	}	

	getViewBookList(listName, bestSellerWeek, api_key) {
		const context = this;
		const options = {
			hostname: "api.nytimes.com",
			path: '/svc/books/v3/lists/overview.json?api-key=6b63ef908c9045a9ac3def3734d36e69',
			method: 'GET'
		};

		const req = https.request(options, (res) => {
			var data = "";
			res.on('data', (d) => {
				data += d;
			});
			res.on('end', () => {
				data = JSON.parse(data);
				console.log(data);
				let lists = [];
				data.results.lists.forEach((list) => {					
					lists.push({
						list_name: list.list_name,
						list_name_encoded: list.list_name_encoded
					});
				});

				context.setState({
					categories: lists,
					viewBookLists: data.results.lists,
					next_published_date: data.results.next_published_date,
					previous_published_date: data.results.previous_published_date,
					published_date: data.results.published_date,
					published_date_description: data.results.published_date_description
				})
			});
		});

		req.on('error', (e) => {
			console.error(e);
		});
		req.end();
	}

	componentWillMount() {
		this.getViewBookList();
	}

	getBookListName(e) {
		let listName;
		// console.log(e.target);
		if (e.target.value) {
			// console.log(e.target.value);
			listName = e.target.value;
		} else if (e.target.title) {
			// console.log(e.target.title);
			listName = e.target.title;
		}
		const context = this;
		const options = {
			hostname: "api.nytimes.com",
			path: '/svc/books/v3/lists.json?api-key=6b63ef908c9045a9ac3def3734d36e69&list='+listName,
			method: 'GET'
		};

		const req = https.request(options, (res) => {
			var data = "";
			res.on('data', (d) => {
				data += d;
			});
			res.on('end', () => {
				data = JSON.parse(data);
				console.log(data);
				context.setState({
					page_heading: data.results[0].list_name,
					viewBookLists: data.results
				})
			});
		});

		req.on('error', (e) => {
			console.error(e);
		});
		req.end();
	}

	render() {
		return (<div className="main">
			<PageHeader 
				page_heading={this.state.page_heading} 
				page_subheading={this.state.page_subheading} />
			<PageNav 
				getBookListName={this.getBookListName}
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