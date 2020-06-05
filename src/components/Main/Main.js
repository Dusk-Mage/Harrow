import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Harrow from '../../pages/Harrow';
import GreaterHarrow from '../../pages/GreaterHarrow';
import Reading from '../../pages/Reading';
import Links from '../../pages/Links';
import Resources from '../../pages/Resources';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Harrow' component={Harrow}></Route>
	  <Route exact path='/Greater-harrow' component={GreaterHarrow}></Route>
	  <Route exact path='/Perform-Reading' component={Reading}></Route>
	  <Route exact path='/Links' component={Links}></Route>
	  <Route exact path='/Resources' component={Resources}></Route>
    </Switch>
  );
}

export default Main;