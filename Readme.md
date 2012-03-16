# splat

> render templates in your express apps
> soon you will also be able to stream them

## example

```javascript
var splat = require('splat'),
    app = require('express')();

// configure express to use splate
app.configure(function(){
  // templates location
  app.set('views', 'templates');
  // default view engine
  app.set('view engine', 'mustache');
  // set the engine to splat
  app.engine('.mustache', splat.render);
});
```

## install

```
$ npm install splat

// for tests

$ npm install splat --dev
```