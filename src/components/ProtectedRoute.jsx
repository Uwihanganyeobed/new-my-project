import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }
  if(!isAuthenticated){
    return <Navigate to ='/login'state={{from: location}} replace />
  }
  return children
};

export default ProtectedRoute;
