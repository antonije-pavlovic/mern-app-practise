const router = require( 'express' ).Router();

let User = require( '../models/user' );

router.route( '/' ).get( (req, res) => {
    User.find()
        .then( (users) => {
            res.json( users );
        } )
        .catch( (err) => {
            console.log( err );
        } )
} );

router.route( '/add' ).post( (req, res) => {
    const { username } = req.body;
    const newUser = new User( { username } );

    newUser.save()
        .then( (users) => {
            res.json( users );
        } )
        .catch( (err) => {
            console.log( err );
        } )
} );

module.exports = router;
