// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400&family=Nanum+Gothic&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@200&display=swap');\n\n* {\n  background: #FFFFDE;\n}\n\n.container {\n  max-width: 1000px;\n  margin: auto;\n}\n\n.title {\n  text-align: center;\n  font-family: 'Nanum Gothic', sans-serif;\n  font-size: 4rem;\n}\n\n.subtitle {\n  text-align: center;\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n.italic {\n  font-style: italic;\n  color: #FF7396;\n}\n\n.current {\n  padding-top: 50px;\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n.bookInput {\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid #FF7396;\n  margin: 0.25rem 0 0.5rem 0;\n  font-size: 2rem;\n  transition: padding 0.5s ease;\n  color: #C499BA;\n}\n\n.bookInput:focus {\n  outline: none;\n  padding: 0.5 rem;\n}\n\n.btn {\n  color: #f4f4f4;\n  background: #FF7396;\n  padding: 0.5rem 1rem;\n  border: none;\n  transition: background 0.5s ease;\n}\n\n.btn:hover {\n  cursor: pointer;\n  background: #F4E06D;\n}\n\n.books {\n  margin: 2rem 0;\n  font-family: 'Inter Tight', sans-serif;\n}\n\n.currentRead {\n  font-family: 'Inter Tight', sans-serif;\n  font-size: 1.5rem;\n  margin: 0 2rem;\n  font-style: bold;\n\n}\n\n.lowerHeaders {\n  padding-top: 25px;\n  font-family: 'Nanum Gothic', sans-serif;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}