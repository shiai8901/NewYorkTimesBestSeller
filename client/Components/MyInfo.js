import React from 'react';
import ReactDOM from 'react-dom';

export default class MyInfo extends React.Component {	
	render() {
		return (<div className="myinfo">
			<div className="panel_header">
				<p className="panel_header_heading">Note:</p>
			</div>
			<div className="container">
			<p>This is <strong>NOT</strong> New York Times Best Seller original website!</p>
			<p>This is a web developement practice done by <a href="https://github.com/shiai8901">Ai Shi</a> using React, Node.js and Express. Project link <a href="https://github.com/shiai8901/NewYorkTimesBestSeller">https://github.com/shiai8901/NewYorkTimesBestSeller</a></p>
			</div>
			</div>)
	}
}