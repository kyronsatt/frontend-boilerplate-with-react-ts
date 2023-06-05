import React from 'react';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = true;
  if (isAuthenticated) return <>{children}</>;
  else return <></>;
};

export default PrivateRoute;
