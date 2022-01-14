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
