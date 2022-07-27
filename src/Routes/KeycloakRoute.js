import { Navigate } from "react-router-dom";
import keycloak from "../Keycloak/keycloak";

function KeycloakRoute({ children, role, redirectTo = "/" }) {

    if (!keycloak.authenticated) {
        return <Navigate replace to={redirectTo} />;
    }
    if (keycloak.hasRealmRole("ADMIN")) {
        return(
            <>
            <h3>Hello captain admin!</h3>
            {children}
            </>
        )
    }
    if (keycloak.hasRealmRole(role)) {
        return <>{children}</>;
    }

    return <Navigate replace to={redirectTo} />;
}

export default KeycloakRoute;
