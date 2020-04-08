import React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <h1>HATS PAGE TEST</h1>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' >
          <HomePage />
        </Route>
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
