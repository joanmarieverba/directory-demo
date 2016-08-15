
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage.jsx';
import Chat from './Chat.jsx';
import globalStyles from "./assets/styles/global.css";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NoMatch from './NoMatch.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';


ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={LoginPage}  />
  <Route path="/chat/:nickname" component={Chat}/>
  <Route path="*" component={NoMatch} />
</Router>,
document.getElementById('root')
);
