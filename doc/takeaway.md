# Takeaway

## webpack: browser url routing

After setting react-router-dom, when routing via browser url, it didn't find the correct path

```json
// webpack.config.js
{
  "devServer": {
    "historyApiFallback": true
  }
}
```

## webpack: process.env

```ts
// webpack.config.js
new Dotenv({
  path: "./.env", // Path to .env file (this is the default)
  safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
});
```

## materialize css

install materialize css package to use them in my typescript setup

```sh
npm install --save materialize-css
npm install --save-dev @types/materialize-css
```

```js
import M from "materialize-css";
const Calculator = () => {
  useEffect(() => {
    M.updateTextFields();
  }, []);
};
```

## source-map

When gets this message on the browser console

```sh
DevTools failed to load source map: Could not load content for webpack://meidish/node_modules/react-router-dom/index.js.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME
```

I could have two options.

1. set devtol option in webpack config filre
   - `devtool: 'inline-source-map'`
   - [webpack devtool documentation](https://webpack.js.org/configuration/devtool/)
   - But the problem is the build time gets quite longer..
2. turn off to display the warning message (means, I don't want the source-map)
   - Chrome Devtool - Settings - check 'selected context only'
   - [Stackoverflow - Error message "DevTools failed to load SourceMap: Could not load content for chrome-extension://..."](https://stackoverflow.com/questions/61339968/error-message-devtools-failed-to-load-sourcemap-could-not-load-content-for-chr)
