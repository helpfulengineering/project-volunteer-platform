import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignupPage from "../pages/SignupPage";
import { getUserData } from '../utils/mockDB';

// Protects the dashboard route: only accessible if authenticated AND signup is complete
export function ProtectedDashboard() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const location = useLocation();

  if (isLoading) return null;

  // If not authenticated or no user ID, redirect to home
  if (!isAuthenticated || !user?.sub) {
    return <Navigate to="/" replace />;
  }

  // Check if signup is complete using mockDB. Will need to hook up to our preferred DB for production
  const userData = getUserData(user.sub);

  if (!userData) {
    // If signup not complete, redirect to /signup
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return <Dashboard />;
}

// Protects the signup route: only accessible if authenticated and signup is NOT complete
export function ProtectedSignup() {
  const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Show Auth0 errors if present in the URL
  const auth0Error = searchParams.get("error");
  const auth0ErrorDescription = searchParams.get("error_description");
  if (auth0Error) {
    return (
      <div>
        <h2>Authentication Error</h2>
        <p>{auth0Error}: {auth0ErrorDescription}</p>
      </div>
    );
  }

  if (isLoading) return null;

  // If not authenticated, trigger Auth0 login and redirect back to /signup after login
  if (!isAuthenticated) {
    loginWithRedirect({ appState: { returnTo: "/signup" } });
    return null;
  }

  // If signup is already complete, redirect to dashboard
  if (user?.sub && getUserData(user.sub)) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return <SignupPage />;
}

// Auth0Provider wrapper
interface Auth0ProviderWithRedirectProps {
  children: React.ReactNode;
}

export function Auth0ProviderWithRedirect({ children }: Auth0ProviderWithRedirectProps) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = `${window.location.origin}/`;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {children}
    </Auth0Provider>
  );
}
