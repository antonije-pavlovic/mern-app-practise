const router = require( 'express' ).Router();

let Exercise = require( '../models/exercise' );

router.route( '/' ).get( (req, res) => {
    Exercise.find()
        .then( (exercise) => {
            res.json( exercise );
        } )
        .catch( (err) => {
            res.status( 400 ).json( 'Error' + err.message )
        } )
} );


router.route( '/:id' ).get( (req, res) => {
    Exercise.findById(req.params.id)
        .then( (one) => {
            res.json( one );
        } )
        .catch( (err) => {
            console.log( err );
            res.status( 400 ).json( 'Error' + err.message )
        } )
} );

router.route( '/:id' ).delete( (req, res) => {
    Exercise.findOneAndDelete(req.params.id)
        .then( (one) => {
            res.json( one );
        } )
        .catch( (err) => {
            res.status( 400 ).json( 'Error' + err.message )
        } )
} );

router.route( '/update/:id' ).post( (req, res) => {
    const { username, description, duration, date } = req.body;
    Exercise.findById(req.params.id)
        .then( (one) => {
            one.username = username;
            one.description = description;
            one.duration = Number( duration );
            one.date = Date.parse( date );

            one.save().then((one) => {
                res.json('Exercise updated')
            }).catch((err) => {
                res.status( 400 ).json( 'Error' + err.message )
            })
        } )
        .catch( (err) => {
            res.status( 400 ).json( 'Error' + err.message )
        } )
} );
router.route( '/add' ).post( (req, res) => {
    const { username, description, duration, date } = req.body;
    const newExercise = new Exercise( {
        username,
        description,
        duration: Number( duration ),
        date: Date.parse( date )
    } );
    newExercise.save()
        .then( (user) => {
            res.json( user )
        } )
        .catch( (err) => {
            res.status( 400 ).json( 'Error' + err.message )
        } )

} );


module.exports = router;
