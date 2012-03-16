# splat

> render templates in your express apps (streaming coming soon)

## example

```javascript
var splat = require('splat'),
    app = require('express')();

// configure express to use splat
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