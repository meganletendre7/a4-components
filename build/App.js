import React from "./_snowpack/pkg/react.js";
import "./css/styles.css.proxy.js";
class Book extends React.Component {
  render() {
    const name = this.props.name;
    return /* @__PURE__ */ React.createElement("li", null, name);
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books: []};
    this.load();
  }
  load() {
    fetch("/read", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      this.setState({books: json});
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "title"
    }, "Personal ", /* @__PURE__ */ React.createElement("span", {
      className: "italic"
    }, "Library")), /* @__PURE__ */ React.createElement("p", {
      className: "subtitle italic"
    }, "Keep track of the book you are reading and your reading history!"), /* @__PURE__ */ React.createElement("h1", {
      className: "current"
    }, "Current Read: "), /* @__PURE__ */ React.createElement("input", {
      className: "bookInput",
      type: "text",
      id: "x",
      placeholder: "Set your current read (e.g., 'Of Mice and Men by John Steinbeck')"
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => this.add(e),
      id: "button",
      className: "btn"
    }, "Set"), /* @__PURE__ */ React.createElement("h2", {
      className: "lowerHeaders"
    }, "Reading History:"), /* @__PURE__ */ React.createElement("ul", {
      className: "books"
    }, this.state.books.map((name, i) => /* @__PURE__ */ React.createElement(Book, {
      key: i,
      name: name.name
    }))));
  }
  add(evt) {
    const value = document.querySelector("input").value;
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({name: value, completed: false}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({books: json});
    });
  }
}
export default App;
