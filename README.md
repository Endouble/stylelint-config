# stylelint-config
> Endouble's CSS Stylelint configuration

[![npm](https://img.shields.io/npm/v/@endouble.com/stylelint-config-endouble.svg)](https://npmjs.com/package/@endouble.com/stylelint-config-endouble)

## Install
Make sure you have Node (>=6) installed

```bash
npm install stylelint @endouble.com/stylelint-config-endouble --save-dev
# or
yarn add --dev stylelint @endouble.com/stylelint-config-endouble
```

## Using
Create a `.stylelint.json` file at the root of your project and add the following configuration:

```json
{
    "extends": "@endouble.com/stylelint-config-endouble"
}
```

Add to `package.json` a script to lint your desired files:

```json
{
    "scripts": {
        "lint": "stylelint css/*.scss"
    }
}
```

For more information, please follow the [official guide](http://stylelint.io/#getting-started).

## Rules
Check the [rules folder](./rules) for examples of this configuration rules' applied.

For more information about how the rules work and more examples, please refer to the official [stylelint docs](http://stylelint.io/user-guide/rules/). Don't forget to check the [plugins docs](http://stylelint.io/user-guide/plugins/) too.

If by any reason you need to turn of stylelint, you should follow [this guide](http://stylelint.io/user-guide/configuration/#turning-rules-off-from-within-your-css).

## Tests
```bash
npm test
# or
yarn test
```

## Maintainers
[Renan Couto](https://github.com/renancouto)

## License
MIT
