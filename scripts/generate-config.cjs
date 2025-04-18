const fs = require("fs");
const path = require("path");

// Path to amplify_outputs.json
const amplifyOutputsPath = path.resolve(__dirname, "../amplify_outputs.json");

// Check if amplify_outputs.json exists
if (!fs.existsSync(amplifyOutputsPath)) {
  console.log("amplify_outputs.json not found. Generating default configuration...");

  // Default configuration
  const defaultConfig = {
    data: {
      url: "https://example.com/graphql",
      aws_region: "us-east-1",
      default_authorization_type: "AMAZON_COGNITO_USER_POOLS",
      authorization_types: ["AMAZON_COGNITO_USER_POOLS", "AWS_IAM"],
    },
  };

  // Write the default configuration to amplify_outputs.json
  fs.writeFileSync(amplifyOutputsPath, JSON.stringify(defaultConfig, null, 2));
  console.log("Default amplify_outputs.json has been generated.");
} else {
  console.log("amplify_outputs.json already exists. Skipping generation.");
}