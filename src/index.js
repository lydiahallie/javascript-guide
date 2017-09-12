import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import showMethod from './components/showMethod';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/methods/:id" component={showMethod} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
