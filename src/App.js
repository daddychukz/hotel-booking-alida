import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuestNavigation from './components/navigation/GuestNav';
import AdminNavigation from './components/navigation/AdminNav';
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
import Messages from './components/admin/Messages';
import AuthContext from './context/AuthContext';

const App = () => {
  const { isAuthenticated } = JSON.parse(localStorage.getItem('login')) || false;
  const { login, setLogin, handleLogin } = useContext(LoginContext);
  return (
    <Router>
      <Switch>
        <React.Fragment>
          {
            isAuthenticated ?
            <AdminNavigation /> :
            <GuestNavigation />
          }
          <div className="container">
            <Route exact path="/" component={Hompage} />
            <Route exact path="/hotel/:hotelId" component={HotelDetail} />
            <Route exact path="/hotels" component={AllHotels} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" render={props => (<Login {...props} auth={{login, setLogin, handleLogin}} />)} />
            <Route exact path="/hotels/enquiry/:id" component={Booking} />
            <Route exact path="/admin" component={AuthContext(Admin)} />
            <Route exact path="/admin/enquiries" component={AuthContext(Enquiries)} />
            <Route exact path="/admin/establishment" component={AuthContext(Establishments)} />
            <Route exact path="/admin/messages" component={AuthContext(Messages)} />
          </div>
          <Footer/>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

const Footer = () => {
  return (
    <footer>
      <ul className="footer-options">
        <li className="footer-link"><a href="google.com" className="footer-linktext">Legal</a></li>
        <li className="footer-link"><a href="google.com" className="footer-linktext">Contact Us</a></li>
      </ul>
      <span>© 2019 Developed by Pat. All Rights Reserved.</span>
	  </footer>
  )
}

export default App;
