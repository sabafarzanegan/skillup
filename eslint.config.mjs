import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: [
      "simple-import-sort",
      "unicorn",
      "node",
      "@typescript-eslint",
      "@next/next",
      "security",
      "promise",
      "import",
      "jsdoc",
    ],
    rules: {
      // Style
      semi: ["error"],
      quotes: ["error", "double"],
      "no-console": ["warn"],
      "no-var": ["error"],
      "no-else-return": ["error"],

      // TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": ["warn"],

      // Next.js
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",

      // Node
      "node/prefer-global/process": ["off"],
    },
  }),
];

export default eslintConfig;
