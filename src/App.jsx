import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import QuoteBox from './QuoteBox';

library.add(fab);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };

    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote() {
    const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    fetch(URL)
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

  handleNewQuote() {
    this.getNewQuote();
  }

  render() {
    const { quote } = this.state;
    const { author } = this.state;

    return (
      <QuoteBox quote={quote} author={author} handleNewQuote={this.handleNewQuote} />
    );
  }
}

export default App;
ReactDOMServer.renderToString(<App />);
