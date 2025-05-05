import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = () => {
    loginWithRedirect({
        authorizationParams: {
          screen_hint: "signup",
        },
        appState: { returnTo: "/signup" }
      });
  };

  return <button onClick={handleSignup} className="signinup-button">Sign In/Up&nbsp;▼</button>;
};

export default SignupButton;
