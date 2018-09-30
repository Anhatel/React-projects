import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import QuoteBox from './QuoteBox';

library.add(fab, faQuoteLeft);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };

    this.getBackgroundColor = this.getBackgroundColor.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
  }

  componentDidMount() {
    this.setBackgroundColor(this.getBackgroundColor());
    this.getNewQuote();

    const newQuote = document.querySelector('#quote-box > #new-quote');
    newQuote.addEventListener('click', () => {
      this.setBackgroundColor(this.getBackgroundColor());
      this.getNewQuote();
    });
  }

  getNewQuote() {
    const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    return fetch(URL)
      .then(result => result.json())
      .then((result) => {
        const quotesArray = [...result.quotes];
        const randomQuoteAndAuthor = quotesArray[Math.floor(Math.random() * quotesArray.length)];
        const randomQuote = randomQuoteAndAuthor.quote;
        const randomAuthor = randomQuoteAndAuthor.author;

        this.setState({
          quote: randomQuote,
          author: randomAuthor,
        });
      });
  }

  getBackgroundColor() {
    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
    const random = Math.floor(Math.random() * colors.length);
    const randomColor = colors[random];

    return randomColor;
  }

  setBackgroundColor(color) {
    const htmlBody = document.querySelector('body');
    const quote = document.querySelector('.quote > #text');
    const author = document.querySelector('#author');
    const buttons = document.querySelectorAll('.button');

    htmlBody.style.backgroundColor = color;
    quote.style.color = color;
    author.style.color = color;
    buttons.forEach(button => button.style.backgroundColor = color);
  }

  render() {
    const { quote } = this.state;
    const { author } = this.state;

    return (
      <QuoteBox quote={quote} author={author} />
    );
  }
}

export default App;
ReactDOMServer.renderToString(<App />);
