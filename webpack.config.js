const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: { campus: "./src/campus.ts" },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/manifest.json" },
        { from: "./src/hot-reload.js" },
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
  },
};
