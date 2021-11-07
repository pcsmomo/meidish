const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (webpackEnv) {
  const isDevMode = webpackEnv.WEBPACK_SERVE ? true : false;

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle[contenthash].js",
      path: path.resolve(__dirname, "./build"),
    },
    mode: isDevMode ? "development" : "production",
    devServer: {
      compress: false,
      hot: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg)$/,
          type: "asset/resource",
        },
        {
          test: /\.txt/,
          type: "asset/resource",
        },
        {
          test: /\.css$/,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
          ],
        },
        {
          test: /\.scss$/,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles[contenthash].css",
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          "**/*",
          path.join(process.cwd(), "build/**/*"),
        ],
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
    ],
  };
};
