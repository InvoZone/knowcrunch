import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.config({
  extends: ["next/core-web-vitals", "next", "prettier"],
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
    "react/no-array-index-key": "warn"
  }

})

];


export default eslintConfig;