// Vue Config
// https://cli.vuejs.org/config/#vue-config-js

// How to Configure `prerender-spa-plugin`
// # https://github.com/chrisvfritz/prerender-spa-plugin

const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const OUTPUT_DIR = path.resolve(__dirname, 'dist') // ${__dirname}/docs

module.exports = {
  outputDir: OUTPUT_DIR,


   // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath:'/',

  configureWebpack: config => {
    

    if (process.env.NODE_ENV !== 'production') return

    return {


      plugins: [
        new PrerenderSPAPlugin( {
          // Absolute path to compiled SPA
          staticDir: OUTPUT_DIR,

          // List of routes to prerender
          routes: [  //todo: get route from vue routes.ts
            '/',
            '/about',
            '/right-angled-triangle-solver',
            '/right-angled-triangle-solver/privacy-policy',
            '/right-angled-triangle-solver/terms-and-conditions',
            
          ], // '/portfolio/one', '/portfolio/two', '/portfolio/three',
          outputDir: OUTPUT_DIR,

        }
        ),
      ]
    }
  }
}
