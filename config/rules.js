module.exports = {
    // stylelint default rules
    'at-rule-blacklist': ['extend'],
    'at-rule-no-vendor-prefix': true,
    'block-closing-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-property-value-blacklist': {
        '/^border/': ['none'],
    },
    indentation: 4,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-line-length': [120, { severity: 'warning' }],
    'max-nesting-depth': 3,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': ['always', { except: ['first-nested', 'after-single-line-comment'] }],
    'selector-class-pattern': '(?!(js-))^[a-z-_]+$',
    'selector-list-comma-newline-after': 'always',
    'selector-no-id': true,
    'selector-no-type': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // custom plugin rules
    'order/order': [
        'dollar-variables',
        'custom-properties',
        'declarations',
        { type: 'at-rule', hasBlock: false },
        { type: 'at-rule', hasBlock: true },
        'rules',
    ],
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^_?[a-z]+([-]?[a-z]{1})+$',
    'scale-unlimited/declaration-strict-value': [['/color/', 'fill', 'z-index'], {
        ignoreKeywords: ['currentColor', 'transparent', 'inherit', 'black', 'white'],
    }],
};
