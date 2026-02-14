import { use } from "react";
import { Authcontext } from "../../firebase/contexts/Authcontext";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({ children }) {
    const location=useLocation()
    const { currentUser } = use(Authcontext);

    if (currentUser) {
        return children;
    }
    return <Navigate state={location?.pathname} to="/sign-in"></Navigate>;
    }

export default PrivateRoute;