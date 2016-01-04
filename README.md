## angulartics-coremetrics

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url]

IBM Digital Analytics (formerly Coremetrics Web Analytics) plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-coremetrics
```

Then add `angulartics.coremetrics.analytics` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics', 
  require('angulartics-coremetrics-analytics')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-coremetrics
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-coremetrics/dist/angulartics-coremetrics.min.js"></script>
```

Then add `angulartics.coremetrics.analytics` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics', 
  'angulartics.coremetrics.analytics'
]);
```

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[Apache v2](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-coremetrics.svg
[npm-url]: https://npmjs.org/package/angulartics-coremetrics
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-coremetrics.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-goremetrics
[bower-image]: https://img.shields.io/bower/v/angulartics-coremetrics.svg
[bower-url]: http://bower.io/search/?q=angulartics-coremetrics
[dep-status-image]: https://img.shields.io/david/angulartics/angulartics-coremetrics.svg
[dep-status-url]: https://david-dm.org/angulartics/angulartics-coremetrics
[license-image]: http://img.shields.io/badge/license-Apachev2-blue.svg
[license-url]: LICENSE