'use strict';

const merge = require('webpack-merge');
const rules = require('neutrino-preset-taskcluster/src/eslint').rules;

module.exports = {
  extends: [
    require.resolve('neutrino-preset-react/src/eslint')
  ],
  rules: merge(rules, {
    // Disallow trailing commas.
    'comma-dangle': ['error', 'never'],

    // Allow console during development
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',

    // Allow extra parentheses since multiline JSX being wrapped in parens is considered idiomatic
    'no-extra-parens': 'off',

    // Allow usage of ReactDOM.findDOMNode
    'react/no-find-dom-node': 'off',

    // Force JSX props with assumed boolean to be explicit,
    // e.g. <Component something={true} /> vs. <Component something />
    'react/jsx-boolean-value': ['error', 'always'],

    // Force JSX closing bracket to be placed right after last prop
    'react/jsx-closing-bracket-location': ['error', 'after-props'],

    // Disallow spaces for JSX attribute braces interior
    'react/jsx-curly-spacing': ['error', 'never'],

    // Disallow spaces around JSX attribute assignment equals
    'react/jsx-equals-spacing': ['error', 'never'],

    // Require JSX props to be on new lines when a component is multiline
    'react/jsx-first-prop-new-line': ['error', 'multiline'],

    // Ensure JSX indentation uses 2 spaces
    'react/jsx-indent': ['error', 2],

    // Ensure JSX props are indented 2 spaces from opening tag
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',

    // Prevent usage of unsafe target="_blank", ensure anchors also have rel="noreferrer noopener"
    'react/jsx-no-target-blank': 'error',

    // Ensure JSX components are PascalCase
    'react/jsx-pascal-case': 'error',

    // Require space before self-closing bracket in JSX
    'react/jsx-space-before-closing': ['error', 'always'],

    // Ensure multiline JSX is wrapped in parentheses
    'react/jsx-wrap-multilines': 'error'
  })
};
