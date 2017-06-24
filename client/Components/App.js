import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {
		return (<div>
			<Header />
			<Main />
			<Footer />
			</div>)
	}
}