/**
 * splat - render mustache templates in express
 * Copyright(c) 2012 Mihai Tomescu <matomesc@gmail.com>
 */

var fs = require('fs'),
    path = require('path'),
    mustache = require('mustache');

exports.render = function render(_path, options, fn) {
  var fullPath = path.resolve(
    process.cwd(),
    options.settings.views,
    path.basename(_path)
  );
  fs.readFile(fullPath, 'utf8', function (err, data) {
    if (err) { return fn(err); }
    var html = mustache.to_html(data, options);
    if (options.layout) {
      var layoutPath = path.resolve(
        process.cwd(),
        options.settings.views,
        options.layout + '.' + options.settings['view engine']
      );
      return fs.readFile(layoutPath, 'utf8', function (err, data) {
        return fn(null, mustache.to_html(data, { body: html }));
      });
    } else {
      return fn(null, html);
    }
  });
};

// todo
exports.stream = function () {};