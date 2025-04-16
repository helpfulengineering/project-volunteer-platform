import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";

// Import the Amplify configuration
// This is a workaround to avoid the error: "Cannot find module '../amplify_outputs.json' or its corresponding type declarations."
// as we would like to avoid adding sensitive information to the repository and would like to
// avoid maintaining long-running infrastructure for this project.

(async () => {
  let outputs;
  try {
    // If you would like to generate the amplify_outputs.json file, run something like:
    // npm i @amplify/backend-cli
    // npx apx generate
    outputs = await import("../amplify_outputs.json");
  } catch (error) {
    outputs = await import("../mock_amplify_outputs.json");
  }

  Amplify.configure(outputs.default);
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Dashboard />
  </React.StrictMode>
);
