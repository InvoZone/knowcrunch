import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier", "next"],
    rules: {
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error"],
      "no-unused-vars": ["error"],
      "no-console": ["warn"],
      "eqeqeq": ["error", "always"],
      "react/prop-types": "off",
      "react/jsx-key": "error",
      "react/no-direct-mutation-state": "error",
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "react/no-unused-state": "warn",
      "react/no-unknown-property": "warn",
      "react/no-array-index-key": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": "error",
      "object-shorthand": ["error", "always"],
      "prefer-destructuring": ["error", { object: true, array: false }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "warn",

    },
  }),
];

export default eslintConfig;

