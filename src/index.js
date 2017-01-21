import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Project from './Projects';
import About from './About';
import Contact from './Contact';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
  	<Route component={App} path="/">
  		<IndexRoute component={Project} />
  		<Route component={About} path="about"/>
  		<Route component={Contact} path="contact" />
  	</Route>

  </Router>
), document.getElementById('root'));

