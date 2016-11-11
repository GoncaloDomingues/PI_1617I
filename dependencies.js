"use strict"
exports.express = require('express');
exports.session = require('express-session');
exports.bodyParser = require('body-parser');
exports.expressHandlebars = require('express-handlebars');7
exports.handlebars = require('handlebars');
exports.fs = require('fs');
exports.request = require("request");
exports.path = require('path');
exports.api = require("./API/Api-data.js");
exports.options =require("./utils/options.js");
exports.spotifyClient = require("./spotify-app-client.js");
exports.routes = require("./spotify-app-routes.js").spotifyRoutes;

