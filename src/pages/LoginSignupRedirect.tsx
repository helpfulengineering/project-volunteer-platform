import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import PublicHeader from "../components/PublicHeader";
import { getUserData } from "../utils/mockDB"; // Updated import

export default function LoginSignupRedirect() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <div className="loading">Loading...</div>;

  // Handle authenticated users
  if (isAuthenticated) {
    const userId = user?.sub || '';
    // Check both Auth0 metadata and mockDB for signup completion
    const signupComplete = user?.user_metadata?.signupComplete || getUserData(userId);

    return signupComplete 
      ? <Navigate to="/dashboard" replace />
      : <Navigate to="/signup" replace />;
  }

  // Public landing page
  return (
    <div className="public-landing">
      <PublicHeader />
      <div className="welcome-content">
        <h1>Welcome to Our Platform</h1>
        <p>Get started by logging in or signing up</p>
      </div>
    </div>
  );
}
