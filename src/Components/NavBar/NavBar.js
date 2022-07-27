import { Link } from "react-router-dom";
import keycloak from "../../keycloak";

const NavBar = () => {


    return (
        <>
            <nav>
                <div className="container">
                    <div className="header">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/spotify">Spotify</Link>
                            </li>
                            {keycloak.authenticated && (
                                <li>
                                    <Link to="/profile" id="profileLink">Profile</Link>
                                </li>
                            )}
                        </ul>

                        {keycloak.authenticated && (
                            <ul>
                                <li>
                                    <button onClick={() => keycloak.logout()}>Logout</button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>

        </>
    )
}
export default NavBar;