const express = require("express");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");

const urlsRouter = require("./urls/url-api");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/urls", urlsRouter);

module.exports = app;
