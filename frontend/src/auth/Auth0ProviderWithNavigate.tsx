/**
 * This component sets up the Auth0 provider with config values retrieved from environment variables
 */
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
    children: React.ReactNode; // prop of any React node type
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {

    // extract configuration values from environment variables in .env
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    /**
     * @throws error if any of necessary env vars are missing
     */
    if (!domain || !clientId || !redirectUri) {
        throw new Error("unable to initialize auth");
    }

    /**
     * @todo
     * @param appState - the current url the user is on before sending them to login page
     * @param user  - user's Auth0 ID (email, name, etc.)
     */
    function onRedirectCallback(appState?: AppState, user?: User): void {
        console.log("USER", user);
    }

    // finally, return Auth0Provider component with retrieved env vars assigned to its props
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            // Passes the redirect URI to Auth0 for validation, ensuring the user is redirected to a registered, trusted URL after authentication.
            // NOTE: this prop has parameters, which we are "initialzing"
            authorizationParams={{
                redirect_uri: redirectUri,
            }}

            // passes in callback function
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );

}

export default Auth0ProviderWithNavigate;