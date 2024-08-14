const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { dependencies } = require("./package.json");
const { remotes, exposes } = require("./federation.settings.json");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const {
  NativeFederationTypeScriptHost,
  NativeFederationTypeScriptRemote,
} = require("@module-federation/native-federation-typescript/webpack");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isDevelopment = process.env.NODE_ENV !== "production";

const federationConfig = {
  name: "ui",
  filename: "remoteEntry.js",
  exposes: exposes,
  remotes: remotes,
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    zustand: {
      singleton: true,
      requiredVersion: dependencies["zustand"],
    },
    "@tanstack/react-query": {
      singleton: true,
      requiredVersion: dependencies["@tanstack/react-query"],
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
  entry: "./src/index",
  mode: isDevelopment ? "development" : "production",
  devtool: "source-map",
  optimization: {
    minimize: false,
    // minimize: true,
    // splitChunks: {
    //   chunks: "async",
    // },
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, "dist"),
    port: 3001,
    liveReload: false,
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
        test: /.css?$/,
        exclude: [],
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  plugins: [
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/],
    }),
    NativeFederationTypeScriptHost({
      moduleFederationConfig: federationConfig,
    }),
    NativeFederationTypeScriptRemote({
      moduleFederationConfig: federationConfig,
    }),
    new ModuleFederationPlugin(federationConfig),
  ],
};
