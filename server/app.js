'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var request = require('request');
var hbs = require('express-hbs');
var cheerio = require('cheerio');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 5000);
    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../app/scripts/views');
});

app.use(function(req, res, next){
	console.log('%s %s', req.method, req.url);
	next();
});

// mount static
app.use(express.static( path.join( __dirname, '../app') ));
app.use(express.static( path.join( __dirname, '../.tmp') ));

// scape page for title
app.get('/scrape', function(req, res, next) {

	var scrapePage = function (url, cb) {
		request(url, function (err, resp, body) {
			if (err) {
				cb(err);
			} else {
				var site = cheerio.load(body),
				siteTitle = site('title').text();
				
				cb(null, { url: url, title: siteTitle });
			}
		});
	}

	if (req.query.url) {
		async.map(req.query.url, scrapePage, function(err, body) {
			if (err) {
				throw err;
			} else {
				res.json(body);
			}
		});
	}
});

// route index.html
app.get('/', function(req, res){
	res.sendfile( path.join( __dirname, '../app/index.html' ) );
});

// start server
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express App started!');
});