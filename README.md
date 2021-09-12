# Mei's Awesome Dishes

Hundreds of Mei's amazing dishes

## Development Steps

1. Set up the front end part and build with webpack
   1. install react
      `npm install --save react react-dom react-router-dom`
   2. webpack config
      1. install
         `npm install --save-dev webpack webpack-cli`
      2. Loaders
         1. images
         2. txt
         3. css/sass - loaders
            `npm install --save-dev style-loader css-loader sass-loader sass`
         4. postcss
            `npm install --save-dev postcss-loader autoprefixer`
         5. babel
            `npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react`
      3. Plugin
         1. TerserPlugin : Minimizing
         2. MiniCssExtractPlugin : extracts CSS into separate files
            `npm install --save-dev mini-css-extract-plugin`
         3. CleanWebpackPlugin : clean build folder before generating new bundle
            `npm install --save-dev clean-webpack-plugin`
         4. HTMLWebpackPlugin
            `npm install --save-dev html-webpack-plugin`
      4. Dev server
         `npm install webpack-dev-server --save-dev`
   3. eslint config
      1. Install
         `npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks`
2. Deploy to github page
   1. install gh-page
      `npm install --save-dev gh-pages`
   2. Configure package.json
      ```json
      {
        "homepage": "https://pcsmomo.github.io/meidish/",
        "scripts": {
          "predeploy": "npm run build",
          "deploy": "gh-pages -d build"
        }
      }
      ```
   3. Deploy
      `npm run deploy`
