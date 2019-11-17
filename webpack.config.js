module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
                indentedSyntax: true
              },
            },
          },
        ],
      },
    ],
  },
};