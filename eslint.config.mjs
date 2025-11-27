import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  {
    rules: {
      // React rules
      "react/no-children-prop": "off",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-unused-state": "warn",
      "react/self-closing-comp": ["warn", { component: true, html: true }],

      // TypeScript rules - ERRORS (breaks build)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/prefer-const": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",

      // TypeScript rules - WARNINGS (style/quality)
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",

      // General JavaScript rules - ERRORS
      "no-unused-vars": "off", // Use TypeScript version instead
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-duplicate-imports": "error",
      "no-unreachable": "error",
      "no-unused-labels": "error",

      // General JavaScript rules - WARNINGS
      "no-console": "warn",
      "no-alert": "warn",
      "no-useless-return": "warn",
      "no-empty": "warn",
      "no-lonely-if": "warn",
      "prefer-template": "warn",
      "object-shorthand": "warn",
      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "warn",

      // Function syntax preference - WARNINGS
      "prefer-function-declaration-over-arrow-function": "off", // This rule doesn't exist
      "func-style": ["warn", "declaration", { allowArrowFunctions: false }],

      // Code quality rules - WARNINGS
      eqeqeq: ["warn", "always"],
      curly: ["warn", "all"],
      "dot-notation": "warn",
      "no-else-return": "warn",
      "no-useless-concat": "warn",
      "no-useless-escape": "warn",

      // Code formatting - WARNINGS
      "no-trailing-spaces": "warn",
      "no-multiple-empty-lines": ["warn", { max: 2, maxEOF: 1 }],
      "comma-dangle": ["warn", "es5"],
      semi: ["warn", "always"],
      quotes: ["warn", "double", { avoidEscape: true }],
    },
  },
];

export default eslintConfig;
