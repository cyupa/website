import { CheckerPlugin, TsConfigPathsPlugin } from "awesome-typescript-loader";

export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: "awesome-typescript-loader"
    },
    {
      test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
      loader: "file-loader"
    }
  ]
};

export const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  plugins: [new TsConfigPathsPlugin({ configFileName: "tsconfig.json" })]
};

export const plugins = [new CheckerPlugin()];
