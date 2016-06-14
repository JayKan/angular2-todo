;(function() {
  'use strict';

  // map tells the System loader where to look for things
  var map = {
    "rxjs":                               "lib/rxjs",
    "@angular":                           "lib/@angular",
    "@angular/core":                      "lib/@angular/core/index.js",
    "@angular/common":                    "lib/@angular/common/index.js",
    "@angular/compiler":                  "lib/@angular/compiler/index.js",
    "@angular/platform-browser":          "lib/@angular/platform-browser/index.js",
    "@angular/platform-browser-dynamic":  "lib/@angular/platform-browser-dynamic/index.js"
  };

  var config = {
    defaultJSExtensions: true,
    map: map
  };

  System.config(config);
})();