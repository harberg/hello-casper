var $ = require('jquery');
var Bootstrap = require('bootstrap');
Bootstrap.$ = $;
var Post = require('./post');


var how_to_use_browserify = new Post("How to use browserify");

$('body').append('<p>' + how_to_use_browserify.title + ' and Samwise</p>');