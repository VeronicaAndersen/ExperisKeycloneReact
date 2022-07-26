import keycloak from "../../keycloak";

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
                        <button onClick={() => keycloak.logout()}>Logout</button>
                    )}
                </section>

                {keycloak.token && (
                    <div>
                        <h4>Token</h4>
                        <pre>{keycloak.token}</pre>
                    </div>
                )}
            </div>

        </>
    )

}
export default LoginForm;
