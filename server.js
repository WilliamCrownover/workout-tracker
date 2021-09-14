/* eslint-disable no-console */
/* eslint-disable no-undef */
// Required packages
const express = require( 'express' );
const logger = require( 'morgan' );
const mongoose = require( 'mongoose' );

// Server port
const PORT = process.env.PORT || 3000;

// Require routes
const routes = require( './routes' );

// Initialize app express variable
const app = express();

// App use
app.use( logger( 'dev' ) );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
app.use( express.static( 'public' ) );
app.use( routes );

// Mongoose connection
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true } );

// Listen to app
app.listen( PORT, () => {
	console.log( `App running http://localhost:${PORT}` );
} );