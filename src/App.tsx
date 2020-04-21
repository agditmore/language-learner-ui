import React from 'react';
import {
  Router,
  Route as ReactRoute,
  Switch,
} from 'react-router-dom';
import './App.css';
import routes from './routingConfig';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {Object.values(routes).map(route => (
            <ReactRoute key={route.path} exact={route.exact} path={route.path}>
              <route.component />
            </ReactRoute>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
