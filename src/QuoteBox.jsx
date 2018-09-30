import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import Author from './Author';
import NewQuote from './NewQuote';
import TwitterQuote from './TwitterQuote';
import TumblrQuote from './TumblrQuote';

function QuoteBox({ quote, author, handleNewQuote }) {
  return (
    <div id="quote-box">
      <blockquote className="quote">
        <Text quote={quote} />
      </blockquote>
      <Author author={author} />
      <div className="social-media">
        <TwitterQuote quote={quote} author={author} />
        <TumblrQuote quote={quote} author={author} />
      </div>
      <NewQuote />
    </div>
  );
}

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default QuoteBox;
