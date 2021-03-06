import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
// import LoadingScreen from './components/pages/Loading'




import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {

  // const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //    setLoading(false)
  // }, [])

  const { dispatch } = useContext(Store);

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      setAuthToken(token);

      dispatch(setCurrentUser(decoded));

      if (decoded.exp < currentTime) {
        console.log('expired')
        dispatch(logoutUser());
        window.location.href = './login';
      }
    }
  }, [dispatch]);

 

  return (
    <>
      {/* {loading === false ? ( */}
        <div className="App container-fluid text-center">
          <Router>
            <Route exact path={['/', '/register', '/login']} component={Banner} />

            <PrivateRoute exact path={['/home', '/edit', '/saved', '/search']} component={HomeNavbar} />


            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/edit' component={Edit} />
            <PrivateRoute exact path='/saved' component={Saved} />
            <PrivateRoute exact path='/search' component={Search} />


            <Route exact path={['/', '/register', '/login']} component={Footer} />

            <PrivateRoute exact path='/home' component={HomeFooter} />
            <PrivateRoute exact path='/edit' component={EditFooter} />


          </Router>
        </div>
      {/* ) : ( */}
          {/* <LoadingScreen /> */}
        {/* )} */}

    </>
  );
};

export default App;
