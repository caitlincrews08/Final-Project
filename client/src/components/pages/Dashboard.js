
import API from '../../utils/apiHelper';
import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../auth/PrivateRoute'


import Edit from '../pages/Edit';
import Home from '../pages/Home'
import Saved from '../pages/Saved';
import Search from '../pages/Search';



const Dashboard = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  // const onLogoutClick = e => {
  //   e.preventDefault();

  //   logoutUser(props.history)(dispatch);
  // };

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/Home" component={Home} />
        <PrivateRoute exact path="/Edit" component={Edit} />
        <PrivateRoute exact path="/Saved" component={Saved} />
        <PrivateRoute exact path="/Search" component={Search} />
      </Switch>
    </Router>
  );
};


export default Dashboard;
