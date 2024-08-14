const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const { dependencies } = require("./package.json");
const { exposes, remotes } = require("./federation.settings.json");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const {
  NativeFederationTypeScriptHost,
} = require("@module-federation/native-federation-typescript/webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

const federationConfig = {
  name: "host",
  remotes: remotes,
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
    },
  },
};

module.exports = {
  entry: "./index.ts",
  mode: isDevelopment ? "development" : "production",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, "dist"),
    port: 3000,
    open: true,
    historyApiFallback: true,
    // historyApiFallback: {
    //   index: "index.html",
    // },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      // Use esbuild to compile JavaScript & TypeScript
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          // JavaScript version to compile to
          target: "es2015",
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  plugins: [
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new LiveReloadPlugin({
      port: 35729,
    }),
    NativeFederationTypeScriptHost({
      moduleFederationConfig: federationConfig,
    }),
    new ModuleFederationPlugin(federationConfig),
  ],
};
