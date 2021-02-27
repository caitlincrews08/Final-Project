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


import Footer from './components/partials/Footer'


import './App.css';

import Banner from './components/partials/Banner'
import EditFooter from './components/partials/EditFooter'
import HomeFooter from './components/partials/HomeFooter'
import HomeNavbar from './components/partials/HomeNavbar'
import PrivateRoute from './components/auth/PrivateRoute';
import SavedFooter from './components/partials/SavedFooter'
import SearchFooter from './components/partials/SearchFooter'




import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {


  const { dispatch } = useContext(Store);
  document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      dispatch(logoutUser());
      window.location.href = './login';
      console.log("esc");
    }
  });

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
    <div className="App container-fluid text-center">
      <Router>
        <Switch>
          <PrivateRoute exact path={['/home', '/edit', '/saved', '/search']} component={HomeNavbar} />
          <Route exact path={['/', '/register', '/login']} component={Banner} />
        </Switch>

        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute exact path='/edit' component={Edit} />
          <PrivateRoute exact path='/saved' component={Saved} />
          <PrivateRoute exact path='/search' component={Search} />
        </Switch>

        <Switch>
          <PrivateRoute exact path='/home' component={HomeFooter} />
          <PrivateRoute exact path='/edit' component={EditFooter} />
          <PrivateRoute exact path='/saved' component={SavedFooter} />
          <PrivateRoute exact path='/search' component={SearchFooter} />
          <Route exact path={['/', '/register', '/login']} component={Footer} />
        </Switch>

      </Router>
    </div>
  );
};

// $(".module, h1").addClass("old-school");

// $("#add-sidebar-module").on("click", function() {
//   $("<div />", {
//     class: "module",
//     text: "I'm new here."
//   }).prependTo("#sidebar");
// });

// $("#add-article").on("click", function() {
//   $("<div />", {
//     class: "module",
//     html: "<h1>Title</h1><p>text text text.</p>"
//   }).prependTo("#main");
// });

export default App;
