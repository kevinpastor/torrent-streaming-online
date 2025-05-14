// @ts-check
import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import { flatConfig as nextConfigs } from "@next/eslint-plugin-next";
import stylistic from "@stylistic/eslint-plugin";
import { flatConfigs as importConfigs } from "eslint-plugin-import";
import { config as defineConfig, configs as typescriptConfigs, parser } from "typescript-eslint";

const { configs: eslintConfigs } = eslintJs;
const { configs: stylisticConfigs } = stylistic;
const { configs: reactConfigs } = eslintReact;

const eslintConfig = defineConfig([
    eslintConfigs.recommended,
    typescriptConfigs.strictTypeChecked,
    typescriptConfigs.stylisticTypeChecked,
    {
        languageOptions: {
            parser,
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
                projectService: {
                    allowDefaultProject: ["eslint.config.mjs"]
                }
            }
        }
    },
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
    reactConfigs["recommended-type-checked"],
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
            ],
            "@typescript-eslint/array-type": [
                "error",
                {
                    default: "generic"
                }
            ],
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    checksVoidReturn: {
                        attributes: false
                    }
                }
            ]
        }
    }
]);

export default eslintConfig;
