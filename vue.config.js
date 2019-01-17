// Vue Config
// https://cli.vuejs.org/config/#vue-config-js

// How to Configure `prerender-spa-plugin`
// # https://github.com/chrisvfritz/prerender-spa-plugin



const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: config => {

    //if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [
            '/',
            '/about',
            // s'/contact',
          ], // '/portfolio/one', '/portfolio/two', '/portfolio/three',
          {
              // options
          }
        ),
      ]
    }
  }
}