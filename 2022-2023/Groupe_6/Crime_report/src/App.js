import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Report } from './pages/report';
import { Police } from './pages/police';
import { CrimeDP } from './pages/crimeDashP';
import { Victim } from './pages/victim';
import { CrimeDV } from './pages/crimDashV';
import { Statistics } from './pages/statistics';
import { AHP } from './pages/ahp';

export { Register } from './pages/register';
export { Login } from './pages/login';
export { Report } from './pages/report';
export { Police } from './pages/police';
export { CrimeDP } from './pages/crimeDashP';
export { Victim } from './pages/victim';
export { CrimeDV } from './pages/crimDashV';
export { Statistics } from './pages/statistics';
export { AHP } from './pages/ahp';

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/report" component={Report} />
          <Route path="/dashboard/police" component={Police} />
          <Route path="/dashboard/crime" component={CrimeDP} />
          <Route path="/dashboard/victim" component={Victim} />
          <Route path="/dashboard/crimes" component={CrimeDV} />
          <Route path="/dashboard/statistics" component={Statistics} />
          <Route path="/dashboard/ahp" component={AHP} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
