import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { Store } from './store';
import Home from './components/pages/Home';
import Edit from './components/pages/Edit';
import Saved from './components/pages/Saved';
import Search from './components/pages/Search';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

import Footer from './components/partials/Footer'


import './App.css';

import Banner from './components/partials/Banner'
import MyFooter from './components/partials/MyFooter'
import MyNavbar from './components/partials/MyNavbar'
import PrivateRoute from './components/auth/PrivateRoute';
import Landing from './components/pages/Landing';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      setAuthToken(token);

      dispatch(setCurrentUser(decoded));

      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        window.location.href = './login';
      }
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path={['/home', 'edit', 'saved', 'search']} component={MyNavbar} />
          <Route exact path={['/', '/register', '/login']} component={Banner}></Route>
        </Switch>


        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />


        <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/edit" component={Edit} />
        <PrivateRoute exact path="/saved" component={Saved} />
        <PrivateRoute exact path="/search" component={Search} />
        </Switch>

        <Switch>
          <Route exact path={['/home', 'edit', 'saved', 'search']} component={MyFooter} />
          <Route exact path={['/', '/register', '/login']} component={Footer}></Route>
        </Switch>

      </Router>
    </div>
  );
};

export default App;
