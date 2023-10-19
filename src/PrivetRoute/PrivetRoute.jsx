import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate } from "react-router-dom";


const Privetroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default Privetroute;
