import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './Components/App';
import Project from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import './Css/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
  	<Route component={App} path="/">
  		<IndexRoute component={Project} />
  		<Route component={About} path="about"/>
  		<Route component={Contact} path="contact" />
  	</Route>

  </Router>
), document.getElementById('root'));

