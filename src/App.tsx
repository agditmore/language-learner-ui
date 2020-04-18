import React from 'react';
import {
  BrowserRouter as Router,
  Route as ReactRoute,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Route } from './types';
import './App.css';
import Login from './login/Login';

function App() {
  const routes: Route<'login'> = {
    login: {
      path: '/login',
      component: Login,
      exact: true,
    }
  }
  return (
    <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                {Object.values(routes).map(route => (
                  <ReactRoute
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                  >
                    <route.component />
                  </ReactRoute>
                ))}
                <ReactRoute>
                  <Redirect to={routes.login.path} />
                </ReactRoute>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
