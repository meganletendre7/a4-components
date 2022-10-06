const express  = require( 'express' ),
      app      = express()

const books = [
  
]

app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( books ) )

app.post( '/add', ( req,res ) => {
  books.push( req.body )
  res.json( books )
})

app.post( '/change', function( req,res ) {
  const idx = books.findIndex( v => v.name === req.body.name )
  books[ idx ].completed = req.body.completed

  res.sendStatus( 200 )
})

app.listen( process.env.PORT || 8080 );