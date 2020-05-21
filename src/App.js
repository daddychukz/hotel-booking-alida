import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navbar';
import Hompage from './components/homepage';
import HotelDetail from './components/hotel/HotelDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Navigation />
          <div className="App">
            <Route exact path="/" component={Hompage} />
            <Route exact path="/hotel/:hotelId" component={HotelDetail} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
