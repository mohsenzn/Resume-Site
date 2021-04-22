import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './views/Home';

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
    
      <Switch>
          <Route path="/" component={Home}/>
      </Switch>
    </>
  );
}

export default App;
