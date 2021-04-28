const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `We're The Buzz!`,
    siteUrl: `https://werethebuzz.com`,
    description: `New Wave from Groningen`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
  ],
}
