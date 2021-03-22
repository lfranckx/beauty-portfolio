import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/App.scss';

import Footer from './components/Footer';

export default function App() {
  return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          {/* <Navbar /> */}
            <Switch>
              {/* <Route exact path="/" render={() => <Redirect to={'/home'} />} />
              <Route path='/home' exact component={Home} /> */}
            </Switch>
        </Router>
        <Footer />
      </>
  );
}