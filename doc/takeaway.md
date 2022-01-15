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
