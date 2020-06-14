import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Harrow from '../../pages/Harrowing';
import GreaterHarrow from '../../pages/GreaterHarrowing';
import LesserHarrow from '../../pages/LesserHarrowing';
import Reading from '../../pages/Reading';
import Links from '../../pages/Links';
import Resources from '../../pages/Resources';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/Harrowing/' component={Home}></Route>
      <Route exact path='/Harrowing/Lesser-harrowing' component={LesserHarrow}></Route>
      <Route exact path='/Harrowing/Harrowing' component={Harrow}></Route>
      <Route exact path='/Harrowing/Greater-harrowing' component={GreaterHarrow}></Route>
      <Route exact path='/Harrowing/Perform-Reading' component={Reading}></Route>
      <Route exact path='/Harrowing/Links' component={Links}></Route>
      <Route exact path='/Harrowing/Resources' component={Resources}></Route>
    </Switch>
  );
}

export default Main;