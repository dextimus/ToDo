const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/main.ts",
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"], // Pridėkite .ts ir .js plėtinius
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
