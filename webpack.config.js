const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (webpackEnv) {
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle[contenthash].js",
      path: path.resolve(__dirname, "./build"),
    },
    mode: "development",
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
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
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
