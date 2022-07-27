import keycloak from "../../Keycloak/keycloak"

const Spotify = () => {
    return (
        <>
            {
                keycloak.tokenParsed && 
                <div>
                    <p>Welcome {keycloak.tokenParsed.name}!</p>
                </div>
            }
        </>
        )
}
export default Spotify