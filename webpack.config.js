const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    header: "./src/sections/header.js",
    footer: "./src/sections/footer.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
