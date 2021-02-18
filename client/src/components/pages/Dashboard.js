
import API from '../../utils/apiHelper';
import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from '../auth/PrivateRoute'



import Edit from '../pages/Edit';
import Home from '../pages/Home'
import Saved from '../pages/Saved';
import Search from '../pages/Search';




const Dashboard = props => {
  const { state } = useContext(Store);


  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));
  }, [state, props]);


  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Redirect from="/dashboard" to="/home" />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
};


export default Dashboard;
