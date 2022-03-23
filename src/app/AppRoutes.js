import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Home = lazy(() => import('./pages/Home'));
const Guidelines = lazy(() => import('./pages/Guidelines'));
const RaidingInfo = lazy(() => import('./pages/RaidingInfo'));
const Officers = lazy(() => import('./pages/Officers'));
const AdminTesting = lazy(() => import('./pages/AdminTesting'));
const Contest = lazy(() => import('./pages/Contest'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/" component={ Home } />

          <Route exact path="/guidelines" component={ Guidelines } />
          <Route exact path="/raiding-info" component={ RaidingInfo } />
          <Route exact path="/officers" component={ Officers } />
          <Route exact path="/admin-testing" component={ AdminTesting } />
          <Route exact path="/contest" component={ Contest } />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;