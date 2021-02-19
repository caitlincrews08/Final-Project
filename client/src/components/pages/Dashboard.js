
import API from '../../utils/apiHelper';
import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
// import { BrowserRouter as Router, Route, Switch, Redirect, useRouteMatch, Link } from 'react-router-dom';
// import PrivateRoute from '../auth/PrivateRoute'



const Dashboard = props => {
  const { state } = useContext(Store);


  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/home');

    API.getUser()
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));
  }, [state, props]);



 




  return (
  <div />
  );
};


export default Dashboard;
