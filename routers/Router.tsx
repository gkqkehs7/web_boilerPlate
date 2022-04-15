import React from 'react';
import loadable from '@loadable/component';

import { Switch, Route } from 'react-router-dom';

const HomePage = loadable(() => import('@pages/HomePage'));

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Router;
