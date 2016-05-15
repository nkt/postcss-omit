# postcss-omit

PostCSS plugin for removing specified props

## Installation

```
npm install --save-dev postcss-omit
```

## Usage

```js
postcss([
  // disable all animations in your css
  require('postcss-omit')({ prefixes: true, rules: ['animation', 'transition'] })
])
```

## License
MIT
