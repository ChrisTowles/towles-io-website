# towles-io.github.io

Project is hosted at https://towles.io and is just a landing page for google play store app and other projects in the future.
## Tech stack

- Typescript
- Vue CLI 3
  - `yarn global add @vue/cli`
- [Vue](https://vuejs.org/v2/guide/)
- [bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [bootstrap-vue](https://bootstrap-vue.js.org/docs) Material Design
- [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) - prerender to disk for better SEO.
- Firebase Hosting
- CircleCI for CI - [towles-io-website](https://circleci.com/gh/towles-io/towles-io-website)

## VScode plugins

- Prettier - Code formatter
- vetur - vue plugin

## Project Commands

```js
yarn install
yarn run serve

 //Starts a server to browse details about the project
yarn run ui

yarn run build

yarn run test:unit
yarn run test:e2d
```

## Hosting

Google firebase hosting is used.

https://console.firebase.google.com/u/0/project/towles-io/settings/iam

__Note:__ the build process uses `prerender-spa-plugin` to generate an index at routes for faster response but you have to update the `vue.config.js` with all the routes for it to work.

```js
firebase login

//add one time
firebase use --app towles-io

// deploy
firebase deploy

```

## Continuous Deployment

Being deploy on `master` commits with [CircleCI - towles-io-website](https://circleci.com/gh/towles-io/towles-io-website).

You can see the config in `/.circleci/config.yml` and take note that there is a enviroment varible `FIREBASE_TOKEN` configured in circleci.

## DNS Hosting

At https://www.namecheap.com/

The Domain name `towles.io` expires Sep 25, 2021.


## Testing PreRender Content Locally

If you want to test the that site prerender works on build you can host it locally easy enough.

```cmd
yarn run build
npm install http-server -g
http-server c:\Code\Github\towles-io.github.io\dist
```

---------
## Notes

### Customize configuration
Vue Customize configuration See [Configuration Reference](https://cli.vuejs.org/config/).

### Insperation

https://townshipcanada.com/developers
