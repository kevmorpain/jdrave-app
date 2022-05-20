module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/jdrave-app/' : '/',
  pwa: {
    name: 'JDRave',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    themeColor: '#6D597A',
    msTileColor: '#6D597A',
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
};
