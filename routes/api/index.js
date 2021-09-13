// URL localhost:3000/api

const router = require( 'express' ).Router();

const workoutRoutes = require( './workoutRoutes' );

router.use( '/workouts', workoutRoutes );

module.exports = router;