/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: ['@kalimahapps/eslint-plugin-tailwind'],
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'no-undef': 'off',
        '@kalimahapps/tailwind/sort': 'warn',
        '@kalimahapps/tailwind/multiline': [
            'warn',
            {
                maxLen: 80,
                quotesOnNewLine: true,
            },
        ],
    },
};
