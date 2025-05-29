import { useState, FormEvent, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { saveUserData, getUserData } from "../utils/mockDB";
import PublicHeader from "../components/PublicHeader";
import SignupForm from "../components/SignupForm";
import "./styles/SignupPage.css";
import { FormData } from "../types/formTypes";

const SignupPage: React.FC = () => {
  const { user, getAccessTokenSilently, getAccessTokenWithPopup, isLoading } =
    useAuth0();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const stateParam = searchParams.get("state");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    timezone: "",
    profession: "",
    yearsOfExperience: "",
    languages: [],
    skills: [],
  });
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading && user?.sub) {
      // Check mockDB for existing signup
      const existingData = getUserData(user.sub);
      if (existingData) {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [user, isLoading, navigate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let token: string | undefined;
      const tokenOptions = {
        authorizationParams: {
          // Eventually may need to include audience setting for 3rd party API registration and JWT issuance but may be able to bypass auth0 consent popup with settings in auth0 dashboard
          //   audience: `https://${import.meta.env.VITE_AUTH0_AUDIENCE}`,
          scope: "update:current_user_metadata",
        },
      };

      try {
        token = await getAccessTokenSilently(tokenOptions);
      } catch (silentError) {
        token = await getAccessTokenWithPopup(tokenOptions);
      }

      if (!token) {
        throw new Error("Failed to acquire access token");
      }

      await fetch(
        `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/users/${user?.sub}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_metadata: {
              ...formData,
              skills: formData.skills.map((s) => s.value),
              signupComplete: true,
            },
          }),
        }
      );

      // Save to mockDB
      if (user?.sub) {
        saveUserData(user.sub, {
          ...formData,
          languages: formData.languages.map((s) => s.value),
          skills: formData.skills.map((s) => s.value),
        });
      }

      if (stateParam) {
        window.location.href = `https://${import.meta.env.VITE_AUTH0_DOMAIN}/continue?state=${stateParam}`;
      } else {
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      setSubmitting(false);
      console.error("Error updating user data:", error);
      alert("There was an error completing your signup. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <PublicHeader />
      <SignupForm
        formData={formData}
        setFormData={setFormData}
        submitting={submitting}
        onSubmit={handleSubmit}
        userName={user?.name?.split(" ")[0]}
      />
    </div>
  );
};

export default SignupPage;
