import React from "react";
import './css/styles.css';

// we could place this Book component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Book extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    const name = this.props.name
    return <li>{name}</li> 
  }
}

// main component
class App extends React.Component {
  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { books:[] }
    this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/read', { method:'get', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
         this.setState({ books:json }) 
      })
  }

  // render component HTML using JSX
  render() {
    return (
      <div className="container">

        

        <h1 className="title">Personal <span className="italic">Library</span></h1>
        <p className="subtitle italic">Keep track of the book you are reading and your reading history!</p>


        <h1 className="current">Current Read: </h1>
        <input className="bookInput" type="text" id="x" placeholder="Set your current read (e.g., 'Of Mice and Men by John Steinbeck')" />
        <button onClick={ e => this.add( e )} id="button" className="btn">Set</button>


        <h2 className="lowerHeaders">Reading History:</h2>
        <ul className="books">
          { this.state.books.map( (name,i) => <Book key={i} name={name.name} /> ) }
        </ul>
        
         

      </div>
    );
  }

  // add a new item to previous books
  add( evt ) {
    const value = document.querySelector('input').value

    fetch( '/add', { 
      method:'POST',
      body: JSON.stringify({ name:value, completed:false }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then( response => response.json() )
    .then( json => {
       // changing state triggers reactive behaviors
       this.setState({ books:json }) 
    })
  }
}

export default App;