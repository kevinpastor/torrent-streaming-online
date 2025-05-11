// @ts-check
import eslintJs from "@eslint/js";
import { flatConfig as nextConfigs } from "@next/eslint-plugin-next";
import stylistic from "@stylistic/eslint-plugin";
import { flatConfigs as importConfigs } from "eslint-plugin-import";
import { config as defineConfig, configs as typescriptConfigs } from "typescript-eslint";

const { configs: eslintConfigs } = eslintJs;
const { configs: stylisticConfigs } = stylistic;

const eslintConfig = defineConfig([
    eslintConfigs.recommended,
    typescriptConfigs.strict,
    stylisticConfigs.customize({
        indent: 4,
        quotes: "double",
        semi: true,
        commaDangle: "never"
    }),
    nextConfigs.recommended,
    nextConfigs.coreWebVitals,
    {
        settings: {
            "import/resolver": {
                typescript: {}
            }
        }
    },
    importConfigs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        extends: [importConfigs.typescript]
    },
    {
        rules: {
            "@stylistic/indent": "off",
            "@stylistic/jsx-one-expression-per-line": [
                "error",
                {
                    allow: "non-jsx"
                }
            ],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    fixStyle: "inline-type-imports"
                }
            ],
            "import/order": [
                "error",
                {
                    "groups": [
                        [
                            "builtin",
                            "external"
                        ],
                        "internal",
                        [
                            "parent",
                            "sibling",
                            "index"
                        ]
                    ],
                    "newlines-between": "always",
                    "alphabetize": {
                        order: "asc",
                        orderImportKind: "asc",
                        caseInsensitive: true
                    },
                    "named": true
                }
            ]
        }
    }
]);

export default eslintConfig;
