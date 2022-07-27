import { Link } from "react-router-dom";
import keycloak from "../../Keycloak/keycloak";

const NavBar = () => {

    return (
        <>
            <nav>
                <div className="container">
                    <div className="header">
                        <Link to="/">Home</Link>
                        <Link to="/duck">Ducks</Link>
                        {keycloak.authenticated && (
                            <Link to="/profile" id="profileLink">Profile</Link>
                        )}
                    </div>
                </div>
            </nav>

        </>
    )
}
export default NavBar;