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
			next_published_date: "",
			previous_published_date: "",
			published_date: "",
			published_date_description: ""
		}
		this.getViewBookList = this.getViewBookList.bind(this);
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
				context.setState({
					viewBookLists: data.results.lists,
					next_published_date: "",
					previous_published_date: "2017-06-25",
					published_date: "2017-07-02",
					published_date_description: "latest"
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

	render() {
		console.log(this.state);
		return (<div className="main">
			<PageHeader />
			<PageNav />
			<PageContent 
				viewBookLists={this.state.viewBookLists}
				next_published_date={this.state.next_published_date}
				previous_published_date={this.state.previous_published_date}
				published_date={this.state.published_date}
				published_date_description={this.published_date_description} />
			<PageIndex />
			</div>)
	}
}