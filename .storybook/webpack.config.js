const path = require("path")

module.exports = ({config, mode}) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
            plugins: [  require.resolve('@babel/plugin-proposal-optional-chaining'),],
            presets: [["react-app", {flow: false, typescript: true}]]
        }
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
