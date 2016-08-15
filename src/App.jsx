
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage.jsx';
import Profile from './Profile.jsx';
import Directory from './Directory.jsx'
import Confirm from './Confirm.jsx'
import globalStyles from "./assets/styles/global.css";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NoMatch from './NoMatch.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';


ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={LoginPage}  />
  <Route path="/directory/:id" component={Directory}/>
  <Route path="/profile/:id" component={Profile} />
  <Route path="/confirm/" component={Confirm} />
  <Route path="*" component={NoMatch} />
</Router>,
document.getElementById('root')
);
