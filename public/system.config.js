;(function() {
  'use strict';

  // map tells the System loader where to look for things
  var map = {
    "rxjs":                               "lib/rxjs",
    "@angular":                           "lib/@angular",
    "@angular/core":                      "lib/@angular/core/bundles/core.umd.min.js",
    "@angular/common":                    "lib/@angular/common/bundles/common.umd.min.js",
    "@angular/compiler":                  "lib/@angular/compiler/bundles/compiler.umd.min.js",
    "@angular/platform-browser":          "lib/@angular/platform-browser/bundles/platform-browser.umd.min.js",
    "@angular/platform-browser-dynamic":  "lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js"
  };

  var config = {
    defaultJSExtensions: true,
    map: map
  };

  System.config(config);
})();