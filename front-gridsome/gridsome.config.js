// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Lumy Foody blog",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["article", "category", "origin", "place"],
        // // Possibility to login with a Strapi user,
        // // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
  ],
  templates: {
    StrapiArticle: [
      {
        path: "/:slug",
        component: "./src/templates/Article.vue",
      },
    ],
  },
};
