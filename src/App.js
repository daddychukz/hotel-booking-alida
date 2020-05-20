import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navbar';
import Hompage from './components/homepage'

const App = () => {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Navigation />
          <div className="App">
            <Hompage />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
