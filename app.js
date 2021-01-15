var express = require("express");

var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");

var urlsRouter = require("./urls/url-api");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/urls", urlsRouter);

module.exports = app;
