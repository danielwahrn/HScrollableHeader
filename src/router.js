import React from "react";
import { Route, Switch } from "react-router-dom";

import FirstPage from './container/FirstPage';
import SecondPage from './container/SecondPage';
import ThirdPage from './container/ThirdPage';
import FourthPage from './container/FourthPage';

export default function MainRoutes() {
  return (
    
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route  path="/first" component={FirstPage} />
          <Route  path="/second" component={SecondPage} />
          <Route  path="/third" component={ThirdPage} />
          <Route  path="/four" component={FourthPage} />
        </Switch>
      
  );
}