// URL localhost:3000/api/workouts
const router = require( 'express' ).Router();
const db = require("../../models");

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

module.exports = router;