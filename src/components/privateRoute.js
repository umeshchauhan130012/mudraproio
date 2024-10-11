import { Navigate, useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  // const navigate = useNavigate();
  const isAuthenticated = window.sessionStorage.getItem("mdrToken");
  // const ismdr2FA = window.sessionStorage.getItem("mdr2FA");

  if (isAuthenticated ) {
    return children;
  }

  return <Navigate to="/login" />;
};
