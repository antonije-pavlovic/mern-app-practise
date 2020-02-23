require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );

const app = express();
const port = process.env.PORT || 5000;

app.use( cors() );
app.use( express.json() );

const uri = process.env.ATLAS_URI;
console.log( uri );
mongoose.connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } );
const connection = mongoose.connection;

connection.once( 'open', () => {
    console.log( 'MongoDB is successfully running' );
} );

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen( port, () => {
    console.log( `app is listening on port ${ port }` );
} );
