import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser, // Ensure TypeScript files are parsed correctly
      sourceType: "module",
      globals: globals.node, // Fix: Apply Node.js globals properly
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-undef": "off", // Prevents false errors for Node.js globals like console
      "@typescript-eslint/no-non-null-assertion": "warn",
    },
  },
];
