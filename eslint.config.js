import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import sonar from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";

export default [
  {
    ignores: ["**", "!src/**", "src/__generated__/**"],
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ...js.configs.recommended,
    ...sonar.configs.recommended,
    ...unicorn.configs.recommended,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "unicorn/no-abusive-eslint-disable": "off",
      "sonarjs/no-duplicate-string": "off",
      "unicorn/filename-case": "off",
      "unicorn/prevent-abbreviations": "off",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
