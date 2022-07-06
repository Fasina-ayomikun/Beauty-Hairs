import { useAuth0 } from "@auth0/auth0-react";

import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to='/home'></Navigate>;
  }
  return children;
}

export default PrivateRoute;
