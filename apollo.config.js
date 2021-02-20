module.exports = {
  client: {
    service: {
      name: "jdrave-app",
      // URL to the GraphQL API
      url: "https://jdrave.hasura.app/v1/graphql",
      headers: {
        authorization: "Bearer lkjfalkfjadkfjeopknavadf"
      }
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js", "src/**/*.ts"]
  }
};
