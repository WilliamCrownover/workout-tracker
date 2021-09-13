// Required packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Server port
const PORT = process.env.PORT || 3000;

// Require database models
const db = require("./models");

// Initialize app express variable
const app = express();

// App use
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));