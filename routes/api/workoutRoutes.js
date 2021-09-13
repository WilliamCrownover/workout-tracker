// URL localhost:3000/api/workouts
const router = require( 'express' ).Router();
const db = require("../../models");

// Get all the workout data and add a totalDuration field
router.get( '/', async ( req, res ) => {
    try {
        const workoutsData = await db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }
        ]);

        res.status( 200 ).json( workoutsData );

    } catch ( err ) {
        res.status( 400 ).json( err );
    }
});

// Push a new exercise to existing workout
router.put( '/:id', async ( req, res ) => {
    try {
        const workoutData = await db.Workout.updateOne(
            {
                _id: req.params.id
            },
            {
                $push: {
                    exercises: {...req.body}
                }
            }
        );

        res.status( 200 ).json( workoutData );

    } catch ( err ) {
        res.status( 400 ).json( err );
    }
});

module.exports = router;