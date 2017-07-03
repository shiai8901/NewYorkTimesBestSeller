import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter, Route, Link } from 'react-router-dom'

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('app'));