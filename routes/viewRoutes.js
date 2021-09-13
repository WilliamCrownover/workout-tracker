// URL localhost:3000/
const router = require( 'express' ).Router();
const path = require( 'path' );

router.get( '/stats', async ( req, res ) => {
    res.sendFile( path.join( __dirname, '/../public/stats.html'));
});

module.exports = router;