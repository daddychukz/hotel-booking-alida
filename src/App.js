import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navbar';
import Hompage from './components/homepage';
import HotelDetail from './components/hotel/HotelDetails';
import AllHotels from './components/hotel/';
import Booking from './components/booking';
import Contact from './components/contact';
import Login from './components/login/login';
import { LoginContext } from './context/LoginContext';
import Admin from './components/admin';
import Enquiries from './components/admin/Enquiries';
import Establishments from './components/admin/Establishments';

const App = () => {
  const { login, setLogin, handleLogin } = useContext(LoginContext);
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Navigation />
          <div className="App">
            <Route exact path="/" component={Hompage} />
            <Route exact path="/hotel/:hotelId" component={HotelDetail} />
            <Route exact path="/hotels" component={AllHotels} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" render={props => (<Login {...props} auth={{login, setLogin, handleLogin}} />)} />
            <Route exact path="/hotels/enquiry/:id" component={Booking} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/enquiries" component={Enquiries} />
            <Route exact path="/admin/establishment" component={Establishments} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
