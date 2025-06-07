import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import { Amplify } from "aws-amplify";
import 'bootstrap/dist/css/bootstrap.min.css';
import outputs from "../amplify_outputs.json";
import { Auth0ProviderWithRedirect, ProtectedDashboard, ProtectedSignup } from "./components/RouteGuards";
import LoginSignupRedirect from "./pages/LoginSignupRedirect";
import BackNavigationFix from "./components/BackNavigationFix";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0ProviderWithRedirect>
      <BrowserRouter>
      <BackNavigationFix />
        <Routes>
          <Route path="/signup" element={<ProtectedSignup />} />
          <Route path="/dashboard/*" element={<ProtectedDashboard />} />
          <Route path="/" element={<LoginSignupRedirect />} />
        </Routes>
      </BrowserRouter>
    </Auth0ProviderWithRedirect>
  </React.StrictMode>
);
