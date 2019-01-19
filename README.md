# towles-io.github.io


## Tech stack
- Typescript
- [Vue CLI 3]
  - `yarn global add @vue/cli`
- [Vue](https://vuejs.org/v2/guide/)
- [Vueify](https://vuetifyjs.com/en/) - Material Design
Component Framework
  - [Components](https://vuetifyjs.com/en/components/api-explorer)
- [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) - prerender to disk
- [GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) - hosting


## VScode plugins

- Prettier - Code formatter
- vetur - vue plugin

> Insperation 

https://townshipcanada.com/developers

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Starts a server to browse details about the project
```
yarn run ui
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```


## Firebase


```js
firebase login

//add one time
firebase use --app towles-io


// deploy
firebase deploy

```

## DNS Hosting

At https://www.namecheap.com/

towles.io expires Sep 25, 2021


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Testing PreRender Content Locally

If you want to test the that site prerender works on build you can host it locally easy enough. 

```
yarn run build
npm install http-server -g
http-server c:\Code\Github\towles-io.github.io\dist
```