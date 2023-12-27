/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
        '@vue/eslint-config-prettier',
        '@vue/typescript/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'vue', 'tailwindcss', 'simple-import-sort'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'no-undef': 'off',
        'tailwindcss/no-custom-classname': [
            'warn',
            {
                cssFiles: ['resources/css/app.css', 'resources/css/style.scss'],
            },
        ],
        '@typescript-eslint/no-explicit-any': ['warn'],
        'no-duplicate-imports': ['error', { includeExports: true }],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],
                    // Style imports.
                    ['^.+\\.?(css|scss)$'],
                    // Packages `vue` related packages come first.
                    ['^vue', '^@?\\w'],
                    // Internal packages.
                    ['^(@)(/.*|$)'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
    },
};
