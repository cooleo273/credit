import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../guard/AuthContext"; // Adjust the path to where your AuthContext is located

export const AuthGuard = (props: PropsWithChildren) => {
  const { children } = props;
  const location = useLocation();
  const { token } = useAuth(); // Access the token from the AuthContext

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
