// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        document: true, // fixes "document is not defined"
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off", // ignore unused vars everywhere
      "no-undef": "off", // ignore undefined globals everywhere
    },
  },
];
