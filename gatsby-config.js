module.exports = {
  siteMetadata: {
    title: 'Hybrid Routing Demo',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/articles/*`] },
    },
  ],
}
