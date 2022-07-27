import keycloak from "../../Keycloak/keycloak";

const LoginForm = () => {
    return (
        <>
            {/* <div className="button">
                <button onClick={loginWithKeycloak()} type='submit'>Login</button>
            </div> */}

            <div>
                <h1>Home</h1>

                <section className="buttons">
                    {!keycloak.authenticated && (
                        <button onClick={() => keycloak.login()}>Login</button>
                    )}
                    {keycloak.authenticated && (
                        <button onClick={showToken()}>Token</button>
                    )}
                    {keycloak.authenticated && (
                        <button onClick={() => keycloak.logout()}>Logout</button>
                    )}
                    
                </section>
            </div>

        </>
    )

}
export default LoginForm;

function showToken() {
    console.log(keycloak.tokenParsed);
}