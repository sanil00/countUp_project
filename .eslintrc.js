// const createConfig = require("@titicaca/eslint-config-triple/create-config")

// // module.exports = createConfig({ type: "frontend" })
// const { extends: extendConfigs, overrides } = createConfig({ type: "node" })

// module.exports = {
//     env: {
//         browser: true,
//         es2021: true,
//     },
//     extends: [...extendConfigs, "eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
//     overrides: [
//         ...overrides,
//         // 특정 파일 대상 규칙...
//     ],
//     parser: "@typescript-eslint/parser",
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true,
//         },
//         ecmaVersion: "latest",
//         sourceType: "module",
//     },
//     plugins: ["react", "@typescript-eslint"],
//     rules: {},
// }

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {},
}
