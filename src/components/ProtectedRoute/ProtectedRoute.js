import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ ...props }) => {
  const { children } = props;
  const isAuthorized = localStorage.getItem('token');

  return (
    <Route>
      {
        () => isAuthorized ? (
          children
        ) : (
          <Redirect to='/' />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
